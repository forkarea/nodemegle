import {Store} from 'vuex';

export default function(plugins) {
   return new Store({
        state: {
            count: 1
        },
        mutations: {
            increment (state) {
                state.count++;
            }
        },
        plugins
    });
}