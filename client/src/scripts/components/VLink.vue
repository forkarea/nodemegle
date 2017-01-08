<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <a v-bind:href="href" v-bind:class="{ active: isActive }" v-on:click="go">
        <slot></slot>
    </a>
</template>

<script>
  import routes from '../routes'
  import {NAVIGATE_TO} from '../mutations-dictionary';
  import {mapMutations} from 'vuex'
  export default {
    props: {
      href: String,
      required: true
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {
      ...mapMutations({
        navigateTo: NAVIGATE_TO
      }),
      go (event) {
        event.preventDefault();
        this.navigateTo(this.href);
      }
    }
  }


</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }


</style>
