import Vue from 'vue';
import routes from './routes';
import io from 'socket.io-client';
import Vuex, {mapState} from 'vuex';
import socketManager from './plugins/socketManager';
import storeFactory from './store';
import {NAVIGATE_TO} from './mutations-dictionary';
var socket = io();

console.log('sockets initialized - app');

Vue.use(Vuex);

const plugins = [socketManager(socket)];
const store = storeFactory(plugins);

const app = new Vue({
    el: '#app',
    store,
    computed: {
        ...mapState(['currentRoute']),
        ViewComponent () {
            const matchingView = routes[this.currentRoute];
            return matchingView
                ? require('./pages/' + matchingView + '.vue')
                : require('./pages/404.vue')
        }
    },
    render (h) {
        return h(this.ViewComponent)
    }
});

window.addEventListener('popstate', () => {
    store.commit(NAVIGATE_TO, window.location.pathname);
});