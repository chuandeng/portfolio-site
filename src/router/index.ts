import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Projects from '@/views/Projects.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectDetail from '@/views/ProjectDetail.vue'
import type { Component } from 'vue'

// 动态导入 projects 目录下的所有 .vue 文件
const projectModules = import.meta.glob<{ default: Component }>('@/views/projects/*.vue')

// 项目 ID 到组件加载器的映射
const projectComponents: Record<string, () => Promise<{ default: Component }>> = {}
Object.entries(projectModules).forEach(([path, loader]) => {
  const fileName = path.split('/').pop()?.replace(/\.vue$/, '')
  if (fileName) {
    projectComponents[fileName] = loader
  }
})

// 获取所有有效的项目 ID
const projectIds = Object.keys(projectComponents)

// 动态加载项目详情的组件
const ProjectDetailComponent = () => {
  // 从当前 URL 中提取项目 ID
  const hash = window.location.hash
  const match = hash.match(/\/([^/?#]+)/)
  const id = match?.[1]

  if (id && projectComponents[id]) {
    return projectComponents[id]()
  }

  // 如果找不到对应项目，返回项目列表页
  console.warn(`Project "${id}" not found. Available: ${projectIds.join(', ')}`)
  return import('@/views/Projects.vue')
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    beforeEnter: (to, _from, next) => {
      const id = to.params.id as string
      if (projectIds.includes(id)) {
        next()
      } else {
        // 项目不存在，重定向到项目列表
        next({ name: '/' })
      }
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
export { projectIds }
