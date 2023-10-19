import { createRouter, createWebHistory } from 'vue-router'
import LsitViewVue from '@/views/LsitView.vue'
import addedView from '@/views/addedView.vue'
import updateView from '@/views/updateView.vue'
import loginView from '@/views/loginView.vue'
import registerView from '@/views/registerView.vue'
import forgetView from '@/views/forgetView.vue'
const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  //登录
  routes: [
    {
      path:'/',
      name:'home',
      component:loginView
    },
    {
      path:'/login',
      name:'login',
      component:loginView
    },
    //笔记列表
    {
      path:'/list',
      name:'list',
      component:LsitViewVue
    },
    //新增笔记界面
    {
      path:'/add',
      name:'add',
      component:addedView
    },
    //修改界面
    {
      path:'/note',
      name:'note',
      component:updateView
    },
    //注册界面
    {
      path:'/reg',
      name:'reg',
      component:registerView
    },
    //忘记密码
    {
      path:'/forget',
      name:'forget',
      component:forgetView
    }
  ]
})

export default router
