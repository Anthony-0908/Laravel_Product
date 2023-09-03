// resources/js/router.js

import { createRouter,createWebHistory } from 'vue-router';

import login from '../components/admin/login.vue';
import home from '../components/admin/dashboard.vue';


const routes = [
  {
    path: '/login',
    component: login,
    name: 'login',
  },

  {
    path: '/home',
    component:home,
    name:'home',
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
