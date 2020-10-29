import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'home'
  },
  {
    path: '/home',
    name:"home",
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name:"about",
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
