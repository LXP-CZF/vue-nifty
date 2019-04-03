<template>
 <div>
<el-row>
  <el-col :span="24">
      <div class="grid-content bg-table">
      </div>
  </el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
 </div>
</template>

<script>
export default {
 components:{},
 props:{},
 data(){
  return {
  }
 },
 computed:{},
 methods:{},
 created(){},
 mounted(){}
}
</script>
<style scoped>
.bg-table{margin-top: -70px;margin-bottom: 20px;}
.grid-content{background: white;min-height: 300px;border-radius: 4px}
</style>