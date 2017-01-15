import {Store} from 'vuex';
import routes from './routes'
import {
    SELECT_NAME,
    UPDATE_PARTNER,
    NAVIGATE_TO,
    LOG_OUT,
    SIGNAL_FOR_NEW_PARTNER,
    UPDATE_NAME,
    SEND_MESSAGE,
    STOP_SEARCHING,
    RECEIVE_MESSAGE,
    SYSTEM_MESSAGE
} from './mutations-dictionary';
import {Message} from './models/Message';
import {OWN, OUTER, SYSTEM} from './models/MessageTypes';

export default function (plugins) {
    return new Store({
        state: {
            username: '',
            partner: {
                connected: false,
                name: ""
            },
            messagesList: [],
            currentRoute: window.location.pathname
        },
        mutations: {
            [SELECT_NAME](state, name){
                state.username = name;
            },
            [UPDATE_NAME](state, name){
                state.username = name;
            },
            [UPDATE_PARTNER](state, partner){
                state.partner = partner;
            },
            [SIGNAL_FOR_NEW_PARTNER](state){
                state.partner = {
                    connected: false,
                    name: ""
                };
                state.messagesList = [];
            },
            [STOP_SEARCHING](state){
                state.partner = {
                    connected: false,
                    name: ""
                }
            },
            [SEND_MESSAGE](state, message){
                state.messagesList.unshift(new Message(OWN, state.username, message, new Date));
            },
            [RECEIVE_MESSAGE](state, msg){
                state.messagesList.unshift(new Message(OUTER, state.partner.name || '', msg, new Date));
            },
            [SYSTEM_MESSAGE](state, msg){
                state.messagesList.unshift(new Message(SYSTEM, '', msg, new Date));
            },
            [NAVIGATE_TO](state, route){
                state.currentRoute = route;
                // troche brzydkie ale co zrobic
                window.history.pushState(
                    null,
                    routes[route],
                    route
                )
            },
            [LOG_OUT](state){
                state.username = '';
            }
        },
        plugins
    });
}