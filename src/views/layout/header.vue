<template>
    <!--头部-->
	<div style="width:100%;height:100%">
	<el-header :class="[isalltheme,isHeadertheme,isfixedHeaderClass]">
		<div :style="{width:fixedHeaderLogowidthstate}" style="float: left;" v-if="isfixedHeader" >
			<el-col :sm="24" :md="24" :lg="24" :xl="24" class="hidden-xs-only" >
			 <el-row style="height: 60px !important;background-color:#25476a;" class="logtheme">
      <el-col  :sm="7" :md="7" :lg="7" :xl="7" class="hidden-xs-only" style="height: 60px !important;">
		    <router-link to="/Dashboard1" style="text-decoration: none"><img src="../../assets/jerry-1.jpg" style="height: 35px; width: 35px;border-radius: 50%;padding-top: 13px; padding-left: 20px;" /></router-link>
      </el-col>
      <el-col  :md="16" :lg="16" :xl="16" class="hidden-xs-only hidden-sm-only" style="height: 60px !important; line-height:60px;padding-left:15px" v-if="!stateCollapse">
        <router-link to="/Dashboard1"><h3>Goodidea</h3></router-link>
      </el-col>
			 </el-row>
		</el-col>
		</div>
		<!-- 固定头部时出现布局混乱，固重写代码 -->
		<div v-if="isfixedHeader" :class="isfixedHeaderwidth" >
    <nxhamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened" style="width:5%;float:left;margin-left:15px;"></nxhamburger>
		<input class="search"  placeholder="Type for search..." style="width:15%;float:left;margin-top: 12px;"/>
		<div class="icon" style="width:60%;float:right;text-align:right;">
		 <i class="iconfont icon-icon_work"></i>
				<i class="iconfont icon-icon_notice"></i><el-badge is-dot style="top:-7px;"> </el-badge>
				 
        <el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><i class="iconfont icon-icon_boss"></i></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
		    </el-dropdown>
				<i class="iconfont icon-icon_more" @click="changeVisible"></i>
				</div>
		</div>
		<!--  -->
    <el-row style="height: 60px !important;" :class="isfixedHeaderwidth"  v-if="!isfixedHeader">
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" style="height: 60px !important;">
        <nxhamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened" ></nxhamburger>
      </el-col>
			<el-col  :sm="5" :md="5" :lg="5" :xl="5" class="hidden-xs-only" style="height: 60px !important;">
        <input class="search"
          placeholder="Type for search..."
          />
      </el-col>
      <el-col :xs="3" :sm="10" :md="9" :lg="10" :xl="10" style="height: 60px !important;" ></el-col>
  
			 <el-col :xs="20" :sm="8" :md="9" :lg="8" :xl="8" class="icon-set" style="height: 60px !important;">
				 <i class="iconfont icon-icon_work"></i>
				<i class="iconfont icon-icon_notice"></i><el-badge is-dot style="top:-7px;"> </el-badge>
				 
        <el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><i class="iconfont icon-icon_boss"></i></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
		    </el-dropdown>
				<i class="iconfont icon-icon_more" @click="changeVisible"></i>
      </el-col>
    </el-row>

	
	</el-header>
	<el-tabs v-model="activeName" id="tabs" class="tabclass" :class="[isVisibleClass,asidePanFixed == true ? isasideFixedclass :'']" :style="{height:getheight+ 'px',left:isleftSideLeft,right:isasideright}">
							<el-tab-pane  name="first">
								<span slot="label"><i class="el-icon-sold-out" style="font-size:20px;"></i></span>
								<ul>
									<li><span class="tabtext">FAMILY</span><el-badge :value="3" class="item" type="warning"></el-badge></li>
								  <li v-for="(item,index) in 10" :key="index">
										<el-row>
										<el-col :span="4"><img :src="'static/profile-photos/'+item+'.png'" class="tabimg"/></el-col>
									  <el-col :span="20"><span class="tabtext-lg">StephenTran</span><span class="tabtext-xs">&nbsp;&nbsp;Availabe</span></el-col>
									</el-row>
									</li>
									<li><span class="tabtext">FRIENDS</span><el-badge :value="6" class="item" type="info"></el-badge></li>

								</ul>

								</el-tab-pane>
							<el-tab-pane  name="second">
								<span slot="label"><i class="el-icon-time" style="font-size:20px;"></i>&nbsp;Report </span>
								配置管理</el-tab-pane>
							<el-tab-pane  name="third">
								<span slot="label"><i class="el-icon-news" style="font-size:20px;"></i>&nbsp;Setting </span>
								角色管理</el-tab-pane>
						</el-tabs>
	</div>
