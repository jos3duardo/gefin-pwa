<template>
  <div class="nav-wrapper">
    <nav :class="cor || 'blue '">
      <ul id="dropdown1" class="dropdown-content">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/account">Banco</router-link></li>
        <li class="divider"></li>
        <li><router-link to="/profile">Perfil</router-link></li>
        <li v-if="user" ><a v-on:click="sair()">Sair</a></li>

      </ul>
      <router-link :to="url || '/'" class="brand-logo center">{{ logo || 'Sistema' }}</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <slot></slot>
          <li v-if="user" ><router-link class="dropdown-button" to="#!" data-activates="dropdown1">{{user.name}}<i class="material-icons right">arrow_drop_down</i></router-link></li>
        </ul>
      <router-link to="#" v-if="user" style="display:block;" data-activates="navbar-gefin" class="button-collapse"><i class="material-icons">menu</i></router-link>
    </nav>
    <side-nav-vue />
  </div>
</template>
<script>
  $( document ).ready(function(){
    $(".button-collapse").sideNav(
      {
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
        onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
    }
    );
  })
import SideNavVue from "./SideNavVue";
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
    }
  }
</script>
<style class="scoped">
</style>
