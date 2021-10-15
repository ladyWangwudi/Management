import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import '../assets/css/global.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/welcome',
    name: 'Welcome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue')
  }
]

const router = new VueRouter({
  routes
})
//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  //next()直接放行 next('/login)强制跳转
  if(to.path === '/login') return next();
  
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next();


})

export default router
