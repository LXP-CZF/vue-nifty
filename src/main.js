// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
//  import './axios/api'
import './mockDate.js'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import 'babel-polyfill';
import md5 from 'js-md5';
import vueGridLayout from 'vue-grid-layout';
import animated from 'animate.css';
//阿里图标
import './assets/iconfont/iconfont.css';
import echarts from 'echarts'
import 'echarts-gl'; 
import 'echarts-wordcloud/dist/echarts-wordcloud.min.js'
import Mock from './mock'//调用后台接口时要注释
Mock.bootstrap();

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.use(ElementUi);
Vue.use(vueGridLayout);
// Vue.use(md5);


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
