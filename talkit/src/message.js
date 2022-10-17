import { createApp } from 'vue'
import MessagePage from './MessagePage.vue'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app=createApp(MessagePage)
app.mount('#app')
