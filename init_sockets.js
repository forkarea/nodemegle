const User = require('./models/user');
const socketMessageTypes = require('./shared/socket-message-types-dictionary');
var usersStore = require('./models/users-store');

module.exports = function initSockets(http) {

    var io = require('socket.io')(http);

    io.on('connection', function(socket){
        let user;

        socket.on('disconnect', function(){
            if(user){
                usersStore.removeUser(user);
                user = null;
            }
        });

        socket.on(socketMessageTypes.USER_LOGIN, function(name){
            user = new User(name, socket);
            usersStore.addUser(user);
        });
    });
};
