import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router';

import test from '/src/views/Layout/test.vue'
import Home from '/src/views/Home/index.vue'
import Layout from '/src/views/Layout/index.vue'
import WebDesignService from '/src/views/Home/WebDesignService.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children:[

        {
          path:'',
          component: Home,
        },
     

      ]
    },
    {
      path: '/test',
      component: test
    },

  ]
})

export default router
