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
            <input id="account_number" type="text" class="validate" name="account_number" }}">
            <label for="account_number">Conta</label>
          </div>
          <div class="input-field col s12 m8 l8">
            <select class="icons validate" id="bancos" name="bank_id" v-for="item of banks">
              <!--            <option value="{{$bank->id}}" data-icon="">{{$bank->title}}</option>-->
              <option value="">Cadastre um banco</option>
              <option value=" item.id ">{{ item.title }}</option>
            </select>
            <label for="bancos">Banco</label>
          </div>
          <div class="input-field col s12 m4 l4">
            <input id="balance_initial" type="number" name="balance_initial" class="validate">
            <label for="balance_initial">Saldo Inicial</label>
          </div>
        </div>
        <div class="row center">
          <div class="input-field col s12 m3 l3 ">
            <select class="icons" id="categoria" name="category_id">
              <!--            @forelse($categories as $category)-->
              <!--            <option value="{{$category->id}}" >{{$category->name}} </option>-->
              <!--            @empty-->
              <option value="" >Cadastre uma categoria</option>
              <!--            @endforelse-->
            </select>
            <label for="categoria">Categoria</label>
          </div>

          <div class="input-field col s12 m3 l3">
            <label>
              <input type="checkbox" name="default"/>
              <span>Padrão Desconto</span>
            </label>
          </div>
          <div class="input-field col s12 m3 l3">
            <label>
              <input type="checkbox" name="show"/>
              <span>Exibir na tela de resumo</span>
            </label>
          </div>
          <div class="input-field col s12 m3 l3">
            <label>
              <input type="checkbox" name="sum"/>
              <span>Não somar aos Totais</span>
            </label>
          </div>
        </div>
        <br>

        <div class="row">
          <button class="btn waves-effect waves-light" type="submit" >Salvar
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>

</template>
<script>

  export default {
    name: 'NewAccountModal',
    props: ['identifier'],
    data(){
      return{
        banks: []
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
          console.log(response)
          if (response.data.status){
            var autocompletebank = M.Autocomplete.init(elemsAutoComplete,{
              data: banks,
              limit: 5
            });
            autocompletebank.updateData(banks);
          }else {

          }

        })
        .catch(err => console.log('Erro ', err))
      }
    }
  }
</script>
