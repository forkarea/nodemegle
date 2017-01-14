import {
    SELECT_NAME,
    LOG_OUT,
    SIGNAL_FOR_NEW_PARTNER,
    UPDATE_PARTNER,
    SEND_MESSAGE
} from '../mutations-dictionary';
const socketMessageTypes = require('../../../../shared/socket-message-types-dictionary');

export default function socketManager(socket) {
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
                case SIGNAL_FOR_NEW_PARTNER: {
                    socket.emit(socketMessageTypes.ASK_FOR_NEW_PARTNER);
                    break;
                }
                case SEND_MESSAGE: {
                    socket.emit(socketMessageTypes.MESSAGE, mutation.payload);
                }
            }

            socket.on(socketMessageTypes.CONNECT_NEW_PARTNER, partner => {
                store.commit(UPDATE_PARTNER, {
                    connected: true,
                    name: partner
                });
            });
            socket.on(socketMessageTypes.MESSAGE, msg => {
               console.log(`MSG RECEIVED!! -> ${msg}`);
            });
            socket.on(socketMessageTypes.LOST_PARTNER, () => {
                store.commit(UPDATE_PARTNER, {
                    ...store.partner,
                    connected: false,
                });
            });
        });
        // setInterval(function(){
        //     let partner = {connected: !store.state.partner.connected,name: store.state.partner.name};
        //     console.log(partner)
        //     store.commit(UPDATE_PARTNER, partner);
        // }, 5000)
    }
}