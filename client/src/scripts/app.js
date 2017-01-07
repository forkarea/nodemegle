import Vue from 'vue';
import routes from './routes';
import io from 'socket.io-client';
import Vuex from 'vuex';
import socketManager from './plugins/socketManager';
import storeFactory from './store';
var socket = io();

Vue.use(Vuex);

const plugins = [socketManager(socket)];
const store = storeFactory(plugins);

const app = new Vue({
    el: '#app',
    store,
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent () {
            const matchingView = routes[this.currentRoute];
            console.log(matchingView);
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
    app.currentRoute = window.location.pathname;
});