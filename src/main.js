
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
// import './assets/style.css'
import './assets/base.scss'

const app = createApp(App).use(router).mount('#app')
