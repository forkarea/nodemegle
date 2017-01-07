import MainLayout from '../../shared/Main.vue';
import VLink from '../../components/VLink.vue';
import { mapMutations, mapState } from 'vuex';
console.log('hejo',mapState, mapMutations);
export default {
    name: 'search-view',
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
        console.log('search destroy')
    },
    beforeMount: function () {
        this.increment();
        console.log('rendered search');
    }

}