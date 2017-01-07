module.exports = function initSockets(http) {
    console.log('sockets initialized');
    var io = require('socket.io')(http);

    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    });
};