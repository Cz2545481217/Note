import { createRouter, createWebHistory } from 'vue-router'
import LsitViewVue from '@/views/LsitView.vue'
import addedView from '@/views/addedView.vue'
import updateView from '@/views/updateView.vue'
const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    {
      path:'/',
      name:'home',
      component:LsitViewVue
    },
    {
      path:'/list',
      name:'list',
      component:LsitViewVue
    },
    {
      path:'/add',
      name:'add',
      component:addedView
    },
    {
      path:'/note',
      name:'note',
      component:updateView
    }
  ]
})

export default router
