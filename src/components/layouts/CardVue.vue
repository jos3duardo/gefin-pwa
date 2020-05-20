<template>
  <div :class="'col ' + tamanho || 's12 m6'">
    <div :class="'card '+ cor">
      <div class="card-content white-text ">
        <div class="valign-wrapper">
          <i class="material-icons">{{icone}}</i>
          <span class="card-title ">
            {{title || 'Card Title'}}
          </span>
        </div>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Card',
    props:['cor','tamanho','title','icone'],
    data(){
      return{

      }
    }
  }
</script>
<style>
  .material-icons{
   font-size: 40px;
  }
  .card .card-content .card-title{
    margin-bottom: 0px;
    margin-left: 5px;
  }
</style>
