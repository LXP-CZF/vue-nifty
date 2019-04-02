<template>
<div class="mainheight" >
<el-main >
  <section class="app-main" :style="{marginTop:isfixedHeaderMaintop}">
      <div style="width:100%; height:125px;padding-top:2%" class="maintheme">
          <!-- <h3>Welcome back to the Dashboard.</h3>
          <p>Scroll down to see quick links and overviews of your Server, To do list, Order status or get some Help using Nifty.</p>  -->
     <div v-for="(item,index)  in levelList" :key="item.path" v-if="item.name" style="padding-left:22px;font-size:18px">
        <span v-if="!item.redirect==='noredirect'||index!==levelList.length-1" class="no-redirect">{{item.name}}</span>
     </div>
      <breadcrumb></breadcrumb>
      </div>
    <!-- <transition name="fade" mode="out-in"> -->
        <router-view></router-view>
    <!-- </transition> -->
  </section>
</el-main>
 
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import breadcrumb from '@/components/nx-breadcrumb'
export default {
  name: 'AppMain',
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  computed:{
    ...mapGetters(['colorSetting','boxlay']),
		isalltheme(){
      return this.colorSetting.alltheme
    },
    isfixedHeaderMaintop(){
      return this.boxlay.fixedHeaderMaintop
    },
		},
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name !== '主页') {
        matched = [{ path: '/'}].concat(matched)
      }
      this.levelList = matched
    },
     getminHeight(){
       setTimeout(()=>{
         var h=document.documentElement.clientHeight;//可见区域高度
         var maindiv=document.querySelector('.el-main').style.minHeight=h-60-35+"px";
       },200)
      }

  },
  mounted(){
      this.getminHeight();
      // 数据首次加载完后 → 获取宽度，并设置其高度
    this.$nextTick(() => {
      this.getminHeight();
    })
    // 挂载 reisze 事件 → 屏幕缩放时监听宽度变化
    window.onresize = () => {
        return (() => {
            this.$nextTick(() => {
              this.getminHeight();
            })
        })()
    }

   },
  components:{
			breadcrumb
    },
     watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
}
</script>
<style scoped>
.el-main{padding: 0px !important;margin:0 auto;width: 100%;overflow-x: hidden; background: #ecf0f5;}
.app-main{padding-bottom: 25px;}
p{font-size: 15px; padding-top: 8px;}
.no-redirect{color:#f6f8fa;}
</style>

