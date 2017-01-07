import MainLayout from '../../shared/Main.vue';
import VLink from '../../components/VLink.vue';
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'chat-view',
    components: {
        MainLayout,
        VLink
    },
    computed: {
        ...mapState(['count'])
    },
    methods: {
        ...mapMutations(['increment'])
    },
    beforeDestroy: () => {
        console.log('chat destroy')
    },
    beforeMount: function() {
        console.log(this)
        this.increment();
        console.log('chat search');
    }

}