<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white border-b border-gray-200 px-8">
      <nav class="max-w-6xl mx-auto h-15 flex items-center justify-between">
        <RouterLink to="/" class="text-2xl font-bold text-gray-800 no-underline">
          Lulu
        </RouterLink>
        <div class="flex gap-8">
          <RouterLink 
            to="/" 
            class="text-gray-600 no-underline transition-colors duration-300 hover:text-blue-500 [&.router-link-active]:text-blue-500"
          >
            {{ t('nav.home') }}
          </RouterLink>
          <RouterLink 
            to="/about"
            class="text-gray-600 no-underline transition-colors duration-300 hover:text-blue-500 [&.router-link-active]:text-blue-500"
          >
            {{ t('nav.about') }}
          </RouterLink>
        </div>
      </nav>
    </header>
    
    <main class="flex-1 max-w-6xl w-full mx-auto p-8">
      <RouterView />
    </main>
    
    <footer class="bg-gray-50 py-6 text-center text-gray-600">
      <p>&copy; 2024 Lulu. {{ t('footer.rights') }}</p>
    </footer>
  </div>
</template>
