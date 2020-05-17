<template>
  <footer :class="'page-footer ' + cor || 'blue'">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Footer Content</h5>
          <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          <ul>
            <li> <router-link to="/" class="grey-text text-lighten-3">Home</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © {{ data.getFullYear() }} Copyright Gefin - Space
        <router-link class="grey-text text-lighten-4 right" target="_blank" to="https://jos3duardo.online/">Jos3duardo</router-link>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'Footer',
    props: ['cor'],
    data(){
      return{
        data: new Date
      }
    }
  }
</script>
<style class="scoped">
  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
</style>
