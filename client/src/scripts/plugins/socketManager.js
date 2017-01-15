import {
    SELECT_NAME,
    LOG_OUT,
    SIGNAL_FOR_NEW_PARTNER,
    UPDATE_PARTNER,
    SEND_MESSAGE,
    UPDATE_NAME,
    STOP_SEARCHING,
    RECEIVE_MESSAGE
} from '../mutations-dictionary';

const socketMessageTypes = require('../../../../shared/socket-message-types-dictionary');

export default function socketManager(socket) {
    let store;

    socket.on(socketMessageTypes.CONNECT_NEW_PARTNER, partner => {
        store && store.commit(UPDATE_PARTNER, {
            connected: true,
            name: partner
        });
    });
    socket.on(socketMessageTypes.MESSAGE, msg => {
        store && store.commit(RECEIVE_MESSAGE, msg);
    });
    socket.on(socketMessageTypes.LOST_PARTNER, () => {
        store && store.commit(UPDATE_PARTNER, {
            ...store.partner,
            connected: false,
        });
    });

    return _store => {
        store = _store
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
                    break;
                }
                case UPDATE_NAME: {
                    socket.emit(socketMessageTypes.UPDATE_NAME, mutation.payload);
                    break;
                }
                case STOP_SEARCHING: {
                    socket.emit(socketMessageTypes.STOP_SEARCHING);
                    break;
                }
            }
        });
    }
}