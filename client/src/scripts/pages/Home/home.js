import MainLayout from '../../shared/Main.vue';
import VLink from '../../components/VLink.vue';
console.log('rendered home');
export default {
    name: 'app-home',
    components: {
        MainLayout,
        VLink
    },
    beforeDestroy: () => {
        console.log('home destroy')
    },
    beforeMount: () => {
        console.log('rendered home');
    }

}