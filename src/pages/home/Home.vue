<template>
  <site-template>

<div class="container">
  <div class="row">
      <card-vue cor=" green darken-1" tamanho=" s12 m4" title="Banco">
        <span slot="content">
          <h5>300,00 R$</h5>
        </span>
      </card-vue>
      <card-vue cor=" red darken-1" tamanho=" s12 m4" title="Despesas">
        <span slot="content">
          <h5>5.000,00 R$</h5>
        </span>
      </card-vue>
      <card-vue cor=" blue darken-1" tamanho=" s12 m4" title="Receitas">
        <span slot="content">
          <h5>6.000,00 R$</h5>
        </span>
      </card-vue>
  </div>
  <div class="row">
    <area-char-vue />
  </div>
</div>

  </site-template>
</template>
<script>
import SiteTemplate from "../../templates/SiteTemplate";
import Chart from "../../components/charts/Chart";
import CardVue from "../../components/layouts/CardVue";
import AreaCharVue from "../../components/charts/AreaCharVue";
  export default {
    name: 'Home',
    components:{
      SiteTemplate,
      CardVue,
      Chart,
      AreaCharVue
    },
    data(){
      return {
        user: {image:'', name:''},

      }
    },

    created() {
      let userAux = this.$store.getters.getUser
      if (userAux){
        this.user = this.$store.getters.getUser
        this.setup()

      }
    },
    methods: {
      setup(){

      }
    }
  }
</script>
<style>
  .container {
    width: 80% !important;
  }
</style>
