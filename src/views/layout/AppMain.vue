<template>
<div class="mainheight">
<el-main>
  <section class="app-main">
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
    ...mapGetters(['colorSetting']),
		isalltheme(){
      return this.colorSetting.alltheme
    }
		},
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name !== '主页') {
        matched = [{ path: '/'}].concat(matched)
      }
      this.levelList = matched
    }
  },
  components:{
			breadcrumb
		}
}
</script>
<style scoped>
.el-main{padding: 0px !important;margin:0 auto;width: 100%;overflow-x: hidden; min-height: 750px; background: #ecf0f5;}
.app-main{padding-bottom: 25px;}
p{font-size: 15px; padding-top: 8px;}
.no-redirect{color:#f6f8fa;}
</style>

