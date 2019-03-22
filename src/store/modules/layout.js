import Cookies from 'js-cookie'
const layout={
	state:{
          boxlay: {
            boxLayout:false,//控制body是否盒装布局
            open_boxlayout:'',
            isbgasidecolor:false,//控制侧边栏、背景颜色、背景图片面板的切换
            backgroundImg:false,//背景图片面板显示
            dis:true,//控制背景图片switch是否禁用
            fixedHeader:false,//控制固定位置switch是否固定header
            fixedHeaderClass:'',//固定header的css
            fixedHeaderwidth:''//改变header的width
          },
          asideSetting:{
            mainnavFixed:'',//控制侧边栏添加固定class
            
          },
          colorSetting:{
            alltheme:'',
            headertheme:'',
            colortext:'#ffd04b'
          },
          iscolors:{//背景颜色组
            gray:'#8f9ea6',
            coffee:'#807362',
            dark:'#3a444e',
            dust:'#fd8943',
            lime:'#80b343',
            mint:'#26a69a',
            navy:'#294d73',
            ocean:'#177bbb',
            prickly_pear:'#ad5468',
            purple:'#8b5b9f',
            well_red:'#d23e3e',
            yellow:'#efd45a'
          },
          isAside:{
            Visible:false,//aside是否可见
            isVisibleClass:'',
            darkVersion:false,
           
            asideRight:'',
            asideFixed:false,
            asideFixedClass:''
          }
    },
    mutations: {
      // changeBoxLayout:state=>{
      //       state.boxlay.dis=!state.boxlay.dis;
      //       state.boxlay.boxLayout=!state.boxlay.boxLayout;
      //       if(state.boxlay.boxLayout===true){
      //         state.boxlay.open_boxlayout='open_boxlayout';
      //       }
      //       if(state.boxlay.boxLayout==false){
      //         state.boxlay.backgroundImg=false;
      //         state.boxlay.open_boxlayout='';
      //         if(state.boxlay.backgroundImg==false)
      //         {
      //           state.boxlay.isbgasidecolor=false;
      //         }
      //       }
      //   },
        changeAsideVisible:state=>{
          state.isAside.Visible=!state.isAside.Visible;
          if(state.isAside.Visible===false){
            state.isAside.isVisibleClass='noneVisible'
          }else{
            state.isAside.isVisibleClass='Visibleclass'
          }
        },
        changeAsideColor:state=>{
          state.isAside.darkVersion=!state.isAside.darkVersion;
          var link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.id='asidecolor';
            link.href = 'static/css/submenu-theme-true.css?v=1.0';
            var themeCSS = document.querySelector('#asidecolor');
          if(state.isAside.darkVersion===true){
            if (themeCSS.href!=='') {
              themeCSS.href='static/css/submenu-theme-true.css?v=1.0';
          } else {
              document.getElementsByTagName("head")[0].appendChild(link);
           }
          }else{
            if (themeCSS.href!=='') {
              themeCSS.href='';
          }
          }
        },
       
        changeAsideFixed:state=>{
          state.isAside.asideFixed=!state.isAside.asideFixed;
          state.isAside.asideFixedClass='asdfixedClass'
          // if(state.isAside.leftSide===true){
          //   state.isAside.asideFixedClass='asideFixedclass'
          // }else{
          //   state.isAside.asideFixedClass=''
          // }
        }
      },
      actions: {
        changeAsideVisible:({commit})=>commit('changeAsideVisible'),
        changeAsideColor:({commit})=>commit('changeAsideColor'),
        changeAsideLeft:({commit})=>commit('changeAsideLeft'),
        changeAsideFixed:({commit})=>commit('changeAsideFixed'),

      }
    }
    
    export default layout