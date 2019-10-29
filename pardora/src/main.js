// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'

Vue.component('my-header',Header);
Vue.component('my-footer',Footer);
//axios 注册vue
Vue.prototype.axios=axios;
//配置服务器基础路径
axios.defaults.baseURL='http://localhost:4000';
//配置保存session信息
axios.defaults.withCredentials=true


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
