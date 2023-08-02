import { createRouter, createWebHistory } from 'vue-router'

import AppBase from '../components/layout/AppBase.vue'

const routes = [
  {
    path: '/',
    
    component: AppBase,
    children:[
      {
        path:'/',
        name:'allProduct',
        component:()=>import('../views/Products/AllProducts.vue')
      },
      {
        path:'/detail-product/:id',
        name:'detailProduct',
        component:()=>import('../views/Products/DetailleProduct.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(), // Utilisation du mode historique HTML5
  routes
})

export default router
