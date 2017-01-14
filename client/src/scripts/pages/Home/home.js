import MainLayout from '../../shared/Main.vue';
import VLink from '../../components/VLink.vue';
import {mapMutations} from 'vuex';
import {SELECT_NAME, NAVIGATE_TO} from '../../mutations-dictionary';
import axios from 'axios';

const chatHref = '/chat';

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
        ...mapMutations({
            selectName: SELECT_NAME,
            navigateTo: NAVIGATE_TO
        }),
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
                    this.navigateTo(chatHref);
                }
            })
                .catch((res) => {
                    this.errors = "Nieznany błąd"
                });

        },
        clearErrors: function(){
            this.errors = null;
        }
    },
    beforeDestroy: function () {
        console.log('home destroy')
    },
    beforeMount: function () {
        console.log('asd ', this.$root.href);
        console.log('rendered home');
    }

}