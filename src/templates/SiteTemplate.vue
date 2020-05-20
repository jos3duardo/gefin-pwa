<template>
    <main>
      <nav-bar-vue logo="Gefin" url="/" cor="black" >
        <li><a href="/">Home</a></li>
        <li v-if="!user"> <router-link to="/login">Login</router-link></li>
      </nav-bar-vue>
      <slot></slot>
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

      }
    },
    components: {
      NavBarVue,
      FooterVue,
    },
    created() {
      let userAux = this.$store.getters.getUser
      if (userAux){
        this.user =  this.$store.getters.getUser
      }else{
        this.$router.push('/login')
      }
    },
    methods: {
      sair(){
        this.$store.commit('setUser',null);
        sessionStorage.clear()
        this.user = false
        this.$router.push('/login')
      }
    }
  }
</script>

<style>
</style>
