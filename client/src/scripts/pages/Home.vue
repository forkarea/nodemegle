<template>
    <main-layout>
        <h1>Home</h1>
    </main-layout>
</template>

<script>
  import MainLayout from '../shared/Main.vue'
  console.log('rendered home');
  export default {
    components: {
      MainLayout
    },
    beforeDestroy: () => {
      console.log('home destroy')
    },
    beforeMount: () => {
      console.log('rendered home');
    }

  }


</script>
