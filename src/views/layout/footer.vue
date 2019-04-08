<template>
    <!--底部-->
	<el-footer :class="isfixedfooter" :style="{width:isfooterwidth}">@2019  GoodIdea</el-footer>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: '',
  data(){
    return{
      getwidth:''
    }
  },
	components: {
  },
  computed:{
   ...mapGetters(['isFooter']),
   isfixedfooter(){
     return this.isFooter.fixedFooterClass
   },
    isfooterwidth(){
      return this.isFooter.footerWidth
    }
  
  }, 
  mounted(){
     this.getw();
      this.$nextTick(() => {
              this.getw();
            })
      window.onresize = () => {
        return (() => {
            this.$nextTick(() => {
             this.getw();
            })
        })()
    }
   },
   methods:{
     getw(){
       setTimeout(()=>{
      this.isFooter.footerWidth=document.querySelector('.mainheight').offsetWidth+'px';
      return this.isFooter.footerWidth;
       },2000)
     }
     
   }
}
</script>

<style scoped>
	.el-footer {
    background-color: #f1efec;
    color: #4d627b !important;
    font-size: 13px;
    height: 35px !important;
    line-height: 35px;
    width: 100%;
    padding-left: 20px;
    
  }
  .fixedfooter{
    position: fixed;
    bottom:0px;
    z-index: 998;
  }
</style>
