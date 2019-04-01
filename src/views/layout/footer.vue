<template>
    <!--底部-->
	<el-footer :class="isfixedfooter" :style="{width:idfooterwidth}">@2019  GoodIdea</el-footer>
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
    idfooterwidth(){
      return this.isFooter.footerWidth
    }
  
  }, 
  mounted(){
     this.getw();
   },
   methods:{
     getw(){
      this.getwidth=document.querySelector('.mainheight').offsetWidth;
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
    /* width: 100%; */
    padding-left: 20px;
    
  }
  .fixedfooter{
    position: fixed;
    bottom:0px;
    z-index: 998;
  }
</style>
