<template>
<!--侧边栏-->
<div class="searchBar" id="searchBars" :style="{marginTop:isfixedHeaderMaintop}">
<el-row class="asideset" :class="searchBarFixed == true ? ismainnavFixed :''">
	<!-- <el-col :sm="24" :md="24" :lg="24" :xl="24" class="hidden-xs-only"> -->
		<!-- <el-col :sm="24" :md="24" :lg="24" :xl="24" class="hidden-xs-only"  v-if="!isfixedHeader">
			 <el-row style="height: 60px !important;background-color:#25476a;" class="logtheme">
      <el-col  :sm="7" :md="7" :lg="7" :xl="7" class="hidden-xs-only" style="height: 60px !important;">
		    <router-link to="/Dashboard1" style="text-decoration: none"><img src="../../assets/jerry-1.jpg" style="height: 35px; width: 35px;border-radius: 50%;padding-top: 13px; padding-left: 20px;" /></router-link>
      </el-col>
      <el-col  :md="16" :lg="16" :xl="16" class="hidden-xs-only hidden-sm-only" style="height: 60px !important; line-height:60px;padding-left:15px" v-if="!stateCollapse">
        <router-link to="/Dashboard1"><h3>Goodidea</h3></router-link>
      </el-col>
			 </el-row>
		</el-col> -->
		<div style="height:60px !important;" :style="{display:isdivdisplay}"></div>
<el-col :sm="24" :md="24" :lg="24" :xl="24" class="hidden-xs-only asidemain" :style="{height:getheight+ 'px'}">
<el-menu :default-active="activeIndex" class="el-menu-vertical-demo"  :active-text-color="iscolortext"  :collapse="stateCollapse" @select="selectMenu" router>
  <el-collapse v-if="isProfilstate" >
  <el-collapse-item  name="1">
		<template slot="title">
			<el-row >
				<el-col :sm="24" :md="24" :lg="24" :xl="24" class="hidden-xs-only"><img src="../../assets/1.png" class="mnp-img"/></el-col>
				<el-col :sm="24" :md="24" :lg="24" :xl="24" class="hidden-xs-only">	<p class="mnp-name">Aaron Chavez<i class="el-icon-caret-bottom" style="padding-left: 35px;"></i></p></el-col>
				<el-col :sm="24" :md="24" :lg="24" :xl="24" class="hidden-xs-only" style="margin-top:-19px"><span class="mnp-desc">aaron.cha@themeon.net</span>	</el-col>
			</el-row>
    </template>
    <div class="coll-item"><i class="el-icon-message"></i>&nbsp;&nbsp;My message</div>
    <div class="coll-item"><i class="iconfont icon-icon_setting"></i>&nbsp;&nbsp;&nbsp;settings</div>
		<div class="coll-item"><i class="iconfont icon-icon_discovery"></i>&nbsp;&nbsp;&nbsp;<router-link to="/">Loginout</router-link></div>
  </el-collapse-item>
	</el-collapse>
	<el-row :class="isdisplaybtns" style="display:none;">
		<el-col :sm="24" :md="24" :lg="24" :xl="24" class="hidden-xs-only" style="margin:10px 0px;">
			<el-button type="primary" icon="el-icon-edit" circle></el-button>
			<el-button type="success" icon="el-icon-check" circle></el-button>
			<el-button type="warning" icon="el-icon-star-off" circle></el-button>
			<el-button type="danger" icon="el-icon-delete" circle></el-button>
		</el-col>
	</el-row>
	 <el-submenu index="0">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Dashboard1</span>
        </template>
				<!-- <el-menu-item index="Dashboard2"><router-link to="" @click.native="changelayoutType">选项1</router-link></el-menu-item> -->
        <el-menu-item index="Dashboard-3">Dashboard1-1</el-menu-item>
        <!-- <el-menu-item-group>
         <template slot="title">分组一</template> 
          <el-menu-item index="Dashboard2">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
		<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
			<el-submenu :index="index+''" v-if="!item.leaf">
				<template slot="title"><i :class="item.iconCls"></i><span style="margin-left:6px;">{{item.name}}</span></template>
				<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden" >{{child.name}}</el-menu-item>
			</el-submenu>
    <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
</template>
		
</el-menu>
	</el-col>
