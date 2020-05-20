import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Profile from '../pages/profile/Profile'
import Account from "../pages/account/Account";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
  ]
})
