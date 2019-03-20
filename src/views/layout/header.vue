<template>
    <!--头部-->
		<div>
	<el-header :class="[isalltheme,isHeadertheme,isfixedHeaderClass]">
    <el-row style="height: 60px !important;">
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" style="height: 60px !important;">
        <nxhamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></nxhamburger>
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
				 <!-- <el-dropdown trigger="click" :hide-on-click="false">
					<span class="el-dropdown-link userinfo-inner"><i class="iconfont icon-icon_more"></i></span>
					<el-dropdown-menu slot="dropdown" :class="isVisibleClass" v-if="isVisible">
						<el-dropdown-item>
						 
						</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item> 
					</el-dropdown-menu>
		    </el-dropdown> -->
				<el-tabs v-model="activeName" class="tabclass" :class="isVisibleClass">
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
      </el-col>
    </el-row>
	</el-header>
	
	</div>
</template>

<script>
  
  import {mapGetters,mapActions} from 'vuex'
	import theme from '../.././components/HelloWorld'
	import nxhamburger from '@/components/nx-hamburger'
	export default{
		data(){
			return{
				sysUserName: 'admin',
				sysUserAvatar: '',
				 activeName: 'first',
				 yOrNvisible:false
			}
		},
		computed:{
      ...mapGetters(['boxlay','sidebar','colorSetting','isAside']),
    isCollapse() {
      return !this.sidebar.opened
		},
		 isalltheme(){
      return this.colorSetting.alltheme
		},
		 isHeadertheme(){
      return this.colorSetting.headertheme
		},
		isfixedHeaderClass(){
       return this.boxlay.fixedHeaderClass
		},
			isVisible(){
       return this.isAside.Visible
		},
		isVisibleClass(){
       return this.isAside.isVisibleClass
		},
	
		},
		mounted(){
			 if(this.yOrNvisible===false){
            this.isAside.isVisibleClass='noneVisible'
          }else{
            this.isAside.isVisibleClass='Visibleclass'
          }
		},
		methods:{
		...mapActions([
			// 'menu_toggle',
			// 'changeColor'
			'changeAsideVisible'
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
			}
		},
	    components:{
	      nxhamburger
	    }

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
 .fixedheaderclass{position: fixed;z-index: 998;}
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
.el-dropdown-menu__item:hover{background:transparent;}
.Visibleclass{width:255px;background: #fff; position: absolute; top: 60px; right:-20px; transform-origin: center top 0px; z-index: 998; display: block;color: #000;text-align: left;padding-left: 15px;}
.noneVisible{width:300px;background: #fff;left: 110%;transform-origin: center top 0px; z-index: 2001; display: none;}
.item{float:right;padding-right: 10px;padding-top: 4.5px;}
.tabimg{width:32px;height:32px;border-radius:50%;}
.tabtext{color: #4d627b;font-weight: 700;font-size: .9em;}
.tabtext-lg{font-size: .9em;}

ul li{list-style: none;}

</style>
