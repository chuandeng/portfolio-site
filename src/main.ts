import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/main.css'
import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import AnimateOnScroll from 'primevue/animateonscroll';

const app = createApp(App)
app.directive('animateonscroll', AnimateOnScroll);

app.use(router)
app.use(i18n)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
})

app.mount('#app')
