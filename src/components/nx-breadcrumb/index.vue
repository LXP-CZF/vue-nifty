<template>
<div>
  <el-breadcrumb class="app-breadcrumb" separator=">">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if="item.name">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{item.name}}</span>
        <router-link v-else :to="item.redirect||item.path"> <span class="el-icon-location">&nbsp;&nbsp;>&nbsp;&nbsp;</span>{{item.name}}</router-link>
      </el-breadcrumb-item>
    </transition-group> 
  </el-breadcrumb>
</div>
</template>

<script>
export default {
  name: 'nxBreadcrumb',
  data() {
    return {
      levelList: null
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name !== '主页') {
        matched = [{ path: '/Dashboard1'}].concat(matched)
      }
      this.levelList = matched
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
}
</script>

<style  lang="less" scoped>
  .app-breadcrumb.el-breadcrumb {
    // width: 98%;
    // height: 40px;
    // background: white;
    display: inline-block;
    font-size: 13px;
    line-height: 40px;
    padding-left: 20px;
    margin: 0px;
    color: #fff;
    .no-redirect {
      color: #97a8be;;
      cursor: text;
    }
  }
  span{ color: #fff;}
  a{color:#fff;}
  a:hover{color:#ffd04b;}
</style>
