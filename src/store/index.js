import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import layout from './modules/layout'
import usres from './modules/users'
Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
	  app,
		layout,
		usres
	},
	getters
  })
  
  export default store

