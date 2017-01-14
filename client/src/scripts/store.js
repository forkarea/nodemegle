import {Store} from 'vuex';
import routes from './routes'
import {
    SELECT_NAME,
    UPDATE_PARTNER,
    NAVIGATE_TO,
    LOG_OUT,
    SIGNAL_FOR_NEW_PARTNER,
    SEND_MESSAGE
} from './mutations-dictionary';

export default function (plugins) {
    return new Store({
        state: {
            count: 1,
            username: '',
            partner: {
                connected: false,
                name: ""
            },
            currentRoute: window.location.pathname
        },
        mutations: {
            increment (state) {
                state.count++;
            },
            [SELECT_NAME](state, name){
                state.username = name;
            },
            [UPDATE_PARTNER](state, partner){
                state.partner = partner;
            },
            [SIGNAL_FOR_NEW_PARTNER](state){
                state.partner = {
                    connected: false,
                    name: ""
                }
            },
            [SEND_MESSAGE](state){

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
                state.username = null;
            }
        },
        plugins
    });
}