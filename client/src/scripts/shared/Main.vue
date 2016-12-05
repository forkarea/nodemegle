<template>
    <div>
        <nav>
            <div class="nav-wrapper teal accent-3">
                <a href="#" class="brand-logo center">Nodemagle</a>
                <a href="#" data-activates="burger" class="button-collapse"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li>
                        <v-link href="/">Home</v-link>
                    </li>
                </ul>
                <ul class="side-nav" id="burger">
                    <li>
                        <v-link href="/">Home</v-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <h1>NODEMAGLE</h1>
            <i class="material-icons">cloud</i>
            <p>Welcome to nodemagle</p>
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

  export default {
        components: {
          VLink
        },
        mounted: () => {
          $(".button-collapse").sideNav();
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




</style>
