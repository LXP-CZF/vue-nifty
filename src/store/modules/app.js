import Cookies from 'js-cookie'
import layout from './layout'
// import router from './router'
const app={
	state:{
        open_close:true,
        icon:'el-icon-d-arrow-right',
        theme_color:'#3F76B0',
        classA:'',
        sidebar: {
            opened: true,//折叠侧边栏
            opened3: true,
            withoutAnimation: false,
            Profil:true,//控制个人简历
            isoffProfil:false,//控制个人简历是否可用
            mainLeft:'',//控制主页面margin-left样式
            isFixed:false,//是否固定侧边栏
            isopenBtns:false,//控制是否快捷按钮可视
            displayBtns:'',//设置快捷键按钮样式
            leftSide:false,//aside是否放在左边
            leftSideLeft:'',//aside放在左边时样式
            hiddensidebar:'220px',
            hiddensidebar2:'65px',
            marginleftHome3main:'0px',
            marginleftHome3sidebar:'-999px'
          },
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {//折叠侧边栏方法
          state.sidebar.opened = !state.sidebar.opened
          state.sidebar.Profil = !state.sidebar.Profil
          state.sidebar.isoffProfil=!state.sidebar.isoffProfil
          state.sidebar.withoutAnimation = false
          setTimeout(()=>{
            document.querySelector('.asidemain').style.height=document.querySelector('.mainheight').offsetHeight+35+'px'
            },300);
          setTimeout(()=>{
            var getwidths=document.querySelector('.mainheight').offsetWidth;
            layout.state.isFooter.footerWidth=getwidths+'px';
          },300);
          
          if (state.sidebar.opened===false) {
            state.sidebar.hiddensidebar="65px";
            state.sidebar.marginleftHome3main="220px";
            state.sidebar.marginleftHome3sidebar="0px";
            state.sidebar.hiddensidebar2="220px";
            layout.state.boxlay.fixedHeaderLogowidth="45px";
            // Cookies.set('sidebarStatus', 1)
            if(layout.state.boxlay.fixedHeader===true){
              layout.state.boxlay.fixedHeaderwidth="fixedHeaderwidthclose"
              layout.state.boxlay.fixedHeaderLogowidth="45px";
            }
            if(state.sidebar.isFixed===true){
            // state.sidebar.mainLeft='mainleftlittle'
          }else{
            // state.sidebar.mainLeft=''
          }
          } else {
            // Cookies.set('sidebarStatus', 0)
            state.sidebar.Profil=true
            state.sidebar.isoffProfil=false
            state.sidebar.hiddensidebar="220px";
            state.sidebar.hiddensidebar2="65px";
            state.sidebar.marginleftHome3main="0px";
            state.sidebar.marginleftHome3sidebar="-990px";
            layout.state.boxlay.fixedHeaderLogowidth="200px";
            if(layout.state.boxlay.fixedHeader===true){
              layout.state.boxlay.fixedHeaderwidth="fixedHeaderwidthopen";
              layout.state.boxlay.fixedHeaderLogowidth="200px";
            }
          }
          if(layout.state.boxlay.boxLayout===true && state.sidebar.leftSide===true && state.sidebar.opened===false){
            state.sidebar.leftSideLeft="65px";
          }
          if(layout.state.boxlay.boxLayout===true && state.sidebar.leftSide===true && state.sidebar.opened===true){
            state.sidebar.leftSideLeft="220px";
          }
          if(layout.state.boxlay.boxLayout===false && state.sidebar.leftSide===true && state.sidebar.opened===false){
            state.sidebar.leftSideLeft="65px";
          }
          if(layout.state.boxlay.boxLayout===false && state.sidebar.leftSide===true && state.sidebar.opened===true){
            state.sidebar.leftSideLeft="220px";
          }
        },
        TOGGLE_SIDEBAR3: state => {//折叠侧边栏方法Home-3
          state.sidebar.opened3 = !state.sidebar.opened3
          // state.sidebar.Profil = !state.sidebar.Profil
          // state.sidebar.isoffProfil=!state.sidebar.isoffProfil
          state.sidebar.withoutAnimation = false
          if (state.sidebar.opened3===false) {
            // state.sidebar.hiddensidebar="65px";
            state.sidebar.marginleftHome3main="220px";
            state.sidebar.marginleftHome3sidebar="0px";
            // state.sidebar.hiddensidebar2="220px";
            // layout.state.boxlay.fixedHeaderLogowidth="45px";
            // Cookies.set('sidebarStatus', 1)
            if(layout.state.boxlay.fixedHeader===true){
              layout.state.boxlay.fixedHeaderwidth="fixedHeaderwidthclose"
              // layout.state.boxlay.fixedHeaderLogowidth="45px";
            }
          } else {
            // Cookies.set('sidebarStatus', 0)
            // state.sidebar.Profil=true
            // state.sidebar.isoffProfil=false
            // state.sidebar.hiddensidebar="220px";
            // state.sidebar.hiddensidebar2="65px";
            state.sidebar.marginleftHome3main="0px";
            state.sidebar.marginleftHome3sidebar="-990px";
            
            // layout.state.boxlay.fixedHeaderLogowidth="200px";
            if(layout.state.boxlay.fixedHeader===true){
              layout.state.boxlay.fixedHeaderwidth="fixedHeaderwidthopen";
              // layout.state.boxlay.fixedHeaderLogowidth="200px";
            }
          }
          if(layout.state.boxlay.boxLayout===true && state.sidebar.leftSide===true && state.sidebar.opened3===false){
            state.sidebar.leftSideLeft="220px";
          }
          if(layout.state.boxlay.boxLayout===true && state.sidebar.leftSide===true && state.sidebar.opened3===true){
            state.sidebar.leftSideLeft="0px";
          }
          if(layout.state.boxlay.boxLayout===false && state.sidebar.leftSide===true && state.sidebar.opened3===false){
            state.sidebar.leftSideLeft="220px";
          }
          if(layout.state.boxlay.boxLayout===false && state.sidebar.leftSide===true && state.sidebar.opened3===true){
            state.sidebar.leftSideLeft="0px";
          }
           
        },
        changeColor:state=>{
            state.theme_color=state.theme_color
        },
        changeProfil:state=>{
          state.sidebar.Profil=!state.sidebar.Profil;
        },
      },
      actions: {
        toggleSideBar({ commit }) {
          commit('TOGGLE_SIDEBAR')
        },
        toggleSideBar3({ commit }) {
          commit('TOGGLE_SIDEBAR3')
        },
        changeColor:({commit})=>commit('changeColor'),
        changeProfil:({commit})=>commit('changeProfil')
      }
    }
    
    export default app