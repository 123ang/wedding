import { createRouter, createWebHistory } from 'vue-router'

import store from '../store' 

import HomeView from '@/views/home/HomeView'
import LoginView from '@/views/login/LoginView'
import ProfileView from '@/views/profile/ProfileView'
import RegisterView from '@/views/register/RegisterView'
import AboutUs from '@/views/about_us/AboutUs'
import ForgetPassword from '@/views/forget_password/ForgetPassword'
import VendorDetail from '@/views/vendor_detail/VendorDetail'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
   
  },
  {
    path: '/vendor/:id',
    name: 'VendorDetail',
    component: VendorDetail,
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
    
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: ForgetPassword,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.is_login) {
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})
export default router