import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import routes from './routes'
import App from './App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
