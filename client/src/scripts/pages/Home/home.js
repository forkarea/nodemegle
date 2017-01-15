import MainLayout from '../../shared/Main.vue';
import VLink from '../../components/VLink.vue';
import {mapMutations, mapState} from 'vuex';
import {SELECT_NAME, NAVIGATE_TO, UPDATE_NAME, STOP_SEARCHING} from '../../mutations-dictionary';
import axios from 'axios';

const waitHref = '/wait';

export default {
    name: 'app-home',
    data: function () {
        return {
            errors: null,
            name: ''
        }
    },
    components: {
        MainLayout,
        VLink
    },
    computed: {
        ...mapState(['username'])
    },
    methods: {
        ...mapMutations({
            selectName: SELECT_NAME,
            navigateTo: NAVIGATE_TO,
            updateSelectedName: UPDATE_NAME,
            stopSearching: STOP_SEARCHING
        }),
        updateName: function (e) {
            this.errors = null;
            this.name = e.target.value;
        },
        submitForm: function () {
            if (this.name && this.name == this.username) {
                this.navigateTo(waitHref);
            }

            axios.get(`/api/user-exists?name=${this.name}`).then(({data: {free, message}}) => {
                if (!free) {
                    this.errors = message;
                } else {
                    this.username ? this.updateSelectedName(this.name) : this.selectName(this.name);
                    this.navigateTo(waitHref);
                }
            })
                .catch((res) => {
                    this.errors = "Nieznany błąd"
                });

        },
        clearErrors: function () {
            this.errors = null;
        }
    },
    beforeDestroy: function () {
        console.log('home destroy')
    },
    beforeMount() {
        if (this.username) {
            this.stopSearching()
        }
    },
    mounted: function () {
        this.name = this.username;
    }
}