import { createApp } from 'vue'
import App from './App.vue'


//--- registed component แบบ Global ---
import HelloWorld from './components/HelloWorld.vue'
const a = createApp(App)
a.component('Hello',HelloWorld)
.component() //--> chaining component

createApp(App).mount('#app')