</template>

<script>
  
  import {mapGetters,mapActions} from 'vuex'
	import theme from '../.././components/HelloWorld'
	import nxhamburger from '@/components/nx-hamburger'
	export default{
			props: ['stateCollapse','fixedHeaderLogowidthstate'],
		data(){
			return{
				sysUserName: 'admin',
				sysUserAvatar: '',
				 activeName: 'first',
				 yOrNvisible:false,
				 getheight:'',
				 asidePanFixed:false,
			}
		},
		 
		computed:{
			...mapGetters(['boxlay','sidebar','colorSetting','isAside']),
			boxLayout(){
        return this.boxlay.boxLayout
    },
    isCollapse() {
      return !this.sidebar.opened
		},
		 isalltheme(){
      return this.colorSetting.alltheme
		},
		 isHeadertheme(){
      return this.colorSetting.headertheme
		},
		isFixed(){
      return this.sidebar.isFixed
    },
		 isfixedHeader(){
     return this.boxlay.fixedHeader
    },
		isfixedHeaderClass(){
       return this.boxlay.fixedHeaderClass
		},
		isfixedHeaderwidth(){
      return this.boxlay.fixedHeaderwidth
		},
		 isfixedHeaderLogowidth(){
      return this.boxlay.fixedHeaderLogowidth
    },
			isVisible(){
       return this.isAside.Visible
		},
		isVisibleClass(){
       return this.isAside.isVisibleClass
		},
		isleftSide(){
			return this.sidebar.leftSide
		},
		isleftSideLeft(){
       return 
		},
		isasideFixedclass(){
			return this.isAside.asideFixedClass
		},
	 isasidefixed(){
       return this.isAside.asideFixed
		},
		 isasideright(){
      return this.isAside.asideRight
    }
		},
		mounted(){
			 if(this.yOrNvisible===false){
            this.isAside.isVisibleClass='noneVisible'
          }else{
            this.isAside.isVisibleClass='Visibleclass'
					}
					this.getHeight();
					//给window添加一个滚动滚动监听事件
	  	window.addEventListener('scroll', this.handleScroll,true)
		},
		methods:{
		...mapActions([
			// 'menu_toggle',
			// 'changeColor'
			'changeAsideVisible',
			
		]),
		//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
//					sessionStorage.removeItem('user');
					_this.$router.push('/');
				}).catch(() => {

				});


			},
			toggleSideBar() {
				this.$store.dispatch('toggleSideBar')
			},
			changeVisible(){
				 this.yOrNvisible=!this.yOrNvisible;
          if(this.yOrNvisible===false){
            this.isAside.isVisibleClass='noneVisible'
          }else{
            this.isAside.isVisibleClass='Visibleclass'
          }
			},
				getHeight(){
					setTimeout(()=>{
					 this.getheight=document.querySelector('.mainheight').offsetHeight;
						return this.getheight
						},2000)
			},
				handleScroll () {
					//获取滚动条距离浏览器顶部的距离
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
					//获取元素距离浏览器顶部的距离
				let offsetTop = document.querySelector('#tabs').offsetTop
				if(this.isAside.asideFixed===true){
					 scrollTop > offsetTop ? this.asidePanFixed = true : this.asidePanFixed = false
					 	this.isAside.asideFixedClass='asdfixedClass';
					if(this.boxlay.fixedHeader===true){
						this.isAside.asideFixedClass='asideFixedClasstop';
					}
					 if(this.sidebar.isFixed===true){
							this.isAside.asideFixedClass='asdfixedClass';
							}
						if(this.boxlay.fixedHeader===true && this.sidebar.isFixed===true){
						this.isAside.asideFixedClass='asideFixedClasstop';
					}
					if(this.sidebar.isFixed===true &&this.boxlay.fixedHeader===false){
							this.isAside.asideFixedClass='asdfixedClass'
						}
					
				 }
				 if(this.boxlay.fixedHeader===true && this.boxlay.boxLayout===true){
					 scrollTop > offsetTop ? this.asidePanFixed = true : this.asidePanFixed = false
				 	if(this.asidePanFixed === true){
					    this.boxlay.open_boxlayout="close_boxlayout";
						}
						if(this.asidePanFixed === false){
						this.boxlay.open_boxlayout="open_boxlayout";
						}
				 }
				
			},
			
		},
	    components:{
	      nxhamburger
			},
			// watch: {
      // isCollapse(){
			// 	this.changeLeft();
			// }
      // }
	}
	
