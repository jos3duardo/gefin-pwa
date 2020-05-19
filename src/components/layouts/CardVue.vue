<template>
  <div :class="'col ' + tamanho || 's12 m6'">
    <div :class="'card'+ cor">
      <div class="card-content white-text">
        <span class="card-title">{{title || 'Card Title'}}</span>
        <slot name="content"></slot>
      </div>
      <div class="card-action">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Card',
    props:['cor','tamanho','title'],
    data(){
      return{

      }
    }
  }
</script>
