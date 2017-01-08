    <template>
    <div>
        <ul id="dropdown1" class="dropdown-content">
            <li><a @click="logOut">Wyloguj</a></li>
        </ul>
        <nav>
            <div class="nav-wrapper teal accent-3">
                <h2 class="brand-logo center">Nodemagle</h2>
                <a v-show="username" class="dropdown-button right" data-activates="dropdown1"><h4>{{username}}</h4></a>
            </div>
        </nav>

        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    // pierwszy i ostatni raz. Jest jeszcze biblioteka Material-design-lite
    // ma już więcej gwiazdek na gicie.
    // wcale sie kurwa nie dziwie...
    import 'materialize-css/bin/materialize.css';
    import '../../styles/main.scss';
    import VLink from '../components/VLink.vue';
    import {mapState, mapMutations} from 'vuex';
    import {NAVIGATE_TO, LOG_OUT} from '../mutations-dictionary'

  export default {
        components: {
          VLink
        },
        computed: {
            ...mapState(['username'])
        },
        mounted: () => {
            $(".dropdown-button").dropdown();
        },
        methods: {
            ...mapMutations({
                navigateTo: NAVIGATE_TO,
                logOut: LOG_OUT
            })
        },
        watch:{
            username: function(username){
                if(!username){
                    this.navigateTo('/');
                }
            }
        }
    }



</script>

<style scoped>
  .container {
    max-width: 1000px;
    margin: 5px auto 0 auto;
    padding: 15px 30px;
    background: #f9fbe1;
  }

  .dropdown-button, ul.dropdown-content li {
      cursor: pointer;
      cursor: hand;
      cursor: -webkit-hand;
    }


</style>
