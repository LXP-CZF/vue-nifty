// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
  import axios from 'axios'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import 'babel-polyfill'
import vueGridLayout from 'vue-grid-layout';
import animated from 'animate.css';
//阿里图标
import './assets/iconfont/iconfont.css';
import echarts from 'echarts'
import 'echarts-gl'; 
import 'echarts-wordcloud/dist/echarts-wordcloud.min.js'
import Mock from './mock'
Mock.bootstrap();

//  Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.use(ElementUi);
Vue.use(vueGridLayout);


Vue.config.productionTip = false
require('./mockDate.js')
// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
 
    return config;
  },
  error => {
    return Promise.reject(error);
  });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
