import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant插件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 加载全局样式文件
import './styles/index.less'

// 通过npm i -S amfe-flexible安装lib-flexible,并在main.js文件中导入
// 动态设置rem基准值
import 'amfe-flexible'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Vant)
app.mount('#app')
