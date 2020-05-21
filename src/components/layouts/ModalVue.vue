<template>
  <div :id="name" class="modal">
    <div class="modal-content">
      <h4 class="center-align"><slot name="titulo"></slot></h4>
      <br>
      <p><slot name="conteudo"></slot></p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="btn modal-close waves-effect waves-green ">{{button || 'OK'}}</a>
    </div>
  </div>
</template>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    let option = {
      opacity: 0.8,
      startingTop: '30%'
    }
    let instances = M.Modal.init(elems, option);
  });


  export default {
    name: 'Modal',
    props: ['name','button','titulo','conteudo'],
    data(){
      return{

      }
    }
  }
</script>
