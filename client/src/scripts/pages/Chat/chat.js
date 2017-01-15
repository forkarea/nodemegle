import MainLayout from '../../shared/Main.vue';
import VLink from '../../components/VLink.vue';
import {mapMutations, mapState} from 'vuex'
import {SIGNAL_FOR_NEW_PARTNER, SEND_MESSAGE, STOP_SEARCHING, SYSTEM_MESSAGE} from '../../mutations-dictionary';
import MessagesList from '../../components/MessagesList.vue';
import MessageItem from '../../components/MessageItem.vue';

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
        MessageItem,
        MessagesList
    },
    computed: {
        ...mapState(['partner', 'messagesList'])
    },
    methods: {
        ...mapMutations({
            submitMessage: SEND_MESSAGE,
            stopSearching: STOP_SEARCHING,
            sendSystemMessage: SYSTEM_MESSAGE
        }),
        sendMessage: function () {
            this.submitMessage(this.message);
            this.message = '';
        }
    },
    watch: {
        'partner.connected': function () {
            if(!this.partner.connected){
                this.sendSystemMessage('Twój rozmówca rozłączył się');
            }
        }
    },
    beforeDestroy: () => {
        console.log('chat destroy');
    },
    beforeMount: function () {
        console.log('chat search');
    }
}