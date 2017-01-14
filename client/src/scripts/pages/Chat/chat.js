import MainLayout from '../../shared/Main.vue';
import {mapMutations, mapState} from 'vuex'
import {SIGNAL_FOR_NEW_PARTNER, SEND_MESSAGE} from '../../mutations-dictionary';

export default {
    name: 'chat-view',
    data: function () {
        return {
            message: ''
        }
    },
    components: {
        MainLayout,
    },
    computed: {
        ...mapState(['count', 'partner'])
    },
    methods: {
        ...mapMutations({
            increment: 'increment',
            getNext: SIGNAL_FOR_NEW_PARTNER,
            submitMessage: SEND_MESSAGE
        }),
        sendMessage: function () {
            this.submitMessage(this.message);
            this.message = '';
        },
        nextPartner: function () {
            this.getNext();
        }
    },
    watch: {
        'partner.connected': function () {
            console.log(`partner changed!! new wal: ${this.partner.connected}`)
        }
    },
    beforeDestroy: () => {
        console.log('chat destroy')
    },
    mounted: function () {
        this.getNext();
    },
    beforeMount: function () {
        console.log(this)
        this.increment();
        console.log('chat search');
    }

}