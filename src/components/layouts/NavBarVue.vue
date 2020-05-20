<template>
  <div class="nav-wrapper">
    <nav :class="cor || 'blue '">
      <ul id="dropdown1" class="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="/account">Banco</a></li>
        <li class="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
      <router-link :to="url || '/'" class="brand-logo center">{{ logo || 'Sistema' }}</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <slot></slot>
          <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
      <a href="#" style="display:block;" data-activates="navbar-gefin" class="button-collapse"><i class="material-icons">menu</i></a>
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
  /*header, main, footer {*/
  /*  padding-left: 300px;*/
  /*}*/

  /*@media only screen and (max-width : 992px) {*/
  /*  header, main, footer {*/
  /*    padding-left: 0;*/
  /*  }*/
  /*}*/
</style>
