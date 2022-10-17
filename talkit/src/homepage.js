import { createApp } from 'vue'
import UserHomePage from './UserHomePage.vue'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app=createApp(UserHomePage)
app.mount('#app')
