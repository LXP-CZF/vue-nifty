<template>
  <el-row style="z-index:999;">
    <el-col>
      <div class="main" >
        <div class="mark" v-if="markshow"></div>
        <el-button
          size="small"
          :plain="true"
          ref="appbtn"
          type="info"
          class="btn"
          id="btn"
          :style="{'right':rightoff}"
          @click="formatLayout"
        >
          <i class="el-icon-setting"></i>
        </el-button>
        <el-card class="box-card" :style="{'right':rightoffset}" id="box_card">
          <div slot="header" class="clearfix">
            <span class="text-title">COSTOMIZE</span>
            <br>
            <span class="text-xs">自定义Nifty的布局，侧边栏和配色方案。</span>
            <el-button
              style="float: right;font-size: 25px; margin-top:-30px"
              type="text"
              icon="el-icon-circle-close-outline"
              @click="formatLayout"
            ></el-button>
          </div>
          <el-row :gutter="40">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <p class="text-lg">布局</p>
                <p class="text-xs mar-btm">盒装布局</p>
                <hr>
                <div class="text-div mar-btm">
                  <span>盒装布局</span>
                  <el-switch
                    v-model="isboxLayout"
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    @change="changeBoxLayout"
                  ></el-switch>
                </div>
                <div class="text-div mar-btm">
                  <span>
                    背景图片
                    <i class="el-icon-info"></i>
                  </span>
                  <el-switch
                    v-model="backgroundImg"
                    :disabled="dis"
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    @change="changeBackgroundImg"
                  ></el-switch>
                </div>
                <p class="text-xs mar-btmm">标题/导航栏</p>
                <hr>
                <div class="text-div mar-btm">
                  <span>固定位置</span>
                  <el-switch
                    v-model="fixedHeader"
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    @change="changeFiexedHeader"
                  ></el-switch>
                </div>
                <p class="text-xs mar-btmm">页脚</p>
                <hr>
                <div class="text-div mar-btm">
                  <span>固定位置</span>
                  <el-switch
                    v-model="isfooterFixed"
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    @change="changeFooterFixed"
                  ></el-switch>
                </div>
              </div>
            </el-col>

            <el-col :span="6" style="background:#f8f9fa;" v-if="!this.isbgasidecolor">
              <div
                style="height:20px;width:117%;margin-top:-20px;margin-left: -20px;background:#f8f9fa;"
              ></div>
              <div class="grid-content bg-purple">
                <p class="text-lg">侧边栏</p>
                <p class="text-xs mar-btm">导航</p>
                <hr>
                <div class="text-div mar-btm">
                  <span>固定位置</span>
                  <el-switch
                    v-model="isfixed"
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    @change="changenavFixed"
                  ></el-switch>
                </div>
                <div class="text-div mar-btm">
                  <span>Widget Profil</span>
                  <el-switch
                    v-model="isProfil"
                    :disabled="isoffProfil"
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    @change="changeProfil"
                  ></el-switch>
                </div>
                <div class="text-div mar-btm">
                  <span>快捷按钮</span>
                  <el-switch
                    v-model="isopenbtns"
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    @change="changeBtns"
                  ></el-switch>
                </div>
                <div class="text-div mar-btm">
                  <span>折叠模式</span>
                  <el-switch
                    v-model="isCollapse"
                    :disabled="isSidebar"
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    @change="toggleSideBar"
                  ></el-switch>
                </div>
                <!-- <div class="text-div mar-btm">
                    <span>离帆布</span>
                    <el-switch
                      active-color="#8bc34a"
                      inactive-color="#afafaf"
                      active-value="100"
                      inactive-value="0"
                      >
                    </el-switch>
                </div>-->
                <p class="text-xs mar-btmm">Aside</p>
                <hr>
                <div class="text-div mar-btm">
                  <span>可见</span>
                  <el-switch
                    v-model="isAsideVisible"
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    @change="changeAsideVisible"
                  ></el-switch>
                </div>
                <div class="text-div mar-btm">
                  <span>固定位置</span>
                  <el-switch
                    v-model="isasideFixed"
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    @change="changeAsideFixed"
                  ></el-switch>
                </div>
                <div class="text-div mar-btm">
                  <span>漂浮的</span>
                  <el-switch
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    active-value="100"
                    inactive-value="0"
                  ></el-switch>
                </div>
                <div class="text-div mar-btm">
                  <span>左边</span>
                  <el-switch
                    v-model="isleftSide"
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    @change="changeAsideLeft"
                  ></el-switch>
                </div>
                <div class="text-div mar-btm">
                  <span>黑暗版</span>
                  <el-switch
                    v-model="isdarkVersion"
                    active-color="#8bc34a"
                    inactive-color="#afafaf"
                    @change="changeAsideColor"
                  ></el-switch>
                </div>
              </div>
            </el-col>
            <el-col :span="12" v-if="!this.isbgasidecolor">
              <div class="grid-content bg-purple">
                <p class="text-lg" style="margin-top:-20px;margin-bottom:10px">配色方案</p>
                <hr>
                <el-row :gutter="30">
                  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-row>
                      <el-col :xs="8" :sm="8" :md="5" :lg="4" :xl="4">
                        <router-link to @click.native="changeThemeLight">
                          <div class="demo-single-theme theme-light" id="light"></div>
                        </router-link>
                      </el-col>
                      <el-col :xs="16" :sm="16" :md="7" :lg="8" :xl="8" class="theme-text">
                        <p class="text-lg">光</p>
                        <span class="text-xs">完全轻盈的主题</span>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-row>
                      <el-col :xs="8" :sm="8" :md="5" :lg="4" :xl="4">
                        <router-link to @click.native="changeThemeDark">
                          <div class="demo-single-theme theme-dark" id="dark"></div>
                        </router-link>
                      </el-col>
                      <el-col :xs="16" :sm="16" :md="7" :lg="8" :xl="8" class="theme-text">
                        <p class="text-lg">黑暗</p>
                        <span class="text-xs">完全黑暗的主题</span>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="monder">
                  <el-col :span="24" class="monder-title">
                    <span class="text-xs">现代</span>
                  </el-col>
                  <el-row :gutter="10">
                    <el-col :xs="13" :sm="13" :md="7" :lg="7" :xl="7">
                      <img src="../../assets/color-schemes-e.png">
                    </el-col>
                    <el-col :xs="11" :sm="11" :md="4" :lg="4" :xl="4">
                      <p class="text-lg">新方案模式</p>
                      <span class="text-xs">在v2.9中添加</span>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                      <div class="demo-justify-theme">
                        <router-link
                          to
                          v-for="(itemcolor,index) in colorList"
                          :key="index"
                          class="demo-theme"
                          :class="color+itemcolor"
                          :id="itemcolor+'all'"
                          @click.native="changeThemeColors(itemcolor,all)"
                        ></router-link>
                      </div>
                    </el-col>
                  </el-row>
                </el-row>
                <el-row :gutter="30">
                  <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="schemes">
                    <p class="text-xs demo-text">头</p>
                    <img src="../../assets/color-schemes-a.png" class="img-theme">
                    <div class="demo-diversify-theme">
                      <router-link
                        to
                        v-for="(itemcolor,index) in colorList"
                        tag="div"
                        :key="index"
                        class="demo-theme-make"
                        :class="[color+itemcolor]"
                        :id="itemcolor+'header'"
                        @click.native="changeThemeColors(itemcolor,header)"
                      ></router-link>
                    </div>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="schemes">
                    <p class="text-xs demo-text">logo</p>
                    <img src="../../assets/color-schemes-b.png" class="img-theme">
                    <div class="demo-diversify-theme">
                      <router-link
                        to
                        v-for="(itemcolor,index) in colorList"
                        :key="index"
                        class="demo-theme-make"
                        :id="itemcolor+'logo'"
                        :class="[color+itemcolor,{'isactive':itemcolor.isactive}]"
                        @click.native="changeThemeColors(itemcolor,logo)"
                      ></router-link>
                    </div>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="schemes">
                    <p class="text-xs demo-text">侧边导航栏</p>
                    <img src="../../assets/color-schemes-c.png" class="img-theme">
                    <div class="demo-diversify-theme">
                      <router-link
                        to
                        v-for="(itemcolor,index) in colorList"
                        :key="index"
                        class="demo-theme-make"
                        :class="color+itemcolor"
                        :id="itemcolor"
                        @click.native="changeAsideColors(itemcolor)"
                      ></router-link>
                    </div>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="schemes">
                    <p class="text-xs demo-text">全顶栏</p>
                    <img src="../../assets/color-schemes-d.png" class="img-theme">
                    <div class="demo-diversify-theme">
                      <router-link
                        to
                        v-for="(itemcolor,index) in colorList"
                        :key="index"
                        class="demo-theme-make"
                        :class="[color+itemcolor]"
                        :id="itemcolor+'fulltop'"
                        @click.native="changeThemeColors(itemcolor,fulltop)"
                      ></router-link>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="18" v-if="this.isbgasidecolor" class="bag-big">
              <el-row>
                <el-col :span="24" class="bag-div"></el-col>
                <el-col :span="24" class="bag">
                  <p class="text-lg">背景图片</p>
                  <span class="text-xs">添加图像以替换纯色背景</span>
                </el-col>
              </el-row>
              <el-row :gutter="40">
                <el-col :span="8">
                  <p class="text-lg">模糊</p>
                  <div id="demo-blurred-bg" class="text-justify">
                    <router-link
                      to
                      ref="blurredbg"
                      class="thumbnail box-inline"
                      v-for="(item,index) in 16"
                      :key="index"
                      :id="'blu'+item"
                      @click.native="changeboxedBg(item,blurred,blu)"
                    >
                      <img
                        class="img-responsive"
                        :src="'static/boxed-bg/blurred/thumbs/'+item+'.jpg?v=1.0'"
                        alt="Background Image"
                      >
                    </router-link>
                  </div>
                </el-col>
                <el-col :span="8">
                  <p class="text-lg">多边形和几何</p>
                  <div id="demo-blurred-bg" class="text-justify">
                    <router-link
                      to
                      class="thumbnail box-inline"
                      v-for="(item,index) in 16"
                      :key="index"
                      :id="'pol'+item"
                      @click.native="changeboxedBg(item,polygon,pol)"
                    >
                      <img
                        class="img-responsive"
                        :src="'static/boxed-bg/polygon/thumbs/'+item+'.jpg?v=1.0'"
                        alt="Background Image"
                      >
                    </router-link>
                  </div>
                </el-col>
                <el-col :span="8">
                  <p class="text-lg">抽象</p>
                  <div id="demo-blurred-bg" class="text-justify">
                    <router-link
                      to
                      class="thumbnail box-inline"
                      v-for="(item,index) in 16"
                      :key="index"
                      :id="'abs'+item"
                      @click.native="changeboxedBg(item,abstract,abs)"
                    >
                      <img
                        class="img-responsive"
                        :src="'static/boxed-bg/abstract/thumbs/'+item+'.jpg?v=1.0'"
                        alt="Background Image"
                      >
                    </router-link>
                  </div>
                </el-col>
              </el-row>
              <hr>
              <el-button size="small" type="info" class="btnclose" @click="btnChangeBackgroundImg">关</el-button>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props:['isSidebar'],
  data() {
    return {
      formatLayoutVisible: false,//面板是否打开
      rightoff: "", //setting按钮的右边距
      rightoffset: "", //setting面板的右边距
      show: false, //控制面板显示
      markshow: false, //控制遮罩层显示
      isactive: false,
      colorList: {
        gray: "gray",
        navy: "navy",
        ocean: "ocean",
        lime: "lime",
        purple: "purple",
        dust: "dust",
        mint: "mint",
        yellow: "yellow",
        well_red: "well_red",
        coffee: "coffee",
        prickly_pear: "prickly_pear",
        dark: "dark"
      }, //颜色列表
      color: "demo-theme-",
      blurred: "static/boxed-bg/blurred/bg/",
      polygon: "static/boxed-bg/polygon/bg/",
      abstract: "static/boxed-bg/abstract/bg/",
      blu: "blu",
      pol: "pol",
      abs: "abs",
      all: "all", //存放更改的头部，侧边栏，主体的css
      header: "header", //存放更改的头部
      fulltop: "fulltop", //存放更改的头部、logo
      logo: "logo", //存放更改的logo的css
      aside: "aside", //存放更改的aside的css
      backgroundImg: this.$store.getters.boxlay.backgroundImg, //背景图片面板显示
      isboxLayout: this.$store.getters.boxlay.boxLayout, //控制body是否盒装布局
      fixedHeader: this.$store.getters.boxlay.fixedHeader,
      isfixed: this.$store.getters.sidebar.isFixed, //控制是否固定侧边栏
      isopenbtns: this.$store.getters.sidebar.isopenBtns, //控制是否显示快捷按钮
      isAsideVisible: this.$store.getters.isAside.Visible, //控制是否aside可显示
      isdarkVersion: this.$store.getters.isAside.darkVersion, //控制是否aside黑色背景
      isleftSide: this.$store.getters.sidebar.leftSide, //控制是否aside在左边
      isasideFixed: this.$store.getters.isAside.asideFixed, //控制是否aside固定
      isfooterFixed:this.$store.getters.isFooter.fixedFooter,//控制是否footer固定
      // iscollapse:this.$store.getters.sidebar.opened,
      //  isProfil:this.$store.getters.sidebar.Profil,//控制个人简历
    };
  },
  computed: {
    ...mapGetters([
      "boxlay",
      "sidebar",
      "asideSetting",
      "colorSetting",
      "iscolors",
      "isAside",
      "isFooter"
    ]),
    isCollapse() {
      return !this.sidebar.opened;
    },
     isCollapse3() {
      return this.sidebar.opened3;
    },
    isopenBtns() {
      return this.sidebar.isopenBtns;
    },
    isdisplaybtns() {
      return this.sidebar.displayBtns;
    },
    isbackgroundImg() {
      return this.boxlay.backgroundImg;
    },
    boxLayout() {
      return this.boxlay.boxLayout;
    },
    isbgasidecolor() {
      return this.boxlay.isbgasidecolor;
    },
    dis() {
      return this.boxlay.dis;
    },
    isopen_boxlayout() {
      return this.boxlay.open_boxlayout;
    },
    isfixedHeader() {
      return this.boxlay.fixedHeader;
    },
    isfixedHeaderClass() {
      return this.boxlay.fixedHeaderClass;
    },
    isfixedHeaderwidth() {
      return this.boxlay.fixedHeaderwidth;
    },
    isfixedHeaderLogowidth() {
      return this.boxlay.fixedHeaderLogowidt;
    },
    isfixedHeaderMaintop() {
      return this.boxlay.fixedHeaderMaintop;
    },
    isProfil() {
      return this.sidebar.Profil;
    },
    isFixed() {
      return this.sidebar.isFixed;
    },
    ifmainleft() {
      return this.sidebar.mainLeft;
    },
    ismainnavFixed() {
      return this.asideSetting.mainnavFixed;
    },
    isalltheme() {
      return this.colorSetting.alltheme;
    },
    isHeadertheme() {
      return this.colorSetting.headertheme;
    },
    iscolortext() {
      return this.colorSetting.colortext;
    },
    isoffProfil() {
      return this.sidebar.isoffProfil;
    },
    isColors() {
      return this.iscolors;
    },
    isasideright() {
      return this.isAside.asideRight;
    },
    isleftSideLeft() {
      return this.sidebar.leftSideLeft;
    },
    leftSide() {
      return this.sidebar.leftSide;
    },
    isfooterFixe(){
      return this.isFooter.fixedFooter
    },
    isfooFixclass(){
      return  this.isFooter.fixedFooterClass
    },
    idfooterwidth(){
      return this.isFooter.footerWidth
    }
  },
  methods: {
    ...mapActions([
      // 'changeBoxLayout',
      //'changeBackgroundImg',
      "changeProfil",
      "toggleSideBar",
      "changeAsideVisible",
      "changeAsideColor",
      // 'changeAsideLeft',
      "changeAsideFixed",
      "changeFooterFixed"
    ]),

    formatLayout() {//控制面板是否打开
      this.show = !this.show;
      this.markshow = !this.markshow;
      //   this.formatLayoutVisible=true;
      if (this.show == false) {
        this.rightoff = "-10px";
        this.rightoffset = "-3500px";
      } else {
        this.rightoff = "81%";
        this.rightoffset = "3px";
      }
    },
    changeBoxLayout() {//控制是否box布局
      this.boxlay.dis = !this.boxlay.dis;
      this.boxlay.boxLayout = !this.boxlay.boxLayout;
       setTimeout(()=>{
              var getwidths=document.querySelector('.mainheight').offsetWidth;
              this.isFooter.footerWidth=getwidths+'px';
            },300)
      if (this.$route.name === "Dashboard_3") {
      setTimeout(()=>{
              var getwidths3=document.querySelector('.contentmain3').offsetWidth;
              this.isFooter.footerWidth=getwidths3+'px';
            },300)
      }
      if (this.boxlay.boxLayout === true) {
        this.boxlay.open_boxlayout = "open_boxlayout";
        this.isAside.asideRight = "0px";
        if (this.sidebar.isFixed === true) {
          this.asideSetting.mainnavFixed = "mainnav_fixedbox";
        }
        if (this.sidebar.isFixed === false) {
          this.asideSetting.mainnavFixed = "";
        }
       
      }
      if (this.boxlay.boxLayout === false) {
        this.backgroundImg = false;
        this.boxlay.open_boxlayout = "resize_boxlayout";
        this.isAside.asideRight = "0px";
        if (this.backgroundImg === false) {
          this.boxlay.isbgasidecolor = false;
        }
        if (this.sidebar.isFixed === true) {
          this.asideSetting.mainnavFixed = "mainnav_fixed";
        }
        if (this.sidebar.isFixed === false) {
          this.asideSetting.mainnavFixed = "";
        }
      }
      // if(this.boxlay.boxLayout===true && this.sidebar.leftSide===true && this.sidebar.opened===false){
      //   this.sidebar.leftSideLeft="145px";
      // }
      // if(this.boxlay.boxLayout===true && this.sidebar.leftSide===true && this.sidebar.opened===true){
      //   this.sidebar.leftSideLeft="300px";
      // }
      // if(this.boxlay.boxLayout===false && this.sidebar.leftSide===true && this.sidebar.opened===false){
      //   this.sidebar.leftSideLeft="65px";
      // }
      // if(this.boxlay.boxLayout===false && this.sidebar.leftSide===true && this.sidebar.opened===true){
      //   this.sidebar.leftSideLeft="220px";
      // }
      if (this.boxlay.boxLayout === true && this.boxlay.fixedHeader === true) {
        this.boxlay.fixedHeaderClass = "fixedheaderclassbox";
      }
      if (this.boxlay.boxLayout === false && this.boxlay.fixedHeader === true) {
        this.boxlay.fixedHeaderClass = "fixedheaderclass";
      }
    },
    changeBackgroundImg() {//控制更换背景图片方法
      this.boxlay.backgroundImg = !this.boxlay.backgroundImg;
      this.boxlay.isbgasidecolor = !this.boxlay.isbgasidecolor;
    },
    btnChangeBackgroundImg() {//控制背景图片按钮是否可用
      this.backgroundImg = false;
      this.boxlay.isbgasidecolor = false;
    },
    changeboxedBg(item, type, Idname) {//点击小图片切换背景图片
      var arr = document.getElementsByClassName("thumbnail");
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains("isactive"))
          arr[i].classList.remove("isactive");
      }
      document.querySelector("body").setAttribute("style","background-image:url(" + type + item + ".jpg?v=1.0" + ")");
      document.getElementById(Idname + item).classList.add("isactive");
    },
     changeFiexedHeader() {//固定header
      this.boxlay.fixedHeader = !this.boxlay.fixedHeader;
      if (this.boxlay.fixedHeader === true) {
        this.boxlay.fixedHeaderClass = "fixedheaderclass";
        this.boxlay.fixedHeaderwidth = "fixedheaderwidth";
        this.boxlay.fixedHeaderMaintop = "60px";
      } else {
        this.boxlay.fixedHeaderClass = "";
        this.boxlay.fixedHeaderwidth = "";
        this.boxlay.fixedHeaderMaintop = "";
        if(this.boxlay.boxLayout === true){
         this.boxlay.open_boxlayout = "open_boxlayout";
        }
       
      }
      if (this.sidebar.opened === false && this.boxlay.fixedHeader === true) {
        this.boxlay.fixedHeaderLogowidth = "45px";
      }
      if (this.boxlay.boxLayout === true && this.boxlay.fixedHeader === true) {
        this.boxlay.fixedHeaderClass = "fixedheaderclassbox";
      }
        if (this.boxlay.fixedHeader === true && this.sidebar.isFixed === true) {
         this.asideSetting.mainnavFixed = "mainnav_fixedtop";
      }
      if (this.$route.name === "Dashboard2") {
        // this.sidebar.opened=true;
        if (this.sidebar.opened === true && this.boxlay.fixedHeader === true) {
          this.boxlay.fixedHeaderLogowidth = "45px";
        }
        if (this.sidebar.opened === false && this.boxlay.fixedHeader === true) {
          this.boxlay.fixedHeaderLogowidth = "200px";
        }
      }
    },
    changeFooterFixed(){//固定footer
          this.isFooter.fixedFooter=!this.isFooter.fixedFooter;
           var getwidth=document.querySelector('.mainheight').offsetWidth;
            this.isFooter.footerWidth=getwidth+'px';
          if (this.$route.name === "Dashboard_3") {
             var getwidth3=document.querySelector('.contentmain3').offsetWidth;
            this.isFooter.footerWidth3=getwidth3+'px';
           }
          if(this.isFooter.fixedFooter===true){
            this.isFooter.fixedFooterClass="fixedfooter"
           
          }else{
            this.isFooter.fixedFooterClass=""
          }
        },
     changenavFixed() {//固定侧边栏
      this.sidebar.isFixed = !this.sidebar.isFixed;
      // if (this.sidebar.isFixed === true) {
      //   this.asideSetting.mainnavFixed = "mainnav_fixedtop";
      // }
      // if (this.sidebar.isFixed === false) {
      //   this.asideSetting.mainnavFixed = "";
      // }
      //  if (this.boxlay.fixedHeader === true && this.sidebar.isFixed === true) {
      //    this.asideSetting.mainnavFixed = "mainnav_fixedtop";
      // }
      // if (this.boxlay.boxLayout === false) {
      //   if (this.sidebar.isFixed === true) {
      //     this.asideSetting.mainnavFixed = "mainnav_fixed";
      //   }
      //   if (this.sidebar.isFixed === false) {
      //     this.asideSetting.mainnavFixed = "";
      //   }
      // }
      // if (this.boxlay.boxLayout === true) {
      //   if (this.sidebar.isFixed === true) {
      //     this.asideSetting.mainnavFixed = "mainnav_fixedbox";
      //   }
      //   if (this.sidebar.isFixed === false) {
      //     this.asideSetting.mainnavFixed = "";
      //   }
      // }
      // if (this.sidebar.opened === false) {
      //   if (this.sidebar.isFixed === true) {
      //     // this.sidebar.mainLeft="mainleftlittle";
      //   } else {
      //     this.sidebar.mainLeft = "";
      //   }
      // }
      // if (this.sidebar.opened === true) {
      //   if (this.sidebar.isFixed === true) {
      //     // this.sidebar.mainLeft="mainleft";
      //   } else {
      //     this.sidebar.mainLeft = "";
      //   }
      // }
    },

    // changealltheme(itemcolor){
    //   var link = document.createElement('link');
    //   link.type = 'text/css';
    //   link.rel = 'stylesheet';
    //   link.id='theme';
    //   link.href = this.subTheme+itemcolor+'.css?v=1.0';
    //   document.getElementsByTagName("head")[0].appendChild(link);
    //   // this.colorSetting.alltheme=this.color+itemcolor;
    //   let arr=Object.keys(this.iscolors);
    //   for(let i=0;i<arr.length;i++){
    //     if( arr[i] === itemcolor){
    //        this.colorSetting.colortext=this.iscolors[arr[i]];
    //       // document.querySelector('.el-submenu.is-active .el-submenu__title').setAttribute('style', 'background:' + this.colorSetting.colortext +"!important"+'');
    //       // document.head.appendChild(document.createElement('link').href=this.subTheme+itemcolor);
    //        return this.colorSetting.colortext;//return就停止往下走
    //     }

    //   }
    //   return;
    //  // return this.colortext;
    // },
    changeThemeColors(itemcolor, type) {//更换主题颜色
      var arr1 = document.getElementsByClassName("demo-theme-make");
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i].classList.contains("isactive"))
          arr1[i].classList.remove("isactive");
      }
      var arr2 = document.getElementsByClassName("demo-theme");
      for (var i = 0; i < arr2.length; i++) {
        if (arr2[i].classList.contains("isactive"))
          arr2[i].classList.remove("isactive");
      }
      var arr3 = document.getElementsByClassName("demo-single-theme");
      for (var i = 0; i < arr3.length; i++) {
        if (arr3[i].classList.contains("isactive"))
          arr3[i].classList.remove("isactive");
      }
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.id = "theme";
      link.href ="static/css/theme-" + type + "/" + "submenu-theme-" + itemcolor + ".css?v=1.0";
      var themeCSS = document.querySelector("#theme");
      if (themeCSS.href !== "") {
        themeCSS.href = "static/css/theme-" +type +"/" +"submenu-theme-" + itemcolor +".css?v=1.0";
      } else {
        document.getElementsByTagName("head")[0].appendChild(link);
      }
      document.getElementById(itemcolor + type).classList.add("isactive");
      let arr = Object.keys(this.iscolors);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === itemcolor) {
          this.colorSetting.colortext = this.iscolors[arr[i]];
          return this.colorSetting.colortext; //return就停止往下走
        }
      }
    },
    changeAsideColors(itemcolor) {//更换侧边栏颜色
      var arr1 = document.getElementsByClassName("demo-theme-make");
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i].classList.contains("isactive"))
          arr1[i].classList.remove("isactive");
      }
      var arr2 = document.getElementsByClassName("demo-theme");
      for (var i = 0; i < arr2.length; i++) {
        if (arr2[i].classList.contains("isactive"))
          arr2[i].classList.remove("isactive");
      }
      var arr3 = document.getElementsByClassName("demo-single-theme");
      for (var i = 0; i < arr3.length; i++) {
        if (arr3[i].classList.contains("isactive"))
          arr3[i].classList.remove("isactive");
      }
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.id = "theme";
      link.href ="static/css/theme-aside/submenu-theme-" + itemcolor + ".css?v=1.0";
      var themeCSS = document.querySelector("#theme");
      if (themeCSS.href !== "") {
        themeCSS.href = "static/css/theme-aside/submenu-theme-" + itemcolor + ".css?v=1.0";
      } else {
        document.getElementsByTagName("head")[0].appendChild(link);
      }
      document.getElementById(itemcolor).classList.add("isactive");
    },
    changeThemeLight() {//更换明亮主题
      var arr1 = document.getElementsByClassName("demo-theme-make");
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i].classList.contains("isactive"))
          arr1[i].classList.remove("isactive");
      }
      var arr2 = document.getElementsByClassName("demo-theme");
      for (var i = 0; i < arr2.length; i++) {
        if (arr2[i].classList.contains("isactive"))
          arr2[i].classList.remove("isactive");
      }
      var arr3 = document.getElementsByClassName("demo-single-theme");
      for (var i = 0; i < arr3.length; i++) {
        if (arr3[i].classList.contains("isactive"))
          arr3[i].classList.remove("isactive");
      }
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.id = "theme";
      link.href = "static/css/theme/theme-light.css?v=1.0";
      var themeCSS = document.querySelector("#theme");
      if (themeCSS.href !== "") {
        themeCSS.href = "static/css/theme/theme-light.css?v=1.0";
      } else {
        document.getElementsByTagName("head")[0].appendChild(link);
      }
      document.getElementById("light").classList.add("isactive");
    },
    changeThemeDark() {//更换全黑暗主题
      var arr1 = document.getElementsByClassName("demo-theme-make");
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i].classList.contains("isactive"))
          arr1[i].classList.remove("isactive");
      }
      var arr2 = document.getElementsByClassName("demo-theme");
      for (var i = 0; i < arr2.length; i++) {
        if (arr2[i].classList.contains("isactive"))
          arr2[i].classList.remove("isactive");
      }
      var arr3 = document.getElementsByClassName("demo-single-theme");
      for (var i = 0; i < arr3.length; i++) {
        if (arr3[i].classList.contains("isactive"))
          arr3[i].classList.remove("isactive");
      }
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.id = "theme";
      link.href = "static/css/theme/theme-dark.css?v=1.0";
      var themeCSS = document.querySelector("#theme");
      if (themeCSS.href !== "") {
        themeCSS.href = "static/css/theme/theme-dark.css?v=1.0";
      } else {
        document.getElementsByTagName("head")[0].appendChild(link);
      }
      document.getElementById("dark").classList.add("isactive");
    },
    changeBtns() {//shi是否显示快捷按钮
      this.sidebar.isopenBtns = !this.sidebar.isopenBtns;
      if (this.sidebar.isopenBtns === true) {
        this.sidebar.displayBtns = "nodispalybtns";
      } else {
        this.sidebar.displayBtns = "";
      }
    },
    changeAsideLeft() {//aside部分放在左边
      this.sidebar.leftSide = !this.sidebar.leftSide;
      if (this.sidebar.leftSide === true) {
        if (this.boxlay.boxLayout === false && this.sidebar.leftSide === true) {
          this.sidebar.leftSideLeft = "220px";
        }
        if (this.boxlay.boxLayout === true && this.sidebar.leftSide === true) {
          this.sidebar.leftSideLeft = "220px";
        }
         if (this.sidebar.opened3===true && this.boxlay.boxLayout === false && this.sidebar.leftSide === true) {
          this.sidebar.leftSideLeft = "0px";
        }
        if (this.sidebar.opened3===true && this.boxlay.boxLayout === true && this.sidebar.leftSide === true) {
          this.sidebar.leftSideLeft = "0px";
        }
      } else {
        this.sidebar.leftSideLeft = "";
      }
    },
  changeheight(){
         var formHeight=document.getElementById('box_card').offsetHeight;
         var Btntop=formHeight/2+10;
         document.getElementById('btn').style.top=Btntop+'px';
      }
    },
     mounted(){
    this.changeheight();
   }

};
</script>
<style lang="less" scoped>
.mark {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.btn {
  position: fixed;
  right: -10px;
  // top: 50%;
  z-index: 3;
  font-size: 25px;
}
.box-card {
  position: fixed;
  right: -3500px;
  top: 3%;
  z-index: 3;
}
.box-card[data-v-33b77da8] {
  width: 81% !important;
  max-height: 96% !important;
  overflow-y: scroll !important;
}
.schemes {
  height: 208px;
  padding-left: 15px;
  padding-right: 0px !important;
}
.el-card__header {
  border-bottom: 1px solid #ebeef5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-top: 5px;
  padding-left: 20px;
  padding-right: 10px;
  padding-bottom: 0px;
}
.el-button--info.is-plain {
  color: #fafafb;
  background: #25476a;
  border-color: #25476a;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.text-title {
  font-size: 1.2em;
  color: #4d627b;
}
.text-lg {
  font-size: 13px;
  color: #4d627b;
  font-weight: 700;
}
.text-xs {
  font-size: 0.8em;
  color: #909ba1;
  font-weight: 600;
}
.text-div {
  font-size: 13px;
  color: #7a878e;
}
.el-switch {
  float: right;
}
.mar-btm {
  margin: 13px 0px 16px 0px;
}
.mar-btmm {
  margin: 38px 0px 12px 0px;
}
hr {
  background: #ebeef5;
  height: 1px;
  border: none;
}
.theme-text {
  margin: 10px 0px 0px 20px;
}
.demo-single-theme {
  width: 40px;
  height: 29px;
  border: 1px solid #ddd !important;
  margin: 15px 10px 0px 10px;
}
.demo-theme-light {
  background: #fff;
}
.theme-dark {
  background: #3a444e;
}
.monder {
  background: #f8f9fa;
  margin: 20px 0px 20px 0px;
  padding: 10px;
}
.monder-title {
  padding: 0px 0px 0px 20%;
  margin: 5px 0px 15px 0px;
}
.demo-justify-theme:after {
  display: inline-block;
  width: 100%;
}
.demo-theme {
  cursor: pointer !important;
  display: inline-block;
  width: 16.666666%;
  height: 29px;
  background-color: #f4f4f4;
  position: relative;
  transition: all 0.2s;
  margin-left: -5px;
  margin-bottom: -5px;
}
.demo-diversify-theme:after {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.demo-theme-make {
  cursor: pointer !important;
  display: inline-block;
  width: 33%;
  height: 29px;
  background-color: #f4f4f4;
  position: relative;
  transition: all 0.2s;
  margin-left: -5px;
  margin-bottom: -5px;
}
.demo-text {
  text-align: center;
  margin-bottom: 7px;
  margin-left: -5px;
}
.img-theme {
  margin-left: -5px;
}
.demo-theme:hover,
.demo-single-theme:hover,
.demo-theme-make:hover {
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  border: 0;
  transform: scale(1.1);
  transition: all 0.2s;
  z-index: 1000;
}
.demo-theme-make.isactive:before,
.demo-theme.isactive:before,
.theme-dark.isactive:before {
  background: #fff;
  content: "";
  height: 10px;
  left: 45%;
  margin-left: -5px;
  position: absolute;
  top: 13px;
  transform: rotate(-45deg);
  width: 5px;
  box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.5);
}
.demo-theme-make.isactive:after,
.demo-theme.isactive:after,
.theme-dark.isactive:after {
  background: #fff;
  content: "";
  height: 20px;
  left: 45%;
  margin-left: 3px;
  position: absolute;
  top: 5px;
  transform: rotate(45deg);
  width: 5px;
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.5);
}
.theme-dark.isactive:before {
  background: #fff;
  content: "";
  height: 10px;
  left: 12%;
  margin-left: -5px;
  position: absolute;
  top: 28px;
  transform: rotate(-45deg);
  width: 5px;
  box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.5);
}
.theme-dark.isactive:after {
  background: #fff;
  content: "";
  height: 20px;
  left: 12%;
  margin-left: 3px;
  position: absolute;
  top: 20px;
  transform: rotate(45deg);
  width: 5px;
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.5);
}
.theme-light.isactive:before {
  background: #000;
  content: "";
  height: 10px;
  left: 12%;
  margin-left: -5px;
  position: absolute;
  top: 28px;
  transform: rotate(-45deg);
  width: 5px;
  box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.5);
}
.theme-light.isactive:after {
  background: #000;
  content: "";
  height: 20px;
  left: 12%;
  margin-left: 3px;
  position: absolute;
  top: 20px;
  transform: rotate(45deg);
  width: 5px;
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.5);
}
.text-justify {
  width: 100%;
  margin-top: 11px;
  margin-bottom: 40px;
}
.text-justify > .thumbnail {
  font-size: 7px;
  margin-bottom: 5px;
  width: 21%;
  padding: 3px;

  border: 1px solid #ececec;
  display: inline-block;
}
.text-justify > .thumbnail:hover {
  border: 1px solid #9aa6da;
}
.text-justify > .thumbnail.isactive {
  border: 1px solid #9aa6da;
}
@media (min-width: 1500px) {
  .text-justify > .thumbnail {
    font-size: 7px;
    margin-bottom: 5px;
    width: 24%;
  }
}
.text-justify > .thumbnail {
  font-size: 7px;
  margin-bottom: 5px;
}
.text-justify > .thumbnail > img {
  width: 100%;
  height: 3vw;
  max-height: 55px;
}
.bag {
  margin-bottom: 40px;
}
.bag-big {
  background: #f8f9fa;
}
.bag-div {
  background: #f8f9fa;
  height: 20px;
  width: 117%;
  margin-left: -20px;
  margin-top: -20px;
}
.btnclose {
  margin-top: 10px;
  color: #fafafb;
  background: #25476a;
  border-color: #25476a;
}
.demo-theme-gray {
  background: #8f9ea6;
}
.demo-theme-coffee {
  background: #807362;
}
.demo-theme-dark {
  background: #3a444e;
}
.demo-theme-dust {
  background: #fd8943;
}
.demo-theme-lime {
  background: #80b343;
}
.demo-theme-mint {
  background: #26a69a;
}
.demo-theme-navy {
  background: #294d73;
}
.demo-theme-ocean {
  background: #177bbb;
}
.demo-theme-prickly_pear {
  background: #ad5468;
}
.demo-theme-purple {
  background: #8b5b9f;
}
.demo-theme-well_red {
  background: #d23e3e;
}
.demo-theme-yellow {
  background: #efd45a;
}
</style>