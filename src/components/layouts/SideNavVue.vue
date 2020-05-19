<template>
  <div>
  <ul id="slide-out" class="sidenav">
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
  </ul>
<!--  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>-->
  </div>

</template>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {
      edge: 'left'
    });
  });
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
  }
</script>
<style>
  .sidenav {
    width: 300px !important;
  }
</style>
