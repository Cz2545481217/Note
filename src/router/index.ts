import { createRouter, createWebHistory } from 'vue-router'
import LsitViewVue from '@/views/LsitView.vue'
import addedView from '@/views/addedView.vue'
import updateView from '@/views/updateView.vue'
<<<<<<< HEAD
import loginView from '@/views/loginView.vue'
import registerView from '@/views/registerView.vue'
import forgetView from '@/views/forgetView.vue'
const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  //登录
=======
const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
>>>>>>> f09d897f74d9a963b67221ff122bc8297c855338
  routes: [
    {
      path:'/',
      name:'home',
<<<<<<< HEAD
      component:loginView
    },
    {
      path:'/login',
      name:'login',
      component:loginView
    },
    //笔记列表
    {
=======
      component:LsitViewVue
    },
    {
>>>>>>> f09d897f74d9a963b67221ff122bc8297c855338
      path:'/list',
      name:'list',
      component:LsitViewVue
    },
<<<<<<< HEAD
    //新增笔记界面
=======
>>>>>>> f09d897f74d9a963b67221ff122bc8297c855338
    {
      path:'/add',
      name:'add',
      component:addedView
    },
<<<<<<< HEAD
    //修改界面
=======
>>>>>>> f09d897f74d9a963b67221ff122bc8297c855338
    {
      path:'/note',
      name:'note',
      component:updateView
<<<<<<< HEAD
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
=======
>>>>>>> f09d897f74d9a963b67221ff122bc8297c855338
    }
  ]
})

export default router
