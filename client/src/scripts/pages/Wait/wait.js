import MainLayout from '../../shared/Main.vue';
import VLink from '../../components/VLink.vue';
import {mapMutations, mapState} from 'vuex';
import {NAVIGATE_TO, SIGNAL_FOR_NEW_PARTNER} from '../../mutations-dictionary';

export default {
    name: 'search-view',
    components: {
        MainLayout,
        VLink
    },
    computed: {
        ...mapState(['partner'])
    },
    methods: {
        ...mapMutations({
            navigateTo: NAVIGATE_TO,
            getNext: SIGNAL_FOR_NEW_PARTNER,
        })
    },
    watch: {
        'partner.connected': function () {
            if (this.partner && this.partner.connected) {
                this.navigateTo('/chat');
            }
        }
    },
    mounted: function () {
        this.getNext();
    },
    beforeDestroy: () => {
        console.log('search destroy')
    },
    beforeMount: function () {
        console.log('rendered search');
    }

}