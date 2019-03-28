<template>
<div>
  <div class="component" :class="this.isopen_boxlayout">
     <el-row>
        <vueheader :stateCollapse="!isCollapse"  :fixedHeaderLogowidthstate="isfixedHeaderLogowidth"></vueheader>
      <div style="float:left" :style="{width:ishiddensidebar}">
      <vueaside :stateCollapse="!isCollapse" :isProfilstate="isCollapse"></vueaside></div>
      <div style="" :class="ismainleft" :style="{marginLeft:ishiddensidebar}">
       <vuemain></vuemain>
       <vuefooter></vuefooter>
      </div>
      </el-row>
    </div>
    <div class="formatLayout">
      <settingdialog></settingdialog>
    </div>
  <!-- <div class="component" :class="this.isopen_boxlayout">
     <el-row>
      <div style="float:left" :style="{width:ishiddensidebar2}">
      <vueaside :stateCollapse="!isCollapse" :isProfilstate="isCollapse"></vueaside></div>
      <div style="" :class="ismainleft" :style="{marginLeft:ishiddensidebar2}">
         <vueheader :stateCollapse="!isCollapse"  :fixedHeaderLogowidthstate="isfixedHeaderLogowidth"></vueheader>
       <vuemain></vuemain>
       <vuefooter></vuefooter>
      </div>
      </el-row>
    </div> -->
  
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
  components:{
    vueheader,
    vuefooter,
    vuemain,
    vueaside,
    settingdialog
  },
 props:{},
 data(){
  return {
  }
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
     isfixedHeaderLogowidth(){
      return this.boxlay.fixedHeaderLogowidth
    },
     ishiddensidebar(){
      return this.sidebar.hiddensidebar
    },
     ishiddensidebar2(){
      return this.sidebar.hiddensidebar2
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    //  isProfil() {
    //   return this.sidebar.Profil
		// },
 },
 methods:{
   getLink(){
     if(this.$route.name==='Dashboard2'){
      //  this.sidebar.opened=false;
       var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.id='theme';
        link.href = 'static/css/theme-aside/submenu-theme-navy.css?v=1.0';
        var themeCSS = document.querySelector('#theme');
        if (themeCSS.href!=='') {
          themeCSS.href='static/css/theme-aside/submenu-theme-navy.css?v=1.0';
      } else {
          document.getElementsByTagName("head")[0].appendChild(link);
       }
     }
   }
 },
 created(){
   this.getLink();
 },
 mounted(){
   
 }
}
</script>
<style scoped>
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
 resize_boxlayout{margin-top:0px;}
 .mainleft{margin-left: 220px;}
 .mainleftlittle{margin-left: 65px;}
 .boxlayout{width:100%;height:40px;position:fixed;top:0px;background:#8c979b;z-index: 998;}
</style>