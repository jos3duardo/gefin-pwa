<template>
  <site-template>
    <div class="row">
      <card-vue cor=" orange darken-1" tamanho=" s12 m4" title="Conta 1">
        <span slot="content">
          <h5>teste</h5>
        </span>
      </card-vue>
      <card-vue cor=" orange darken-1" tamanho=" s12 m4" title="Conta 1">
        <span slot="content">
          <h5>teste</h5>
        </span>
      </card-vue>
      <card-vue cor=" orange darken-1" tamanho=" s12 m4" title="Conta 1">
        <span slot="content">
          <h5>teste</h5>
        </span>
      </card-vue>
      <card-vue cor=" orange darken-1" tamanho=" s12 m4" title="Conta 1">
        <span slot="content">
          <h5>teste</h5>
        </span>
      </card-vue>
      <card-vue cor=" orange darken-1" tamanho=" s12 m4" title="Conta 1">
        <span slot="content">
          <h5>teste</h5>
        </span>
      </card-vue>
      <card-vue cor=" orange darken-1" tamanho=" s12 m4" title="Conta 1">
        <span slot="content">
          <h5>teste</h5>
        </span>
      </card-vue>
      <card-vue cor=" orange darken-1" tamanho=" s12 m4" title="Conta 1">
        <span slot="content">
          <h5>teste</h5>
        </span>
      </card-vue>
      <card-vue cor=" orange darken-1" tamanho=" s12 m4" title="Conta 1">
        <span slot="content">
          <h5>teste</h5>
        </span>
      </card-vue>
      <card-vue cor=" orange darken-1" tamanho=" s12 m4" title="Conta 1">
        <span slot="content">
          <h5>teste</h5>
        </span>
      </card-vue>
    </div>
    <floating-action-button-vue cor="black" icone="menu">
      <li><router-link to="#" class=" black"><i class="material-icons">insert_chart</i></router-link></li>
      <li><router-link to="#" class=" black"><i class="material-icons">format_quote</i></router-link></li>
      <li><router-link to="#" class=" black"><i class="material-icons">publish</i></router-link></li>
      <li><router-link to="#" class=" black"><i class="material-icons">attach_file</i></router-link></li>
    </floating-action-button-vue>
  </site-template>
</template>
<script>
import SiteTemplate from "../../templates/SiteTemplate";
import CardVue from "../../components/layouts/CardVue";
import FloatingActionButtonVue from "../../components/layouts/FloatingActionButtonVue";
  export default {
    name: 'Account',
    props:[''],
    components:{
      SiteTemplate,
      CardVue,
      FloatingActionButtonVue
    },
    data(){
      return{

      }
    }
  }
</script>
<style>

</style>
