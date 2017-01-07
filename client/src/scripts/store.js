import {Store} from 'vuex';
import {SELECT_NAME} from './mutations-dictionary';

export default function(plugins) {
   return new Store({
        state: {
            count: 1,
            name: ''
        },
        mutations: {
            increment (state) {
                state.count++;
            },
            [SELECT_NAME](state, name){
                state.name = name;
            }
        },
        plugins
    });
}