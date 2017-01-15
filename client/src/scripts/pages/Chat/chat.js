import MainLayout from '../../shared/Main.vue';
import VLink from '../../components/VLink.vue';
import {mapMutations, mapState} from 'vuex'
import {SIGNAL_FOR_NEW_PARTNER, SEND_MESSAGE, STOP_SEARCHING} from '../../mutations-dictionary';
import MessagesList from '../../components/MessagesList.vue';

export default {
    name: 'chat-view',
    data: function () {
        return {
            message: ''
        }
    },
    components: {
        MainLayout,
        VLink,
        MessagesList
    },
    computed: {
        ...mapState(['partner'])
    },
    methods: {
        ...mapMutations({
            submitMessage: SEND_MESSAGE,
            stopSearching: STOP_SEARCHING
        }),
        sendMessage: function () {
            this.submitMessage(this.message);
            this.message = '';
        }
    },
    watch: {
        'partner.connected': function () {
        }
    },
    beforeDestroy: () => {
        console.log('chat destroy');
    },
    beforeMount: function () {
        console.log('chat search');
    }
}