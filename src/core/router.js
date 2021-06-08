import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/modules/auth/views/Login";
import Register from "@/modules/auth/views/Register";
import Home from "@/modules/home/view/Home";
import {authService} from "@/modules/auth/services/auth.service";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /*Auth Module routes*/
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  /*Others routes*/
  {
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Auth Guards
router.beforeEach((to, from, next) => {
  if ( (to.name !== 'Login' && to.name !== 'Register') && !authService.isAuthenticated()) next({ name: 'Login' })
  if ( (to.name === 'Login' || to.name === 'Register' ) && authService.isAuthenticated()) next({ name: 'Home'})
  next()
});

export default router
