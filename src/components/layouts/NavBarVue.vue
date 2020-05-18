<template>
  <div class="navbar-fixed">
  <nav :class="cor || 'blue '">

    <div class="nav-wrapper  center-align">
        <router-link :to="url || '/'" class="brand-logo">{{ logo || 'Sistema' }}</router-link>
      <!--      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>-->
      <a href="#" data-target="slide-out" class="top-nav sidenav-trigger full hide-on-large-only right"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
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

      }
    }
  }
</script>
<style class="scoped">

</style>
