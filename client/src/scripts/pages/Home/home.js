import MainLayout from '../../shared/Main.vue';
import VLink from '../../components/VLink.vue';
import {mapMutations} from 'vuex';
import {SELECT_NAME} from '../../mutations-dictionary';
import axios from 'axios';

import routes from '../../routes'
const waitHref = '/wait';

export default {
    name: 'app-home',
    data: function () {
        return {
            errors: null
        }
    },
    components: {
        MainLayout,
        VLink
    },
    methods: {
        updateName: function (e) {
            this.errors = null;
            this.name = e.target.value;
        },
        submitForm: function () {
            axios.get(`/api/user-exists?name=${this.name}`).then(({data: {free, message}}) => {
                if(!free){
                    this.errors = message;
                } else {
                    this.selectName(this.name);
                    // nawigacja mozna to potem gdzies wyjac troche uciazliwe bo potrzebuje thisu
                    this.$root.currentRoute = waitHref;
                    window.history.pushState(
                        null,
                        routes[waitHref],
                        waitHref
                    )
                }
            })
                .catch((res) => {
                    this.errors = "Nieznany błąd"
                });

        },
        clearErrors: function(){
            this.errors = null;
        },
        ...mapMutations({
            selectName: SELECT_NAME
        })
    },
    beforeDestroy: function () {
        console.log('home destroy')
    },
    beforeMount: function () {
        console.log('rendered home');
    }

}