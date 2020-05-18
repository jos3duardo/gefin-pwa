<template>
  <site-template>
    <div class="row">
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>José Eduardo</td>
          <td>Jos3duardolopes@gmail.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>José Eduardo</td>
          <td>Jos3duardolopes@gmail.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>José Eduardo</td>
          <td>Jos3duardolopes@gmail.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>José Eduardo</td>
          <td>Jos3duardolopes@gmail.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>José Eduardo</td>
          <td>Jos3duardolopes@gmail.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>José Eduardo</td>
          <td>Jos3duardolopes@gmail.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>José Eduardo</td>
          <td>Jos3duardolopes@gmail.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>José Eduardo</td>
          <td>Jos3duardolopes@gmail.com</td>
        </tr>
        </tbody>
      </table>
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
        this.$http.get(this.$urlAPI+`content/list`,
          {
            "headers": {"authorization": "Bearer " +  this.$store.getters.getToken}
          })

      }
    }
  }
</script>
<style>
</style>
