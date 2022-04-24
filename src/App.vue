<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'

export default defineComponent({
  components:{
    NavBar
  }
})
</script>



<style >
*{
  margin: 0;
  padding: 0;
  text-decoration: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #011e30;
  height: 100vh;
  background: #ffd41c;;
}

nav {
  padding: 0px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}


@media screen and (min-width:768px) {
  body{
    display: flex;
    justify-content: center;
    background: #ffd41c;
  }
  #app{

  }
}
</style>
