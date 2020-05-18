<template>
  <span>
      <nav-bar-vue logo="Gefin - Space" url="/" cor="red" >
        <li><a href="/">Home</a></li>
       <li v-if="!user"> <router-link to="/login">Login</router-link></li>
        <li v-if="user"> <router-link to="/profile">{{ user.name}}</router-link></li>
        <li v-if="user" ><a v-on:click="sair()">Sair</a></li>
      </nav-bar-vue>
    <main>
        <side-nav-vue />

       <div class="container">
        <div class="col s12 m12">
          <slot></slot>
        </div>
      </div>
    <footer-vue cor="red" />

    </main>
  </span>
</template>
<script>
  import NavBarVue from "../components/layouts/NavBarVue";
  import FooterVue from "../components/layouts/FooterVue";
  import SideNavVue from "../components/layouts/SideNavVue";

  export default {
    name: 'LoginTemplate',
    data(){
      return {
        user: false
      }
    },
    components: {
      NavBarVue,
      FooterVue,
      SideNavVue
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
