import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')   //.ให้ App ทำงานในส่วนที่มี element id="app"
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
