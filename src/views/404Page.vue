<template>
    <div id="container">
    <h1>Error 404!</h1>
    <h3>Nossos herois estão arrumando isso</h3>
    <router-link to="home">Vamos tentar do inicio?</router-link>
    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    
})
</script>

<style scoped>
    #container{
        height: 100vh;
        widows: 100vw;
        background: url('../assets/bugfix.gif') no-repeat center #806da8 ;
        background-size:contain ;
        color: #ded8ec;
        display: flex;
        flex-direction: column;
        padding-top: 30px ;

        
    }
    a{
        color: #ded8ec;
        text-decoration: underline;
        margin-top: 15px ;
    }
@media screen and (min-width:768px) {
    .home{
      flex-direction: row;
      align-items: center;
      height: 100vh;
      
    }
  }
</style>