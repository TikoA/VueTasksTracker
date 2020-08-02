import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../views/Create.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Create
  },
  {
    path: '/task/:id',
    name: 'task',
    component: () => import('../views/Task.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
