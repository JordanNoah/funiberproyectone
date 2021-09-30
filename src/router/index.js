import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Room from '../views/Room.vue'
import Manager from '../views/Manager.vue'
import RoomAction from '../views/RoomAction.vue'
import Maintenance from '../views/state/Maintenance.vue';
import Error404 from '../views/state/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/room',
    name: 'Room',
    component: Room,
    redirect: { name: 'Manager' },
    children: [
      {
        path: 'manager',
        name: 'Manager',
        component: Manager
      },
      {
        path: 'room-action/:id?',
        name: 'RoomAction',
        component: RoomAction
      },  
    ]
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: Maintenance
  },
  {
    path: '*',
    name: '404',
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `GSP | ${to.name}`;
  var isAuthenticated = localStorage.getItem('userInformation') == null ? false : true;
  if (to.name == "Maintenance") {
    next()
  } else if(to.name == "404"){
    next()
  } else {
    if (!isAuthenticated) {
      if (to.name !== "Login") {
        next({ name:"Login" })
      } else {
        next()
      }
    } else {
      if (to.name == "Login" || to.name == "Main") {
        next({name:"Manager"})
      } else {
        next()
      }
    }
  }
})


export default router
