import Vue from 'vue'
import Router from 'vue-router'

// 懒加载方式，当路由被访问的时候才加载对应组件
 const Home = resolve => require(['@/views/Home'], resolve)
// const mock = resolve => require(['@/components/mock'], resolve)
// const tree = resolve => require(['@/views/tree'], resolve)
 const treeTable = resolve => require(['@/views/component/tree'], resolve)
 const table = resolve => require(['@/views/table/index.vue'], resolve)
 const Dashboard1 = resolve => require(['@/views/component/basic_button'], resolve)
 const Dashboard_3 = resolve => require(['@/views/Home_3.vue'], resolve)
 const Dashboard2 = resolve => require(['@/views/Home_1.vue'], resolve)
 const Dashboard3 = resolve => require(['@/components/Table'], resolve)
 const login = resolve => require(['@/views/component/Login'], resolve)
 const capability_type = resolve => require(['@/views/access/capability_type'], resolve)
 const capability_engineversion = resolve => require(['@/views/access/capability_engineversion'], resolve)
 const capability_units = resolve => require(['@/views/access/capability_units'], resolve)
 const capability_engine = resolve => require(['@/views/access/capability_engine'], resolve)
 const manage_interface = resolve => require(['@/views/common_interface/manage_interface'], resolve)

//import login from '@/views/login/login.vue'
Vue.use(Router)

const router = new Router({
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
    // {
	// 	path: '/table',
	// 	component: table,
	// 	name:'Dashboard_3',
	// 	hidden: true
	// },
	{
		path: '/treeTable',
		component: Home,
		name:'Tables',
		iconCls: 'iconfont icon-icon_subordinate',//图标样式class
		children: [
			  { path: '/table',component: table,name: 'table'},
				{ path: '/treeTable', component:treeTable, name: '能力类型管理'},
				{ path: '/capability_engineversion',component:capability_engineversion,  name: '能力引擎管理' },
				{ path: '/capability_units',component:capability_units, name: '能力单元管理' },
				{ path: '/capability_engine',component:capability_engine, name: '能力引擎版本管理' },
				{ path: '/manage_interface',component:manage_interface, name: '接口管理' }
		]
	},
  ]
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === 'null' || token === '') {
      next('/');
    } else {
      next();
    }
  }
});
 
export default router;
