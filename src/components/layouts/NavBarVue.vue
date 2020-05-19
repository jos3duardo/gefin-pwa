<template>
  <div class="navbar-fixed">
  <nav :class="cor || 'blue '">

    <div class="nav-wrapper  center-align">
        <router-link :to="url || '/'" class="brand-logo">{{ logo || 'Sistema' }}</router-link>
      <!--      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>-->
      <a v-if="user" href="#" data-target="slide-out" class="top-nav sidenav-trigger full hide-on-large-only left"><i class="material-icons">menu</i></a>
<!--      <a href="#" data-target="slide-out" class="top-nav sidenav-trigger full hide-on-large-only right"><i class="material-icons">menu</i></a>-->
      <ul id="nav-mobile"  class="right hide-on-med-and-down">
<!--        <li><a href="#" data-target="slide-out" class=" top-nav full ">Menu</a></li>-->
        <slot></slot>
      </ul>
      </div>
  </nav>
</div>
</template>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  export default {
    name: 'NavBar',
    props: ['cor','logo','url'],
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
  /*@media only screen and (max-width: 993px) {*/
    nav a.sidenav-trigger {
      display: block !important;
    }
  /*}*/
</style>
