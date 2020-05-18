<template>
  <site-template>
    <div class="container">
    <div class="row">
      <div class="col m12">

      </div>
    </div>
    </div>
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
      let userAux = this.$store.getters.getUser
      if (userAux){
        this.user = this.$store.getters.getUser
        // this.$http.get(this.$urlAPI+`content/list`,
        //   {
        //     "headers": {"authorization": "Bearer " +  this.$store.getters.getToken}
        //   })

      }
    }
  }
</script>
<style>
</style>
