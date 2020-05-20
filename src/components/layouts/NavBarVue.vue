<template>
  <div class="nav-wrapper ">
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="/">Home</a></li>
      <li><a href="/account">Banco</a></li>
      <li class="divider"></li>
      <li><a href="/profile">Perfil</a></li>
      <li v-if="user" ><a v-on:click="sair()">Sair</a></li>
    </ul>


    <nav :class="'z-depth-5 '+cor || 'blue '">

      <router-link :to="url || '/'" class="brand-logo center">{{ logo || 'Sistema' }}</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <slot></slot>
          <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">{{user.name}}<i class="material-icons right">arrow_drop_down</i></a></li>
<!--          <li v-if="user" ><a class="dropdown-trigger btn" href="#!" data-target='dropdown1'>{{user.name}}<i class="material-icons right">arrow_drop_down</i></a></li>-->
        </ul>
      <a href="#" v-if="user" style="display:block;" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </nav>
    <side-nav-vue />
  </div>
</template>
<script>
  import SideNavVue from "./SideNavVue";

  document.addEventListener('DOMContentLoaded', function() {
    $(".dropdown-trigger").dropdown();

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
  export default {
    name: 'NavBar',
    props: ['cor','logo','url'],
    components:{
      SideNavVue
    },
    data(){
      return{
        user: false,
        company:''
      }
    },
    created() {
      let userAux = this.$store.getters.getUser
      if (userAux){
        this.user = this.$store.getters.getUser
        this.name = this.user.name
        this.email = this.user.email
        this.company = this.user.company[0]
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
<style class="scoped">
</style>
