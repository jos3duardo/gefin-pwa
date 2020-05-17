<template>

  <main>
      <span>
<!--       <header>-->
        <nav-bar logo="Gefin - Space" url="/" cor="red" >
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
        </nav-bar>
<!--      </header>-->
    </span>
    <div class="container">
      <slot name="header" />
      <slot name="principal" />
    </div>
  </main>
</template>
<script>
  import NavBar from "../components/layouts/NavBar";
  export default {
    name: 'LoginTemplate',
    data(){
      return {

      }
    },
    components: {
      NavBar
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style>

</style>
