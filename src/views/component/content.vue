<template>
	 <div class="home">
            <el-button  :plain="true"  type="info" class="btn" @click="formatLayout"><i class="el-icon-menu el-icon--left"></i>版式布局</el-button>
        <div class="component" v-if="laytypeA">
		      	   <vueheader></vueheader>
		      	   <vuemain></vuemain>
				</div> 
				<div class="component" v-if="laytypeAA">
		      	  <vueheader></vueheader>
		      	   <vuemain></vuemain>
		      	   <vuefooter></vuefooter>
				</div> 
				<div class="component" v-if="laytypeAAA">
		      	   <vueheader></vueheader>
		      	   <el-container>
				    <vueaside></vueaside>
				     <vuemain></vuemain>
				     </el-container>
				     <vuefooter></vuefooter>
				</div>
				<div class="component" v-if="laytypeABB">
		      	  <vueheader></vueheader>
		      	     <el-container>
				     <vueaside></vueaside>
				     <vuemain></vuemain>
				     </el-container>
				</div> 
				<div class="component" v-if="laytypeAB">
		      	  <el-container>
		      	   <vueaside></vueaside>
		      	  <div style="width: 100%;">
   		      	     <vueheader></vueheader>
				     <vuemain></vuemain>
		      	  </div>
		      	  </el-container>
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
            <div class="formatLayout">
             <el-dialog
                    title="版式布局"
                    :visible.sync="formatLayoutVisible"
                    :close-on-click-modal="false"
                    :show-close="false"
                    custom-class="dashDialog"
                    size="small">
                    <div class="content">
                        <el-row>
                          <el-col :span="22" :push="1">
                              <div class="header bg-purple-dark">选择版式布局</div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="10">
                          <el-col :span="4"  v-for="(item,index) in layTable" :key="item.id">
                              <div class="grid-content bg-purple-light animated wobble" @click="layView(item)">
                              <img v-bind:src="item.src" />
                            </div>
                          </el-col>
                        </el-row>
                    </div>
                    <span slot="footer" class="dialog-footer">
                      <el-button type="primary" size="small" @click="formatLayoutVisible = false">取 消</el-button>
                    </span>
                  </el-dialog>
        </div>
      </div>
</template>
<script>
      import content from'./content.js';
      export default content;
</script>
<style>
	
</style>
<style scoped lang="less">
    .btn{position: fixed;right: 10px; top: 50%; z-index: 999;}
    .aside11{display: none;}
    .dashDialog{
        border-radius: 5px;
        top: 20%;
        .el-dialog__body{
        padding: 0px;
    }
    .el-dialog__header{
        border-radius: 5px 5px 0px 0px;
        padding: 10px 0px 10px 20px;
        background: #409EFF !important;
    }.header{
        padding-bottom: 30px;
    }
    .content{
        padding: 20px;
    }
    .grid-content{
        cursor: pointer;
        height: 70px;
        padding: 10px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 15%;
        }
        /*border: 1px solid rosybrown;*/
        &:hover{
        	 border-radius: 15%;
            -webkit-transform:scale(1.2);
			-webkit-box-shadow:0px 0px 30px #506a8b;
			-moz-transform:scale(1.2);
			-moz-box-shadow:0px 0px 30px #506a8b;	
			-o-transform:scale(1.2);
			-o-box-shadow:0px 0px 30px #506a8b;	
        }
    }
    }
</style>
