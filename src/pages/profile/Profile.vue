<template>
  <site-template>
<!--    <div class="container">-->
    <div class="row">
      <div class="col s12 m4 l4 offset-l2 offset-m2">
        <h5>Dados</h5>
        <div class="card">
          <div class="card-image">
            <img src="../../assets/fundo8.jpg" height="150px">
            <span class="card-title black-text">{{user.name}}</span>
            <div class="img-author-div ">
              <a href="javascript:void(0)"><img class="circle img-author" :src="user.image"></a>
            </div>
          </div>
          <div class="card-content">
            <div class="rigth">
              <b>Empresa: </b>{{company.name}}<br>
              <b>Cadastro: </b>{{user.created_at}}<br>
              <b>Email: </b>{{user.email}}
            </div>
          </div>
        </div>
      </div>
      <div class="col s12 m6 l6">
        <h5>Editar Perfil</h5>
        <div class="card">
          <div class="card-content">
            <div class="row">
<!--              <form action="{{route('app.user.update', ['user' => $user->id])}}" method="post" class="col s12">-->
                <div class="row">
                  <div class="input-field col s12 m12 l12">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="name" type="text" class="validate" name="name" v-model="name">
                    <label for="name">Nome</label>
                  </div>
                  <div class="input-field col s12 m12 l12">
                    <i class="material-icons prefix">mail</i>
                    <input id="email" type="email" class="validate" name="email" v-model="email">
                    <label for="email">Email</label>
                  </div>
                </div>
              <div class="file-field input-field">
                <div class="btn">
                  <span><i class="material-icons">perm_media</i></span>
                  <input type="file" v-on:change="saveImage">
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text">
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12 m12 l12">
                  <i class="material-icons prefix">lock</i>
                  <input id="password" type="password" name="password" class="validate" v-model="password">
                  <label for="password">Nova senha</label>
                </div>
                <div class="input-field col s12 m12 l12">
                  <i class="material-icons prefix">lock</i>

                  <input id="repassword" type="password" name="repassword" class="validate" v-model="password_confirmation">
                  <label for="repassword">Confirme a senha</label>
                </div>
              </div>
                <div class="input-field center">
                  <button class="btn grey waves-effect" type="submit">Salvar</button>
                </div>
<!--              </form>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m10 l10 offset-l2 offset-m2">
        <h5 class="center-align">Membros da Empresa</h5>
        <div class="card">
          <div class="card-content">
            <table class="no-border">

              <tr>
                <th>nome</th>
                <th>email</th>
              </tr>
              <tr v-for="item in members" :key="item.id">
                <td>{{item.name }}</td>
                <td>{{item.email }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
<!--    </div>-->
  </site-template>
</template>
<script>
  import SiteTemplate from "../../templates/SiteTemplate";
  export default {
    name: 'Profile',
    components:{
      SiteTemplate
    },
    data(){
      return {
        user: false,
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        image: '',
        company: '',
        members: []
      }
    },
    created() {
      let userAux = this.$store.getters.getUser
      if (userAux){
        this.user = this.$store.getters.getUser
        this.name = this.user.name
        this.email = this.user.email
        this.company = this.user.company[0]
      }
      console.log(this.$store.getters.getToken)
      this.$http.post(this.$urlAPI+'company/members/'+this.user.id,{},
        {"headers": {"authorization": "Bearer " +  this.$store.getters.getToken}})
      .then( response => {
        if (response.status){
          this.members = response.data.members
        }
        console.log(response)
      })
      .catch( error => console.log(error))

    },
    methods: {
      saveImage(e){
        let file = e.target.file || e.dataTransfer.files
        if (!file.length){
          return;
        }
        let reader = new FileReader();
        reader.onloadend = (e) => {
          this.image = e.target.result
        }
        reader.readAsDataURL(file[0])
      }
    }
  }
</script>
<style>
  .bg-login{
    background-image: url("../../assets/fundo1-min.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }
  .img-author-div{
    width: 70px;
    margin-top: -35px;
  }
  .img-author{
    margin-left: 100%;
    background: transparent;
  }

  .card .card-image .card-title {
    bottom: 65px !important;
    font-weight: bold;
    color: white !important;
  }
</style>