</script>

<style lang="less" scoped>
  .el-header {
    background-color:#25476a;
    color: #fff;
    text-align: left;
    line-height: 60px;
    width: 100%;
    }
  a{text-decoration: none;}
  
.el-row{height: 60px !important;}
.el-dropdown-link{
  color: #fff;font-size: 16px}
  .userinfo-inner {
					cursor: pointer;
					color:#fff;
				
				}
.userinfo-inner	img {
			width: 40px;
			height: 40px;
			border-radius: 20px;
			margin: 10px 0px 10px 10px;
			float: right;
		}
		
	.iconfont{
		padding-left: 1rem;
    font-size: 1.1rem;}
	.iconfont:hover{color:lightgrey;}
	.search{background: transparent; border: hidden;color:white;height: 30px;width: 100%;}
 .icon-set{text-align: right;}
 .logtheme{margin-left: -20px;}
 .fixedheaderclass{position: fixed;z-index: 998;left:0px}
 .fixedheaderclassbox{position: fixed;z-index: 998;left: 6%;width: 88%;}
 .fixedheaderwidth,.fixedHeaderwidthopen{overflow: hidden;}
 .fixedHeaderwidthclose{overflow: hidden;}
.demo-theme-gray{
    background: #8f9ea6;
}
.demo-theme-coffee{
    background: #807362;
}
.demo-theme-dark{
    background: #3a444e;
}
.demo-theme-dust{
    background: #fd8943 ;
}
.demo-theme-lime{
    background: #80b343;
}
.demo-theme-mint{
    background: #26a69a ;
}
.demo-theme-navy{
    background: #294d73;
}
.demo-theme-ocean{
    background: #177bbb;
}
.demo-theme-prickly_pear{
    background: #ad5468;
}
.demo-theme-purple{
    background: #8b5b9f !important;
}
.demo-theme-well_red{
    background: #d23e3e !important;
}
.demo-theme-yellow{
    background: #efd45a !important;
}
@media screen and (max-width:800px){
   .el-tabs{
				display: none;
				
    }
}
.el-dropdown-menu__item:hover{background:transparent;}
.Visibleclass{width:255px;background: #fff; position: absolute; top: 60px;right:0px; transform: none !important; z-index: 997; display: block;color: #000;text-align: left;padding-left: 15px;}
.noneVisible{width:255px;background: #fff;left: 110%;transform: none !important; z-index: 2001; display: none;}
.item{float:right;padding-right: 10px;padding-top: 4.5px;}
.tabimg{width:32px;height:32px;border-radius:50%;}
.tabtext{color: #4d627b;font-weight: 700;font-size: .9em;}
.tabtext-lg{font-size: .9em;}

ul li{list-style: none;}
.asdfixedClass{position: fixed;top:0px;}
.asideFixedClasstop{position: fixed;top:60px;}
</style>
