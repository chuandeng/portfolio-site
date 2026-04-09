<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="py-8">
    <section class="text-center py-16 px-4">
      <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        {{ t('home.title') }}
      </h1>
      <p class="text-xl text-gray-600 mb-8">{{ t('home.subtitle') }}</p>
      <div class="flex justify-center gap-4">
        <RouterLink 
          to="/about" 
          class="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg no-underline transition-all duration-300 hover:bg-blue-600 hover:-translate-y-0.5"
        >
          {{ t('home.getStarted') }}
        </RouterLink>
      </div>
    </section>
    
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      <div class="bg-gray-50 p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h3 class="text-2xl font-semibold mb-4 text-gray-800">Vue 3</h3>
        <p class="text-gray-600 leading-relaxed">使用 Vue 3 Composition API 构建，享受更好的性能和开发体验</p>
      </div>
      <div class="bg-gray-50 p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h3 class="text-2xl font-semibold mb-4 text-gray-800">Vite</h3>
        <p class="text-gray-600 leading-relaxed">极速的开发服务器和优化的构建工具</p>
      </div>
      <div class="bg-gray-50 p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h3 class="text-2xl font-semibold mb-4 text-gray-800">TypeScript</h3>
        <p class="text-gray-600 leading-relaxed">类型安全的代码，更好的IDE支持和维护性</p>
      </div>
    </section>
  </div>
</template>
