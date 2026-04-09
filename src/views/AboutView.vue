<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="max-w-3xl mx-auto py-8 px-4">
    <h1 class="text-4xl font-bold mb-8 text-gray-800">{{ t('about.title') }}</h1>
    <div class="text-gray-600 leading-relaxed">
      <p class="mb-4">{{ t('about.description') }}</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4 text-gray-800">技术栈</h2>
      <ul class="space-y-3">
        <li class="p-4 bg-gray-50 rounded-lg transition-colors hover:bg-gray-100">
          <strong class="text-blue-500">Vue 3</strong> - 渐进式 JavaScript 框架
        </li>
        <li class="p-4 bg-gray-50 rounded-lg transition-colors hover:bg-gray-100">
          <strong class="text-blue-500">Vite</strong> - 下一代前端构建工具
        </li>
        <li class="p-4 bg-gray-50 rounded-lg transition-colors hover:bg-gray-100">
          <strong class="text-blue-500">TypeScript</strong> - 类型安全的 JavaScript
        </li>
        <li class="p-4 bg-gray-50 rounded-lg transition-colors hover:bg-gray-100">
          <strong class="text-blue-500">Vue Router</strong> - Vue.js 官方路由
        </li>
        <li class="p-4 bg-gray-50 rounded-lg transition-colors hover:bg-gray-100">
          <strong class="text-blue-500">Vue I18n</strong> - 国际化插件
        </li>
        <li class="p-4 bg-gray-50 rounded-lg transition-colors hover:bg-gray-100">
          <strong class="text-blue-500">Tailwind CSS</strong> - 实用优先的 CSS 框架
        </li>
      </ul>
    </div>
  </div>
</template>
