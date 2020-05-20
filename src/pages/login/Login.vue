<template>
  <login-template>
    <span slot="header">
      <div class="row center-align" id="header">
<!--        Login-->
      </div>
    </span>
  <span slot="principal">
  <div class="row">
      <div class="col m8 offset-m2  center-align">
        <div class="card z-depth-5">
          <div class="card-content">
          <div class="row">
            <br>
            <div class="col s12 m12">
              <div class="row">
                <div class="input-field col s12 m12">
                  <i class="material-icons prefix">email</i>
                  <input id="icon_prefix" type="text" class="validate" autocomplete="off" v-model="email">
                  <label for="icon_prefix">Email</label>
                </div>
                <div class="input-field col s12 m12">
                  <i class="material-icons prefix">vpn_key</i>
                  <input id="icon_telephone" type="password" class="validate" autocomplete="off" v-model="password">
                  <label for="icon_telephone">Password</label>
                </div>
              </div>
<!--              <div class="row">-->
<!--                <label>-->
<!--                  <input type="checkbox" class="filled-in" checked="checked" />-->
<!--                  <span>Permanecer Conectados</span>-->
<!--                </label>-->
<!--              </div>-->
              <div class="row">
                <div class="col s12 m6 l6">
                  <button class="btn waves-effect waves-light btn-large z-depth-5" v-on:click="login()">Entrar
                  </button>
                </div>

                <div class="col s12 m6 l6">
                  <a href="#modal-login" class="waves-effect waves-light orange z-depth-5 btn-large modal-trigger" >Cadastrar-se
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>

    <modal-vue name="modal-login">
      <span slot="titulo">Criação de novas contas</span>
      <span slot="conteudo">A criação de novas contas esta desabilitada por padrão, para acessar o sistema favor entrar em contato com o
      administrador do sistema através do email <a href="mailto:jos3duardolopes@gmail.com">jos3duardolopes@gmail.com</a> ou telefone <a
          href="tel:67999590133"> 67 9 9959-0133</a>
      </span>
    </modal-vue>
  </span>

  </login-template>
</template>

<script>
  import LoginTemplate from "../../templates/LoginTemplate";
  import ModalVue from "../../components/layouts/ModalVue";
  export default {
    name: 'Login',
    components: {
      LoginTemplate,
      ModalVue
    },
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login(){
          this.$http.post(this.$urlAPI+'login',{
            email: this.email,
            password: this.password
          })
          .then( response => {
            console.log(response)
            if(response.data.status){
              console.log(response)
              // login com sucesso
              this.$store.commit('setUser', response.data.user)
              sessionStorage.setItem('user', JSON.stringify(response.data.user))
              this.$router.push('/')
            }else if(response.data.status === false && response.data.validate){
              // erros de validação
              console.log('erros de validação')
              let errors = '';
              for (let erro of Object.values(response.data.errors)){
                errors = erro + " ";
              }
              alert(errors)
            }else{
              //login não existe
              console.log('login não existe')
              alert('Login invalido')
            }
          } )
          .catch(e => {
            console.warn('Error: ', e)
          })
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header{
    margin-top: 30px;
    font-size: 36px;
  }
</style>
