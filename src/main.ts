import { createApp } from 'vue'
import App from './App.vue'
import { remsize } from './minx/rem'
import './minx/css/iconfont.css'
import imports from './minx/import'
const app = createApp(App)
imports(app)
app.mount('#app')

remsize()
window.onresize = () => {
  remsize()
}