</el-row>
</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default{
		props: ['stateCollapse','isProfilstate'],
		data(){
			return{
				getheight:'',
				searchBarFixed:false
			}
		},
    computed:{
      activeIndex(){
        return this.$route.path
      },
      ...mapGetters(['boxlay','sidebar','asideSetting','colorSetting','colortext']),
    isCollapse() {
      return !this.sidebar.opened
		},
		 boxLayout(){
        return this.boxlay.boxLayout
    },
		 isProfil() {
      return this.sidebar.Profil
		},
		isdisplaybtns(){
			return this.sidebar.displayBtns
		},
		 isFixed(){
      return this.sidebar.isFixed
		},
		ismainleft(){
        return this.sidebar.mainLeft
    },
		ismainnavFixed(){
      return this.asideSetting.mainnavFixed
		},
		isdivdisplay(){
		return this.asideSetting.divdisplay
		},
		isalltheme(){
      return this.colorSetting.alltheme
		},
		 iscolortext(){
      return this.colorSetting.colortext
		},
		 isfixedHeader(){
     return this.boxlay.fixedHeader
    },
			isfixedHeaderClass(){
       return this.boxlay.fixedHeaderClass
		},
		 isfixedHeaderMaintop(){
      return this.boxlay.fixedHeaderMaintop
    },
		},
		mounted () {
			//给window添加一个滚动滚动监听事件
			window.addEventListener('scroll', this.handleScroll,true)
				this.getHeight();
			 this.$nextTick(() => {
             this.getHeight();
            })
			 window.onresize = () => {
        return (() => {
            this.$nextTick(() => {
              this.getHeight();
            })
        })()
    }
		},
		methods:{
      ...mapActions([
				'menu_toggle',
				'changeColor',
				'fixed'
			]),
			// handleScroll(){
			// 	this.asideSetting.mainnavFixed="mainnav-fixed";
			// },
			selectMenu(){
				setTimeout(()=>{
					this.getheight=document.querySelector('.mainheight').offsetHeight+35; 
					// document.querySelector('.tabclass').style.height=document.querySelector('.mainheight').style.height+'px'; 
					if(this.boxlay.fixedHeader===true){
						 this.getheight=document.querySelector('.mainheight').offsetHeight-25;
					 }else{
						 this.getheight=document.querySelector('.mainheight').offsetHeight+35;
					 }
					return this.getheight
				},2000)
				 
			},
			getHeight(){
					setTimeout(()=>{
					 this.getheight=document.querySelector('.mainheight').offsetHeight+35;
					 if(this.boxlay.fixedHeader===true){
						 this.getheight=document.querySelector('.mainheight').offsetHeight-25;
					 }else{
						 this.getheight=document.querySelector('.mainheight').offsetHeight+35;
					 }
				   return this.getheight
				},2000)
			},
		
			handleScroll () {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				let offsetTop = document.querySelector('#searchBars').offsetTop
				if(this.sidebar.isFixed===true){
					 scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
					 this.asideSetting.mainnavFixed='mainnav_fixed';
					if(this.boxlay.fixedHeader===true){
					  this.asideSetting.divdisplay='block';
					}
					if(this.searchBarFixed===false){
						 this.asideSetting.divdisplay='none';
					}
					 if( this.searchBarFixed === true && this.sidebar.opened===true){
						 	this.sidebar.mainLeft="mainleft"
					   }else{this.sidebar.mainLeft=""}
					  if(this.searchBarFixed === true && this.sidebar.opened==false){ 
						 	this.sidebar.mainLeft="mainleftlittle"
					 }
				}else{
					this.sidebar.mainLeft=" "
				}
			},
			changelayoutType(){
				// this.sidebar.opened=false;
			}

},
// watch: {
//       "document.querySelector('.mainheight').offsetHeight": function(){ //加引号监听对象里的属性
//         this.selectMenu();
//         this.getHeight();
//       }



// 	}
	}	

</script>

<style>

  .mainnav_fixed{
    position:fixed;
    top:0px;
	}
	.mainnav_fixedtop{
		position:fixed;
    top:60px;
	}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    max-width: 220px;
		height: 100%;
		/* margin-top: 60px; */
  }
.el-menu-vertical-demo{
			height: 100%;
		/* margin-top: 60px; */
}
  h3{color: #ffffff; }
	.mnp-desc{
		font-size: 12px;
    color: #cac4c4;
		margin-left: 35px;} 
	.mnp-name{font-weight: bold;
	margin: -36px 0px -40px 55px;
	}
	.mnp-img{
		height:64px;width:64px;border-radius:55%;
		padding: 10px 70px 10px 70px;
	}
	.el-collapse-item__header{height: 148px;}
	.el-icon-arrow-right:before {
    content: "\E604";
		opacity: 0;
}
.coll-item{ 
    font-size: 14px;
		color: #4d627b;
		padding: 12px 26px;}
a{text-decoration: none;color: #4d627b;}
a:hover{color: #ffd04b;}
.iconfont{padding-right: 5px;}
.el-button.is-circle{margin-left: 10px;}
.el-button+.el-button {
    margin-top: 8px;
}
.nodispalybtns{display:block !important;}
.fixedheaderclass{position: fixed;z-index: 998;}
.asidemain{background:#fff;}
.el-menu{overflow-y: scroll;}
.el-menu::-webkit-scrollbar { width: 4px !important;background: transparent !important;}
.el-menu { -ms-overflow-style: none; }
.el-menu { overflow: -moz-scrollbars-none; }
</style>
