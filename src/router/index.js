import Vue from 'vue'
import VueRouter from 'vue-router'
import inicio from '../views/inicio.vue'
import ClubesLista from '../views/ClubesLista.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'inicio',
    component: inicio
    
  },
  {
  path: '/Classificacao',
  name:  'Classificação',
  component: ClubesLista
  },
]

const router = new VueRouter({
  routes
})

export default router
