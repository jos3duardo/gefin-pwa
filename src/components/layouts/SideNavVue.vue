<template>
  <div>
    <ul id="navbar-gefin" class="side-nav">
      <li><div class="user-view">
        <div class="background">
          <img src="https://materializecss.com/images/office.jpg">
        </div>
        <router-link to="/profile"><img class="circle" :src="user.image"></router-link>
        <a href="#name"><span class="white-text name">{{user.name}}</span></a>
        <a href="#email"><span class="white-text email">{{user.email}}</span></a>
      </div></li>
      <li><router-link to="/"><i class="material-icons">cloud</i>Home</router-link></li>
      <li><router-link to="/account"><i class="material-icons">account_balance</i>Banco</router-link></li>
      <li><div class="divider"></div></li>
      <li class="show-on-small"><a v-on:click="sair()">Sair</a></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'SideNav',
    data(){
      return{
        user: ''
      }
    },
    created() {
      let userAux = this.$store.getters.getUser
      if (userAux){
        this.user =  this.$store.getters.getUser
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
