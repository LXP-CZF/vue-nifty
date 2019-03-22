import Cookies from 'js-cookie'
import layout from './layout'
const app={
	state:{
        open_close:true,
        icon:'el-icon-d-arrow-right',
        theme_color:'#3F76B0',
        classA:'',
        sidebar: {
            opened: true,
            withoutAnimation: false,
            Profil:true,//控制个人简历
            isoffProfil:false,//控制个人简历是否可用
            mainLeft:'',
            isFixed:false,//是否固定侧边栏
            isopenBtns:false,
            displayBtns:'',
            leftSide:false,
            leftSideLeft:'',
          },
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
          state.sidebar.opened = !state.sidebar.opened
          state.sidebar.Profil = !state.sidebar.Profil
          state.sidebar.isoffProfil=!state.sidebar.isoffProfil
          state.sidebar.withoutAnimation = false
          if (state.sidebar.opened===false) {
            // Cookies.set('sidebarStatus', 1)
            if(state.sidebar.isFixed===true){
            // state.sidebar.mainLeft='mainleftlittle'
          }else{
            // state.sidebar.mainLeft=''
          }
          } else {
            // Cookies.set('sidebarStatus', 0)
            state.sidebar.Profil=true
            state.sidebar.isoffProfil=false
          }
           if(layout.state.boxlay.boxLayout===true && state.sidebar.leftSide===true && state.sidebar.opened===false){
              state.sidebar.leftSideLeft="145px";
            }
            if(layout.state.boxlay.boxLayout===true && state.sidebar.leftSide===true && state.sidebar.opened===true){
              state.sidebar.leftSideLeft="300px";
            }
            if(layout.state.boxlay.boxLayout===false && state.sidebar.leftSide===true && state.sidebar.opened===false){
              state.sidebar.leftSideLeft="65px";
            }
            if(layout.state.boxlay.boxLayout===false && state.sidebar.leftSide===true && state.sidebar.opened===true){
              state.sidebar.leftSideLeft="220px";
            }
        },
        CLOSE_SIDEBAR: (state, withoutAnimation) => {
          Cookies.set('sidebarStatus', 0)
          state.sidebar.opened = false
          state.sidebar.withoutAnimation = withoutAnimation
        },
        toggle:state=>{
            state.open_close=!state.open_close
            if(state.open_close==true)
            {
                state.icon='el-icon-d-arrow-right'
            }
            else{
                state.icon='el-icon-d-arrow-left'
            }	
        },
        changeColor:state=>{
            state.theme_color=state.theme_color
        },
        fiexd:state=>{
            if(state.open_close==false){
                state.classA='classA'
            }
            else{
                state.classA=''
            }
        },
        changeProfil:state=>{
          state.sidebar.Profil=!state.sidebar.Profil;
        },
      },
      actions: {
        toggleSideBar({ commit }) {
          commit('TOGGLE_SIDEBAR')
        },
        closeSideBar({ commit }, { withoutAnimation }) {
          commit('CLOSE_SIDEBAR', withoutAnimation)
        },
        menu_toggle:({commit})=>commit('toggle'),
        changeColor:({commit})=>commit('changeColor'),
        fixed:({commit})=>commit('fixed'),
        changeProfil:({commit})=>commit('changeProfil')
        
      }
    }
    
    export default app