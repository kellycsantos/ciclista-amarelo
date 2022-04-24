<template>
  <div id="menu">
      <router-link to="/">
        <i class="fa fa-bicycle"></i>
      </router-link>
    <nav>
      <router-link to="/">Nosso Projeto</router-link> 
      <router-link to="/parceiros">Parceiros</router-link> 
      <router-link to="/fac">Contatos</router-link>
    </nav>
  </div>  
</template>

<script>
import { defineComponent } from 'vue'


export default defineComponent({
  data(){
      return{
       
      }
  }
})
</script>
<style scoped >
    #menu{
      background:#ffd41c;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 15px;
      min-height: 5vh;
      width: 100vw;
      text-align: left;
    }

    #menu a{
      color: #011e30;
      margin: 0 10px;
      font-size: 25px ;
    }

</style>