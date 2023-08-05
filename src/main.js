
import { createApp, provide } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { i18n } from '/src/locales/index.js'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { createMetaManager } from 'vue-meta';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createHead } from '@vueuse/head';











// const pinia = createPinia();
const app = createApp(App)
const head = createHead();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
// app.use(pinia)
app.use(i18n)
app.provide('i18n', i18n)
app.use(head);
app.mount('#app')
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
// app.use(createMetaManager());
