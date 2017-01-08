import {SELECT_NAME, UPDATE_PARTNER, LOG_OUT} from '../mutations-dictionary';
const socketMessageTypes = require('../../../../shared/socket-message-types-dictionary');

export default function socketManager (socket) {
    return store => {
        socket.on('data', data => {
            store.commit('receiveData', data)
        });
        store.subscribe(mutation => {
            console.log(mutation);
            switch (mutation.type) {
                case SELECT_NAME: {
                    socket.emit(socketMessageTypes.USER_LOGIN, mutation.payload);
                    break;
                }
                case LOG_OUT: {
                    socket.emit(socketMessageTypes.USER_LOGOUT);
                    break;
                }
            }
            
        });
        // setInterval(function(){
        //     let partner = {connected: !store.state.partner.connected,name: store.state.partner.name};
        //     console.log(partner)
        //     store.commit(UPDATE_PARTNER, partner);
        // }, 5000)
    }
}