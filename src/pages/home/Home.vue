<template>
  <site-template>

  </site-template>
</template>
<script>
import SiteTemplate from "../../templates/SiteTemplate";
  export default {
    name: 'Home',
    data(){
      return {
        user: {image:'', name:''},
      }
    },
    components:{
      SiteTemplate
    },
    created() {
      let userAux =   this.$store.getters.getUsuario
      if (userAux){
        this.user = this.$store.getters.getUsuario
      }
    }
  }
</script>
