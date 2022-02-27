import { createRouter, createWebHashHistory } from 'vue-router'

// 路由表
const routes = [
  // {
  //   path: '/',
  //   redirect: { name: 'login' }
  // },
  {
    path: '/',
    // name: 'layout', //如果副路由有默认子路由，那他的name没有意义
    component: () => import('@/views/layout'),
    children:
    [
      {
        path: '', // path为空，默认子路由，默认子路由只能有一个
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
