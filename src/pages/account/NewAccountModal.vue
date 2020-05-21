<template>
  <div :id="identifier" class="modal">
    <div class="modal-content">
      <h5>Cadastrar uma nova Conta</h5>
      <form action="#" method="POST" class="col s12 m12 l12">
        <div class="row">
          <div class="input-field col s12 m4 lighten-4">
            <input id="title" type="text" class="validate" name="title" >
            <label for="title">Nome</label>
          </div>
          <div class="input-field col s12 m4 lighten-4">
            <input id="agency" type="text" class="validate" name="agency" >
            <label for="agency">Agência</label>
          </div>
          <div class="input-field col s12 m4 lighten-4">
            <input id="account_number" type="text" class="validate" name="account_number">
            <label for="account_number">Conta</label>
          </div>
          <div class="input-field col s12 m8 l8">
            <select>
              <option value="" disabled selected>Escolha um banco</option>
            </select>
            <label>Nome do Banco</label>
          </div>
          <div class="input-field col s12 m4 l4">
            <input id="balance_initial" type="number" name="balance_initial" class="validate">
            <label for="balance_initial">Saldo Inicial</label>
          </div>
        </div>
        <div class="row center">
          <div class="input-field col s12 m4 l4 ">
            <select class="icons" id="categoria" name="category_id">
              <option value="" >Cadastre uma categoria</option>
            </select>
            <label for="categoria">Categoria</label>
          </div>
          <div class="col s12 m2 l2 right">
            <button class="btn waves-effect waves-light" type="submit" >Salvar
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

  export default {
    name: 'NewAccountModal',
    props: ['identifier'],
    data () {
      return {
        listBanks: ''
      }
    },
    created() {
      this.banksList()
    },
    methods: {
      banksList(){
        console.log(this.$store.getters.getToken)
        this.$http.get(this.$urlAPI + 'banks/list',{
          "headers": {"authorization": "Bearer " + this.$store.getters.getToken}
        })
        .then(function (response) {
          console.log(response.data.banks)
          let data = []
          response.data.banks.map((obj,key) => {
            data.push(obj)
            // data[key]['title'] = obj
            // console.log(obj.title, key)

          })
          console.log(data)

          // if (response.data.status){
          //
          // }
        })
        .catch(err => console.log('Erro ', err))
      }
    }
  }
</script>
