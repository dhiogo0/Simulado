<template>
  <v-app> 
    <PrimeiraPagina/>
    <Inicio/>
    <img src="" alt="">
  </v-app>
</template>

<script>
import PrimeiraPagina from './components/PrimeiraPagina.vue'
import Inicio from './components/inicio'

export default {
  name: 'App',
  components: { 
    PrimeiraPagina,
    Inicio
  }
}
</script>

<style>
#ap
    PrimeiraPaginap {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
