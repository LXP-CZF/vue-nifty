<template>
<div id="app" ref="app">
		<transition name="fade" mode="out-in">
			<router-view v-if="isRouterAlive"></router-view>
		</transition>
	</div>
</template>

<script>
 export default {
	name: 'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    }
  }
}
</script>

<style  lang="less">
body{width: 100%;height: 100%; background: #eaeef3;overflow-x: hidden;}
*{margin:0px;padding: 0px; }
#app {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 0px;
}
.clearfix{text-align: left}
.el-button--primary{border:none !important}
.el-card__header {
    padding: 8px !important;
}
.el-card__body {
    padding: 20px 10px 0px 10px !important;
}
.el-table td, .el-table th {padding: 0px !important;}
.el-table td div {
    font-size: 12px !important;
}
.el-popper[x-placement^=bottom] {
    margin-top: 5px;
}
// .el-dialog__wrapper {
//   overflow: hidden;
// }
</style>
