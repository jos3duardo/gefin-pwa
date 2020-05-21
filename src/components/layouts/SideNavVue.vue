<template>
  <div class="">

    <ul id="slide-out" class="sidenav">
      <li><div class="user-view">
        <div class="background">
          <img src="https://materializecss.com/images/office.jpg" alt="image background">
        </div>
        <a href="/profile"><img class="circle" :src="user.image" alt="user image">
        <span class="white-text name">{{user.name}}</span>
        <span class="white-text email">{{user.email}}</span>
        </a>
      </div></li>

      <li><a href="/"><i class="material-icons">dashboard</i>Resumo</a></li>
      <li><a href="/account"><i class="material-icons">account_balance_wallet</i> Contas</a></li>
      <li><a href="/profile"><i class="material-icons">perm_identity</i> Perfils</a></li>
      <li><div class="divider"></div></li>
      <li v-if="user" ><a v-on:click="sair()"><i class="material-icons">keyboard_return</i> Sair</a></li>
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
  sidenav li>a>i, .sidenav li>a>[class^="mdi-"], .sidenav li>a li>a>[class*="mdi-"], .sidenav li>a>i.material-icons {
    float: left;
    height: 48px;
    line-height: 48px;
    margin: 0 32px 0 0;
    width: 24px;
    color: black;
  }
</style>
