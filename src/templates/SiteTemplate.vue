<template>
  <span>
      <nav-bar logo="Gefin - Space" url="/" cor="red" >
        <li><a href="/">Home</a></li>
        <li v-if="!usuario"  ><a href="/login">Login</a></li>
        <li v-if="usuario" ><a href="/login">Perfil</a></li>
        <li v-if="usuario" ><a v-on:click="sair()">Sair</a></li>
      </nav-bar>
    <main>
      <div class="container">
        <div class="col s12 m12">
          <slot></slot>
        </div>
      </div>
    </main>
    <footer>

    </footer>
  </span>
</template>
<script>
  import NavBar from "../components/layouts/NavBar";

  export default {
    name: 'LoginTemplate',
    data(){
      return {
        usuario: false
      }
    },
    components: {
      NavBar
    },
    created() {
      let usuarioAux = this.$store.getters.getUsuario
      if (usuarioAux){
        this.usuario =  this.$store.getters.getUsuario
      }else{
        this.$router.push('/login')
      }
    },
    methods: {
      sair(){
        this.$store.commit('setUsuario',null);
        sessionStorage.clear()
        this.usuario = false
        this.$router.push('/login')
      }
    }
  }
</script>

<style>

</style>
