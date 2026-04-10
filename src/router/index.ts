import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    // 使用自动引入的 HomeView 组件
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // 使用自动引入的 AboutView 组件
    component: () => import('@/views/AboutView.vue'),
  },
]

// const base = import.meta.env.BASE_URL || '/'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
