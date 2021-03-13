<template>
  <v-app> 
    <PrimeiraPagina/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import PrimeiraPagina from './components/Shared/PrimeiraPagina.vue'

export default {
  name: 'App',
  components: { 
  PrimeiraPagina
    
  }
}
</script>

<style>
.link-home {
  color: white !important;
  text-decoration: none;
}
</style>

