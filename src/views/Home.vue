<template>
  <div  ref="app">
    <div class="component" :class="this.isopen_boxlayout">
     <el-row>
      <div style="float:left" :style="{width:ishiddensidebar}">
     <vueaside :stateCollapse="isCollapse" :isProfilstate="isProfil"></vueaside></div>
      <div style="" :class="ismainleft" :style="{marginLeft:ishiddensidebar}">
        <vueheader :stateCollapse="isCollapse" :fixedHeaderLogowidthstate="isfixedHeaderLogowidth"></vueheader>
       <vuemain></vuemain>
       <vuefooter></vuefooter>
      </div>
      </el-row>
    </div>
    <div class="formatLayout">
      <settingdialog></settingdialog>
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
     isProfil() {
      return this.sidebar.Profil
		},
 },
  methods:{
   
  
  }

}
</script>

<style  lang="less">
.el-container{
  min-height: 511px;
  height: auto;
  display: -ms-flexbox;
  ms-flex-direction: row;
  ms-flex: 1;
  -ms-flex-preferred-size: auto;
  *zoom:1;
  clear:both;
  /*text-align: center;*/
}
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
</style>
