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

    </div>
    <floating-action-button-vue cor="black" icone="menu">
      <li><a href="#new-account" class=" black modal-trigger"><i class="material-icons">filter_1</i></a></li>
      <li><router-link to="#" class=" black"><i class="material-icons">format_quote</i></router-link></li>
      <li><router-link to="#" class=" black"><i class="material-icons">publish</i></router-link></li>
      <li><router-link to="#" class=" black"><i class="material-icons">attach_file</i></router-link></li>
    </floating-action-button-vue>

    <new-account-modal identifier="new-account" />
  </site-template>
</template>
<script>

import SiteTemplate from "../../templates/SiteTemplate";
import CardVue from "../../components/layouts/CardVue";
import FloatingActionButtonVue from "../../components/layouts/FloatingActionButtonVue";
import ModalVue from "../../components/layouts/ModalVue";
import NewAccountModal from "./NewAccountModal";

export default {
    name: 'Account',
    props:[''],
    components:{
      SiteTemplate,
      CardVue,
      FloatingActionButtonVue,
      ModalVue,
      NewAccountModal
    },
    data(){
      return{

      }
    }
  }
</script>
<style>

</style>
