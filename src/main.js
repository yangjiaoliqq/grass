import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import './style/base.css'
import './style/iconfont.css'
import 'vant/lib/index.css';
import 'amfe-flexible/index.js'
// 导入过滤器
import './filter/telfilter'

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
