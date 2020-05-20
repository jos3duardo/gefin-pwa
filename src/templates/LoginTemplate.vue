<template>
  <main>
      <span>
        <nav-bar-vue logo="Gefin - Space" url="/" cor="red" >
          <li v-if="user"><a href="/">Home</a></li>
          <li v-if="!user"> <router-link to="/login">Login</router-link></li>
          <li v-if="user"> <router-link to="/profile">{{user.name}}</router-link></li>
        </nav-bar-vue>
    </span>
    <div class="container">
      <slot name="header" />
      <slot name="principal" />
    </div>
    <footer-vue cor="orange" />

  </main>
</template>
<script>
  import NavBarVue from "../components/layouts/NavBarVue";
  import FooterVue from "../components/layouts/FooterVue";
  export default {
    name: 'LoginTemplate',
    data(){
      return {
        user: false,
        name: '',
        email: '',
        password: '',
        password_confirmation:'',
        image: '',
      }
    },
    components: {
      NavBarVue,
      FooterVue
    },
    created() {
      let userAux = this.$store.getters.getUser
      if (userAux){
        this.user = this.$store.getters.getUser
        this.$router.push('/')
      }
    },
    methods: {

    }
  }
</script>

<style>

</style>
