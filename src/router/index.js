import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入页面
import Login from '../views/login/index.vue'
import Layout from '../views/layout/index.vue'
import Home from '../views/home/index.vue'
import Credit from '../views/credit/index.vue'
import User from '../views/user/index.vue'
import Tiny from '../views/detail_tiny/index.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login },
    {
      path: '/layout', component: Layout,
      children: [
        { path: '/home', component: Home },
        { path: '/credit', component: Credit },
        { path: '/user', component: User },
      ]
    },
    { path: '/detail_tiny', component: Tiny },
  ]
})
