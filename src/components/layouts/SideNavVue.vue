<template>
  <div>
  <ul id="slide-out" class="sidenav sidenav-fixed">
    <li><div class="user-view">
      <div class="background">
        <img src="https://materializecss.com/images/office.jpg">
      </div>
      <a href="#user"><img class="circle" :src="user.image"></a>
      <a href="#name"><span class="white-text name">{{user.name}}</span></a>
      <a href="#email"><span class="white-text email">{{user.email}}</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>Home</a></li>
    <li><a href="#!"><i class="material-icons">settings</i> Banco</a></li>
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
    width: 200px !important;
  }
</style>
