const User = require('./models/user');
const socketMessageTypes = require('./shared/socket-message-types-dictionary');
let pairingEngine = require('./actions/pairingEngine');
var usersStore = require('./models/users-store');

module.exports = function initSockets(http) {

    var io = require('socket.io')(http);

    io.on('connection', function (socket) {
        let user;

        socket.on('disconnect', function () {
            disposeUser(user);
            signalPartner(user);
        });

        socket.on(socketMessageTypes.USER_LOGIN, name => {
            user = new User(name, socket);
            usersStore.addUser(user);
            usersStore.printActiveUsers();
        });

        socket.on(socketMessageTypes.USER_LOGOUT, () => {
            disposeUser(user);
            signalPartner(user);
        });
        socket.on(socketMessageTypes.ASK_FOR_NEW_PARTNER, () => {
            signalPartner(user);
            pairingEngine.findPartner(user)
                .then(function (result) {
                    if(result){
                        user.partner = result;
                        socket.emit(socketMessageTypes.CONNECT_NEW_PARTNER, user.partner.userName);
                    }
                });
        });
        socket.on(socketMessageTypes.MESSAGE, msg => {
            user.partner && user.partner.socket.emit(socketMessageTypes.MESSAGE, msg);
        });
        socket.on(socketMessageTypes.STOP_SEARCHING, () => {
            signalPartner(user);
            user.endSearching(null);
        });
        socket.on(socketMessageTypes.UPDATE_NAME, name => {
            user.updateName(name);
        })
    });
};

function disposeUser(user) {
    if (user) {
        usersStore.removeUser(user);
        user = null;
    }
    usersStore.printActiveUsers();
}

function signalPartner(user) {
    if (user && user.partner) {
        user.partner.socket.emit(socketMessageTypes.LOST_PARTNER);
        user.partner.clearPartner();
    }
}