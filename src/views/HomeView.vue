<template>
  <div class="home">
      <div id="conteudo">
        <h1>Ciclismo Amarelo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellat eos corporis commodi iste et, 
          repudiandae ex dolorem  ipsum quod earum accusantium quidem porro fuga optio.
          </p>
      </div>


    <img src="../assets/cycling.gif">
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
    justify-content: space-around;
    height: 80vh;
  }

  p{
    padding: 10px 25px;
    text-align: justify;
  }


  @media screen and (min-width:768px) {
    body{
      height: 100vh;
    }

    .home{
      flex-direction: row;
      align-items: center;
    }

    img{
    max-width: 750px;
    }
  }
</style>