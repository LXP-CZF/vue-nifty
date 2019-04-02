import Vue from 'vue'
import Router from 'vue-router'

// 懒加载方式，当路由被访问的时候才加载对应组件
 const Home = resolve => require(['@/views/Home'], resolve)
// const mock = resolve => require(['@/components/mock'], resolve)
// const tree = resolve => require(['@/views/tree'], resolve)
// const main = resolve => require(['@/views/layout/main'], resolve)
// const content = resolve => require(['@/views/content'], resolve)
 const Dashboard1 = resolve => require(['@/views/component/basic_button'], resolve)
 const Dashboard_3 = resolve => require(['@/views/Home_3.vue'], resolve)
 const Dashboard2 = resolve => require(['@/views/Home_1.vue'], resolve)
 const Dashboard3 = resolve => require(['@/components/Table'], resolve)
 const login = resolve => require(['@/views/component/Login'], resolve)

//import login from '@/views/login/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/',
			component: login,
			//redirect: 'login',
			name: '',
			hidden: true
	},
	{
		path: '/Dashboard2',
		component: Dashboard2,
		name:'Dashboard2',
		hidden: true
	},
	{
		path: '/Dashboard-3',
		component: Dashboard_3,
		name:'Dashboard_3',
		hidden: true
	},
	{
		path: '/Dashboard2',
		component: Home,
		name:'Dashboard2',
		iconCls: 'iconfont icon-shouyex',//图标样式class
		children: [
				{ path: '/Dashboard1', component: Dashboard1, name: 'Dashboard2-1'},
				// { path: '/Dashboard2', component: Dashboard2, name: 'Dashboard2' },
				{ path: '/Dashboard3', component: Dashboard3, name: 'Dashboard2-2' }
		]
	},

	{
		path: '/layout1',
		component: Home,
		name:'Layouts',
		iconCls: 'iconfont icon-icon_subordinate',//图标样式class
		children: [
				{ path: '/layout1',  name: 'layout1'},
				{ path: '/layout2',  name: 'layout2' },
				{ path: '/layout3', name: 'layout3' }
		]
	},
  ]
})
