import firebase from 'firebase';
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login';
import Contact from './views/Contact';
import Dashboard from './views/Dashboard';
import Invest from './views/Invest';
import Details from './views/Details';
Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about', 
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/invest',
      name: 'Invest',
      component: Invest,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: Details
    }
  ]
})

router.beforeEach((to, from, next)=>{
  //Check if the route we are about entering has the meta- requires auth
  if(to.matched.some(rec=>rec.meta.requiresAuth)){
    //Check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      //User is signed in, then proceed to route
      next()
    }else{
      next({name: 'Login'})
    }
  }else{ 
    next()
  }
});

export default router