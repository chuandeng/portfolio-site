import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-site/',
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      // 自动引入 src/views 下的组件
      dirs: ['src/views'],
      // 组件的命名格式：原始文件名
      deep: true,
      // 生成的类型声明文件位置
      dts: 'src/components.d.ts',
      // 目录的别名
      directoryAsNamespace: false,
      // 自动引入 PrimeVue 组件
      resolvers: [PrimeVueResolver()],
    }),
    AutoImport({
      // 自动引入 Vue API
      imports: ['vue', 'vue-router', 'vue-i18n'],
      // 生成的类型声明文件位置
      dts: 'src/auto-imports.d.ts',
      // 解决 ESLint 报错（如果使用 ESLint）
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
    open: true,
  },
})
