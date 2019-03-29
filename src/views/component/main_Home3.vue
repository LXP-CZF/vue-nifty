<template>
 <div class="content">
     <div class="text-center" >
        <h2>Hi Aaron Chavez! Welcome back to the Dashboard.</h2>
        <p class="text-check">Check out your past searches and the content you’ve browsed in. <a href="#" class="btn-link">View last results</a></p>
    </div>
    <el-row :gutter="20" style="margin-top:50px;margin-left:0px !important;margin-right:0px !important;">
        <el-col :span="4" :offset="6">
            <div class="grid-content bg-purple">
                <div class="pad-ver mar-top text-main"><i class="iconfont icon-icon_affiliations_li icon_x"></i></div>
                <p class="text-semibold">Secured</p>
                <p class="text-muted">32TB Total storage</p>
                <p class="text-sm">The Big Oxmox advised her not to do so, because there were thousands of bad.</p>
                <button class="btn btn-primary mar-ver el-header">Get it now</button>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple">
                <div class="pad-ver mar-top text-main"><i class="iconfont icon-icon_glass icon_x"></i></div>
                <p class="text-semibold">Storage</p>
                <p class="text-muted">Latest Technology</p>
                <p class="text-sm">The Big Oxmox advised her not to do so, because there were thousands of bad.</p>
                <button class="btn btn-primary mar-ver el-header">View reports</button>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple">
                <div class="pad-ver mar-top text-main"><i class="iconfont icon-icon_QRcode icon_x"></i></div>
                <p class="text-semibold">Support</p>
                <p class="text-muted">We are here 24/7</p>
                <p class="text-sm">The Big Oxmox advised her not to do so, because there were thousands of bad.</p>
                <button class="btn btn-primary mar-ver el-header">Contact us</button>
            </div>
        </el-col>
    </el-row>
 </div>
</template>

<script>
export default {
 components:{},
 props:{},
  inject:['reload'],
 data() {
    return {
      currentDate: new Date()
    };
  },
 computed:{},
 methods:{},
 created(){},
 mounted(){
      this.reload();
 }
}
</script>
<style scoped>
.content{
    width: 100%;
    min-height: 500px;
    background-color: #ecf0f5;
    color: #4d627b;
}
/* h2{color: #4d627b;} */
.text-check{font-size: .9em;}
.text-center{text-align: center;padding-top: 55px;padding-bottom: 55px; color:#4d627b;}
 .bg-purple {
    background: #fff;
  }
  .grid-content {
    text-align: center;
    border-radius: 2px;
    min-height: 36px;
  }
  .icon_x{font-size: 50px;}
  .pad-ver{
      padding-top: 40px;
      padding-bottom: 10px;
      }
.text-semibold{font-size: 1.03em;font-weight: 600;line-height: 1.25;margin-bottom: 3px;}
.text-muted{margin: 0 0 10px;font-size: .8em;color: rgb(122, 135, 142);}
.text-sm{font-size: .7em; margin:0px 25px 15px 25px;color: rgb(122, 135, 142);}
.btn {
    cursor: pointer;
    background-color: transparent;
    color: inherit;
    padding: 6px 12px;
    border-radius: 3px;
    border: none;
    font-size: 13px;
    line-height: 1.475;
    vertical-align: middle;
    transition: all 0.25s;
}
.btn-primary, .btn-primary:focus {
    background-color: rgb(41, 79, 117);
    color: rgb(255, 255, 255);
    border-color: rgb(41, 79, 117) !important;
}
.mar-ver {
    margin-top: 15px;
    margin-bottom: 40px;
}
</style>