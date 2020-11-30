import { createApp } from 'vue'
import app from '/@/app.vue'
import store from '/@/store'
import '/@/index.css'

createApp(app).use(store).mount('#app')
