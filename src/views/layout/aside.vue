<template>
<!--侧边栏-->
<div class="searchBar" id="searchBar">
<el-row class="asideset" :class="searchBarFixed == true ? 'mainnav_fixed' :''">
	<el-col :sm="24" :md="24" :lg="24" :xl="24" class="hidden-xs-only">
		<el-col :sm="24" :md="24" :lg="24" :xl="24" class="hidden-xs-only" :class="isfixedHeaderClass">
			 <el-row style="height: 60px !important;background-color:#25476a;" class="logtheme">
      <el-col  :sm="7" :md="7" :lg="7" :xl="7" class="hidden-xs-only" style="height: 60px !important;">
		    <router-link to="/Dashboard1" style="text-decoration: none"><img src="../../assets/jerry-1.jpg" style="height: 35px; width: 35px;border-radius: 50%;padding-top: 13px; padding-left: 20px;" /></router-link>
      </el-col>
      <el-col  :md="16" :lg="16" :xl="16" class="hidden-xs-only hidden-sm-only" style="height: 60px !important; line-height:60px;padding-left:15px" v-if="!isCollapse" :class="isfixedHeaderClass">
        <router-link to="/Dashboard1"><h3>Goodidea</h3></router-link>
      </el-col>
			 </el-row>
		</el-col>
		<div class="asidemain" :style="{height:getheight+ 'px'}">
<el-menu :default-active="activeIndex" class="el-menu-vertical-demo"  :active-text-color="iscolortext"  :collapse="isCollapse" @select="selectMenu" router>
  <el-collapse v-if="isProfil" >
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
		<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
			<el-submenu :index="index+''" v-if="!item.leaf">
				<template slot="title"><i :class="item.iconCls"></i><span>{{item.name}}</span></template>
				<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden" >{{child.name}}</el-menu-item>
			</el-submenu>
    <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls" style="margin-left: -5px;"></i>&nbsp;&nbsp;&nbsp;{{item.children[0].name}}</el-menu-item>
</template>
		
</el-menu>
</div>
	</el-col>
</el-row>
</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default{
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
		isalltheme(){
      return this.colorSetting.alltheme
		},
		 iscolortext(){
      return this.colorSetting.colortext
		},
			isfixedHeaderClass(){
       return this.boxlay.fixedHeaderClass
    },
		},
		mounted () {
			//给window添加一个滚动滚动监听事件
	  	window.addEventListener('scroll', this.handleScroll,true)
			this.getHeight();
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
					document.querySelector('.tabclass').style.height=document.querySelector('.mainheight').offsetHeight+'px'; 

				  return this.getheight
				},2000)
				 
			},
			getHeight(){
					setTimeout(()=>{
					 this.getheight=document.querySelector('.mainheight').offsetHeight+35;
				 return this.getheight
				},2000)
			},
		
			handleScroll () {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				let offsetTop = document.querySelector('#searchBar').offsetTop
				if(this.sidebar.isFixed===true){
					 scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
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
    top:0;
    
	}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    max-width: 220px;
		height: 100%;
		margin-top: 60px;
  }
.el-menu-vertical-demo{
			height: 100%;
		margin-top: 60px;
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
</style>
