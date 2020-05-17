<template>
  <span>
      <nav-bar-vue logo="Gefin - Space" url="/" cor="red" >
        <li><a href="/">Home</a></li>
       <li v-if="!user"> <router-link to="/login">Login</router-link></li>
        <li v-if="user"> <router-link to="/profile">{{ user.name}}</router-link></li>
        <li v-if="user" ><a v-on:click="sair()">Sair</a></li>
      </nav-bar-vue>
    <main>
       <div class="container">
        <div class="col s12 m12">
          <h5>Site</h5>
          <slot></slot>
        </div>
      </div>
      <footer-vue cor="orange" />

    </main>
  </span>
</template>
<script>
  import NavBarVue from "../components/layouts/NavBarVue";
  import FooterVue from "../components/layouts/FooterVue";
  export default {
    name: 'LoginTemplate',
    data(){
      return {
        user: false
      }
    },
    components: {
      NavBarVue,
      FooterVue
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
