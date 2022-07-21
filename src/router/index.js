import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearPastel from '../components/CrearPastel.vue'
import EditarPastel from '../components/EditarPastel.vue'
import ListarPastel from '../components/ListarPastel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crearpastel',
    name: 'CrearPastel',
    component: CrearPastel
  },
  {
    path: '/editarpastel',
    name: 'EditarPastel',
    component: EditarPastel
  },
  {
    path: '/listarpastel',
    name: 'ListarPastel',
    component: ListarPastel
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
