import { createApp } from 'vue'
import App from './App.vue'
import '@/mock/list'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import './style.css'


import { createPinia } from 'pinia'


createApp(App)
  .use(ElementPlus)
  .use(createPinia())
  .use(router)
  .mount('#app')
