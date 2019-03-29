<template>
 <div  ref="app3">
    <div class="component" :class="this.isopen_boxlayout">
     <el-row>
      <vueheader :stateCollapse="false" :fixedHeaderLogowidthstate="isfixedHeaderLogowidth" :toggleSideBarvoid="toggleSideBar3" :sidebaropened="true"></vueheader>
      <div style="float:left" :style="{width:ishiddensidebar,marginLeft:ismarginleftHome3sidebar}" class="main">
     <vueaside :stateCollapse="false" :isProfilstate="isProfil"></vueaside></div>
      <div class="main" :class="ismainleft" :style="{marginLeft:ismarginleftHome3main}">
       <vuemain></vuemain>
       <vuefooter></vuefooter>
      </div>
      </el-row>
    </div>
    <div class="formatLayout">
      <settingdialog :isSidebar="true"></settingdialog>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
  import vueheader from "@/views/layout/header.vue";
  import vuefooter from "@/views/layout/footer.vue";
  import vuemain from "@/views/component/main_Home3.vue";
  import vueaside from "@/views/layout/aside.vue";
  import settingdialog from "@/components/dialog/setting-dialog.vue";
export default {
  name: 'App',
  data(){
    return{
    }
  },
  components:{
    vueheader,
    vuefooter,
    vuemain,
    vueaside,
    settingdialog
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
     isCollapse3() {
      return !this.sidebar.opened3
    },
     isProfil() {
      return this.sidebar.Profil
        },
    ismarginleftHome3main(){
            return this.sidebar.marginleftHome3main
    },
    ismarginleftHome3sidebar(){
            return this.sidebar.marginleftHome3sidebar
    }
 },
  methods:{
   	toggleSideBar3() {
				this.$store.dispatch('toggleSideBar3')
			},
  
  }

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