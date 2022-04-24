<template>
  <div class="home">
    <h1>Página de contatos</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
 data(){
   return{}
 }
});
</script>

<style>
  .home{
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width:768px) {
    body{
    }
  }
</style>