<template>
    <v-conteiner>
        <h2 class="text-h5 text-center nb-3 mt-5">Classificação dos clubes</h2>
        <ClubesTabela/>
    </v-conteiner>
</template>

<script>
import ClubesTabela from '../components/ClubesTabela'
export default {
    name: 'ClubeLista',
    components:{
    ClubesTabela
    },
    data(){
        
        return {
        clubesLista:[]

        }
    },


    created() {
        fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
      .then(response => response.json())
      .then(json => {
        this.clubesLista = json;
      })
    }
}
</script>

<style scoped>


</style>