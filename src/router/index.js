import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import listar from '../components/Listar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },

  {
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  },

  {
    path: '/listar',
    name: 'Listar',
    component: listar
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
