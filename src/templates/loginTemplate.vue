<template>
  <main>
    <div class="container">
      <slot name="header" />
      <slot name="principal" />
    </div>
  </main>
</template>
<script>
  export default {
    name: 'LoginTemplate',
    data(){
      return {

      }
    },
    components: {

    },
    created() {

    },
    methods: {

    }
  }
</script>

<style>

</style>
