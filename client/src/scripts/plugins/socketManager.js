import {SELECT_NAME} from '../mutations-dictionary';
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
                    socket.emit(socketMessageTypes.USER_LOGIN, mutation.payload)
                    break;
                }
            }
            
        })
    }
}