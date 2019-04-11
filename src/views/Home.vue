<template>
  <div  ref="app1">
    <div class="component" :class="this.isopen_boxlayout">
     <el-row>
      <vueheader :stateCollapse="isCollapse" :fixedHeaderLogowidthstate="isfixedHeaderLogowidth" :toggleSideBarvoid="toggleSideBar" :sidebaropened="sidebar.opened"></vueheader>
      <div style="float:left" :style="{width:ishiddensidebar}" class="main">
     <vueaside :stateCollapse="isCollapse" :isProfilstate="isProfil"></vueaside></div>
      <div class="main" :class="ismainleft" :style="{marginLeft:ishiddensidebar}">
       <vuemain></vuemain>
       <vuefooter></vuefooter>
      </div>
      </el-row>
    </div>
    <div class="formatLayout">
      <settingdialog :isSidebar="false"></settingdialog>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
  import vueheader from "@/views/layout/header.vue";
  import vuefooter from "@/views/layout/footer.vue";
  import vuemain from "@/views/layout/AppMain.vue";
  import vueaside from "@/views/layout/aside.vue";
  import settingdialog from "@/components/dialog/setting-dialog.vue";
export default {
  name: 'App',
   components:{
    vueheader,
    vuefooter,
    vuemain,
    vueaside,
    settingdialog
  },
  data(){
    return{
    }
  },
  methods:{
     	toggleSideBar() {
				this.$store.dispatch('toggleSideBar')
			},
  
  },

   computed:{
   ...mapGetters(['boxlay','asideSetting','sidebar']),
   isopen_boxlayout(){
     return this.boxlay.open_boxlayout
   },
   ismainleft(){
      return this.sidebar.mainLeft
   },
   isfixedHeader(){
     return this.boxlay.fixedHeader
    },
     ishiddensidebar(){
      return this.sidebar.hiddensidebar
    },
    isfixedHeaderLogowidth(){
      return this.boxlay.fixedHeaderLogowidth
    },
    isCollapse() {
      return !this.sidebar.opened
    },
     isProfil() {
      return this.sidebar.Profil
		},
 },
}
</script>

<style  lang="less">

 .open_boxlayout{
   width:88%;
   margin-left: 6%;
   margin-right:18%;
   margin-top:40px;
 }
 .close_boxlayout{
    width:88%;
   margin-left: 6%;
   margin-right:18%;
   margin-top:0px;
   }
 .resize_boxlayout{margin-top:0px;}
 .mainleft{margin-left: 220px;}
 .mainleftlittle{margin-left: 65px;}
 .boxlayout{width:100%;height:40px;position:fixed;top:0px;background:#8c979b;z-index: 998;}
 @media screen and (max-width:768px){
   .main{
			margin-left: 0px !important;
				
    }
}
</style>
