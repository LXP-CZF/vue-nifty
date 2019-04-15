import Cookies from 'js-cookie'
const layout={
	state:{
          boxlay: {
            boxLayout:false,//控制body是否盒装布局
            open_boxlayout:'',//body盒装布局样式
            isbgasidecolor:false,//控制侧边栏、背景颜色、背景图片面板的切换
            backgroundImg:false,//背景图片面板显示
            dis:true,//控制背景图片switch是否禁用
            fixedHeader:false,//控制固定位置switch是否固定header
            fixedHeaderClass:'',//固定header的css
            fixedHeaderwidth:'',//改变header的width
            fixedHeaderLogowidth:'200px',//固定header时改变logo部分的宽度
            fixedHeaderMaintop:''//固定header时给main设置margin-top值
          },
          asideSetting:{
            mainnavFixed:'',//控制侧边栏添加固定class
            navFixed:'',//控制侧边栏，但header固定时添加固定class
            asideTop:'',
            divdisplay:'none'
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
            isVisibleClass:'',//aside可视时样式
            darkVersion:false,//aside黑色主题
            asideRight:'',//aside距离右边样式
            asideFixed:false,//aside是否固定
            asideFixedClass:''//aside固定后的样式
          },
          isFooter:{
            fixedFooter:false,//是否固定footer
            fixedFooterClass:'',//固定footer后添加的样式
            footerWidth:'100%'
          }
    },
    mutations: {
        changeAsideVisible:state=>{//aside是否可见方法
          state.isAside.Visible=!state.isAside.Visible;
          if(state.isAside.Visible===false){
            state.isAside.isVisibleClass='noneVisible'
          }else{
            state.isAside.isVisibleClass='Visibleclass'
          }
        },
        changeAsideColor:state=>{//更换aside颜色方法
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
        changeAsideFixed:state=>{//固定aside
          state.isAside.asideFixed=!state.isAside.asideFixed;
          state.isAside.asideFixedClass='asdfixedClass'
          if(state.isAside.asideFixed===true){
            state.isAside.asideFixedClass='asdfixedClass'
          }else{
            state.isAside.asideFixedClass=''
          }
        },
        
      },
      actions: {
        changeAsideVisible:({commit})=>commit('changeAsideVisible'),
        changeAsideColor:({commit})=>commit('changeAsideColor'),
        changeAsideLeft:({commit})=>commit('changeAsideLeft'),
        changeAsideFixed:({commit})=>commit('changeAsideFixed'),
        changeFooterFixed:({commit})=>commit('changeFooterFixed'),
      }
    }
    export default layout