import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载全局样式文件
import './styles/index.less'

// 导入vant插件库
import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Vant)
app.mount('#app')
