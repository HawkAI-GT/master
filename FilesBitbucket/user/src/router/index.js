import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "userprofile" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    path: '/additional',
    name: 'AdditionalInfo',
    component: () => import(/* webpackChunkName: "signup" */ '../views/AdditionalInfo.vue')
  },
  {
    path: '/userprofile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "userprofile" */ '../views/EditProfile.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "userprofile" */ '../views/User.vue')
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import(/* webpackChunkName: "userprofile" */ '../views/Feed.vue')
  },
  {
    path: 'coming_soon',
    name: 'ComingSoon',
    component: () => import(/* webpackChunkName: "userprofile" */ '../views/ComingSoon.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
