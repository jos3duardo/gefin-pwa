<template>
  <div class="fixed-action-btn toolbar  ">
    <a :class="'btn-floating btn-large waves-effect waves-light ' + cor || ' black '">
      <i class=" material-icons">{{ icone || 'menu'}}</i>
    </a>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.fixed-action-btn');
    let options = {
      direction: 'top',
      toolbarEnabled: true,
      hoverEnabled: false,
    }
    let instances = M.FloatingActionButton.init(elems,options)
  })

  export default {
    name: 'FloatingActionButton',
    props: ['cor','icone'],
    data(){
      return{

      }
    }
  }
</script>
<style></style>
