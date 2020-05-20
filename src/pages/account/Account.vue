<template>
  <site-template>
<!--    <card-vue title="Conta" tamanho="3" cor="green"></card-vue>-->

  </site-template>
</template>
<script>
import SiteTemplate from "../../templates/SiteTemplate";
import CardVue from "../../components/layouts/CardVue";
  export default {
    name: 'Account',
    props:[''],
    components:{
      SiteTemplate,
      CardVue
    },
    data(){
      return{

      }
    }
  }
</script>
<style>

</style>
