<template>
  <div  ref="app">
    <div class="component" v-if="laytypeBA">
      <vueheader></vueheader>
      <vuemain></vuemain>
    </div>
    <div class="component" v-if="laytypeAA">
      <vueheader></vueheader>
      <vuemain></vuemain>
      <vuefooter></vuefooter>
    </div>
    <div class="component" v-if="laytypeAAA"  :class="this.isopen_boxlayout">
      <el-container>
     <vueaside></vueaside> 
      <div style="width: 100%;height:100%;" :class="ismainleft">
        <vueheader></vueheader>
       <vuemain></vuemain>
       <vuefooter></vuefooter>
      </div>
      </el-container>
    </div>
    <div class="component" v-if="laytypeABB">
      <vueheader></vueheader>
      <el-container>
        <vueaside></vueaside>
        <vuemain></vuemain>
      </el-container>
    </div>
    <div class="component" v-if="laytypeAB">
      <!--<el-container>
        <vueaside></vueaside>
        <div style="width: 100%;">
          <vueheader></vueheader>
          <vuemain></vuemain>
        </div>
      </el-container>-->
      <vueheader></vueheader>
      <el-container>
        <vuemain></vuemain>
        <vueaside></vueaside>

      </el-container>
      <vuefooter></vuefooter>
    </div>
    <div class="component" v-if="laytypeAAB">
      <el-container>
        <vueaside></vueaside>
        <div style="width: 100%;">
          <vueheader></vueheader>
          <vuemain></vuemain>
          <vuefooter></vuefooter>
        </div>
      </el-container>
    </div>
    <!--<img src="./assets/logo.png">-->
    <div class="formatLayout">
      <settingdialog></settingdialog>
     <!--  <el-dialog
        title="版式布局"
        :visible.sync="formatLayoutVisible"
        :close-on-click-modal="false"
        :show-close="true"
        custom-class="dashDialog"
        size="small">
        <div class="content">
          <el-row>
            <el-col :span="20" :push="1">
              <div class="header bg-purple-dark">盒装布局&nbsp;&nbsp; <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="changelayout">
              </el-switch></div>
            </el-col>
          </el-row>
          <el-row :gutter="10" v-if="backgroundImg">
            <el-col :span="4"  v-for="(item,index) in layTable" :key="item.id">
              <div class="grid-content bg-purple-light animated wobble" @click="layBackground(item)">
                <img v-bind:src="item.src" />
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20" :push="1">
              <div class="header bg-purple-dark">版式切换&nbsp;&nbsp;</div>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4"  v-for="(item,index) in layout" :key="item.id">
              <div class="grid-content bg-purple-light animated wobble" @click="layView(item)">
                <img v-bind:src="item.src" />
              </div>
            </el-col>
          </el-row>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" size="small" @click="formatLayoutVisible = false">取 消</el-button>
        </span>
      </el-dialog> -->
    
    
    
    
    
    
    
    
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
      value:false,
      backgroundImg:false,
      formatLayoutVisible:false,
      laytypeBA:false,
      laytypeAA:false,
      laytypeAAA:true,
      laytypeABB:false,
      laytypeAB:false,
      laytypeAAB:false,
      layTable:[{id:1,src:require("./../../static/image/2.jpg"),laytype:"A"},
      {id:2,src:require("./../../static/image/3.jpg"),laytype:"B"},
        {id:3,src:require("./../../static/image/10.jpg"),laytype:"C"},
        {id:4,src:require("./../../static/image/13.jpg"),laytype:"D"},
        {id:5,src:require("./../../static/image/14.jpg"),laytype:"E"},
        {id:6,src:require("./../../static/image/7.jpg"),laytype:"F"}
      ],
      layout:[{id:1,src:require("./../../static/image/A12.png"),laytype:"AAB"},
        {id:2,src:require("./../../static/image/AA12.png"),laytype:"AB"},
        {id:3,src:require("./../../static/image/AAA2.png"),laytype:"AAA"},
        {id:4,src:require("./../../static/image/AB112.png"),laytype:"AA"},
        {id:5,src:require("./../../static/image/BA11.png"),laytype:"BA"},
        {id:6,src:require("./../../static/image/AB11.png"),laytype:"ABB"}
      ],
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
  
 },
  methods:{
   
    changelayout(){
      if (this.value==true) {
        this.$refs.app.style.width='88%';
        this.$refs.app.style.marginLeft="6%";
        this.$refs.app.style.marginRight="18%";
        this.$refs.app.style.marginTop="3%";
       this.backgroundImg=true;
        document.querySelector('body').setAttribute('style', 'background:#8c979b');
      }
      else{
        this.$refs.app.style.width='100%';
        this.$refs.app.style.marginLeft="0";
        this.$refs.app.style.marginRight="0";
        this.$refs.app.style.marginTop="0";
        this.backgroundImg=false;
      }
    },
    layBackground(item){/*选择layout*/
      document.querySelector('body').setAttribute('style', 'background-image:url(' + item.src +')');
      this.formatLayoutVisible = false;
    },
    layView(item){/*选择layout*/
      if(item.laytype=="BA"){
        this.laytypeBA=true;
        this.laytypeAA=false;
        this.laytypeAAA=false;
        this.laytypeABB=false;
        this.laytypeAB=false;
        this.laytypeAAB=false;
      }else if(item.laytype=="AA"){
        this.laytypeBA=false;
        this.laytypeAAA=false;
        this.laytypeABB=false;
        this.laytypeAB=false;
        this.laytypeAAB=false;
        this.laytypeAA=true;
      }else if(item.laytype=="AAA"){
        this.laytypeBA=false;
        this.laytypeAA=false;
        this.laytypeABB=false;
        this.laytypeAB=false;
        this.laytypeAAB=false;
        this.laytypeAAA=true;
      }else if(item.laytype=="AB"){
        this.laytypeBA=false;
        this.laytypeAA=false;
        this.laytypeABB=false;
        this.laytypeAAB=false;
        this.laytypeAB=true;
        this.laytypeAAA=false;
      }else if(item.laytype=="AAB"){
        this.laytypeBA=false;
        this.laytypeAA=false;
        this.laytypeAAA=false;
        this.laytypeAB=false;
        this.laytypeABB=false;
        this.laytypeAAB=true;
      }
      else if(item.laytype=="ABB"){
        this.laytypeBA=false;
        this.laytypeAA=false;
        this.laytypeAAA=false;
        this.laytypeAB=false;
        this.laytypeAAB=false;
        this.laytypeABB=true;
      }
      this.formatLayoutVisible = false;
    },
  
  }

}
</script>

<style  lang="less">
.el-container{
  min-height: 511px;
  height: auto;
  /*text-align: center;*/
}
  .btn{position: fixed;right: 10px; top: 50%; z-index: 999; font-size: 20px;}
  .el-button--info.is-plain {
    color: #fafafb;
    background: #25476a;
    border-color: #25476a;
}
 .open_boxlayout{
   width:88%;
   margin-left: 6%;
   margin-right:18%;
   margin-top:40px;
 }
 .mainleft{margin-left: 220px;}
 .mainleftlittle{margin-left: 65px;}
</style>
