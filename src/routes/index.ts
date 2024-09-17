import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../Views/SignUp/index.vue'
import Home from '../Views/Home/index.vue'


const routes = [
  {
    path: '/sign-up',
    name: "sign-up",
    component: SignUp
  },
  {
    path: '/',
    name: "house",
    component: Home
  }
] 

console.log({routes})
const appRouter = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "home",
      component: Home
    },
    {
      path: '/sign-up',
      name: "sign-up",
      component: SignUp
    }
  ]
})
export default appRouter