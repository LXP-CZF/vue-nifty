<template>
	<el-row>
	<el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload" >export</el-button>
    <el-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
	<el-table :data="dataShow.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 98%;margin: 10px;" stripe  :default-sort = "{prop: 'id', order: 'ascending'}"  v-loading.body="loading">
		<!--<el-table-column prop="id" sortable="custom" width="55px" align="center"></el-table-column>-->
		<el-table-column  prop="id" label="序号" sortable align="center" width="100">
			<template slot-scope="scope">
				<span>{{ scope.row.id }}</span>
			</template>
		</el-table-column> 
		<el-table-column prop="Address" label="地址"   align="center">
			<template slot-scope="scope">
				<span>{{scope.row.Address}}</span>
			</template>
		</el-table-column> 
		<el-table-column prop="Name" label="名字" sortable  align="center">
			<template slot-scope="scope">
				<span>{{scope.row.Name}}</span>
			</template>
		</el-table-column> 
		<el-table-column prop="String" label="手机号"  align="center">
			<template slot-scope="scope">
				<span>{{scope.row.String}}</span>
			</template>
		</el-table-column> 
		<el-table-column prop="Date" label="出生日期"  align="center" >
			<template slot-scope="scope">
				<span>{{scope.row.Date}}</span>
			</template>
		</el-table-column> 
		 <el-table-column
                    label="操作" align="center">
                <template scope="scope">
                    <el-button :plain="true" type="success" size="small" icon="edit" @click="editClick(scope.row)">编辑</el-button>
                    <el-button :plain="true" type="danger" size="small" icon="delete" @click="deleteClick(scope.row)">删除</el-button>
                </template>
            </el-table-column>

	</el-table>

	 <el-pagination class="fy"
                     layout="prev, pager, next"
                     @size-change="pageSizeChange"
                     @current-change="current_change"
                     :total="total"
                     :page-sizes="[10, 20, 30, 50]"
                     :page-size="pagesize"
                     background
                    >
                  </el-pagination>
            	</el-col>    
            	 <!--编辑界面-->
    <el-dialog title="编辑" :visible.syn="editFormVisible"  @close="editFormVisible=false" >
        <el-form :model="editForm" label-width="80px"  ref="editForm">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="editForm.Name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
            	<el-date-picker type="date" placeholder="选择日期" v-model="editForm.Date" width="100%"></el-date-picker>
            </el-form-item>
            <el-form-item label="手机号码">
                <el-input v-model="editForm.String" ></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="editForm.Address"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click.native="editFormVisible = false">取消</el-button>
            <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
        </div>
    </el-dialog>

	</el-row>
	
</template>

<script>
	import api from './../axios/api.js'
	export default{
		name:'Mock',
		data(){
			return{
				dataShow:[],
				total:0,//默认数据总数
                pagesize:9,//每页的数据条数
                currentPage:1,//默认开始页面
                editFormVisible:false,
                editLoading: false,
                loading:false,
                downloadLoading:false,
                editForm:{
                	id:'',
                	Name:'',
                	Address:'',
                	String:'',
                	Date:''
                	
                }
			}
		},
		created () {
	    	this.getdata();
	    	this.loadingData();
		},
		methods:{
			getdata:function(){
				api.mockdata('/data/index')
				.then(res=>{
					console.log(res);
					this.dataShow=res;
					this.total=res.length;
				})
			},
			 pageSizeChange:function(val) {
                this.pagesize = val;
                var _self = this;
                _self.loadingData();//重新加载数据
            },
		    current_change:function(currentPage){
		        this.currentPage = currentPage;
		    },
		    //表格重新加载数据
            loadingData:function() {
                var _self = this;
                _self.loading = true;
                setTimeout(function(){
                    _self.loading = false;
                },300);
            },

		    //表格编辑事件
            editClick:function(row) {
                this.editFormVisible = true;
                this.editForm = Object.assign({}, row);
            },
            //表格删除事件
            deleteClick:function(row) {
                var _self = this;
                this.$confirm('确认删除' + row.Name +'吗?', '提示', {
                    type: 'warning'
                }).then(function(){
                    _self.$message({
                        message: row.Name + '删除成功',
                        type: 'success'
                    });
                    _self.loadingData();//重新加载数据
                }).catch(function(e){
                    if(e != "cancel")
                        console.log("出现错误：" + e);
                });
		},
		//保存点击事件
            editSubmit:function(){
                this.editFormVisible=false;
                this.loadingData();
            },
            // 点击编辑信息弹框的确定按钮
			/*studentcEdit(){
			  let studenteList=this.editsForm;
			  console.log(studenteList);
			  let {name,age,sex,major,depart,term,year} = studenteList;
			  if(name==''||age==''||sex==''||major==''||depart==''||term==''||year==''){
			    this.$message.error("修改内容除了不可编辑的每一项都不准为空")
			  }else{
			    this.$http.put(Main.changeStudenet(),this.editsForm).then(res => {
			      let {errCode,errMsg} = res.data;
			      if(!errCode==1){
			        this.init();
			        this.editstudentForm  = false;
			      }else{
			        this.$message.error(errMsg);
			      }
			    }, response => {
			
			    });
			  }
			},
*/
	    handleDownload() {
	      this.downloadLoading = true
	      import('@/vendor/Export2Excel').then(excel => {
	        const tHeader = ['id', 'Name', 'Address', 'Date', 'String']
	        const filterVal = ['id', 'Name', 'Address', 'Date', 'String']
	        const data = this.formatJson(filterVal, this.dataShow)
	        excel.export_json_to_excel({
	          header: tHeader,
	          data,
	          filename: 'table-list'
	        })
	        this.downloadLoading = false
	      })
	    },
	    formatJson(filterVal, jsonData) {
	      return jsonData.map(v => filterVal.map(j => {
	        if (j === 'timestamp') {
	          return parseTime(v[j])
	        } else {
	          return v[j]
	        }
	      }))
	    }
	}
}
</script>

<style scoped>
	.el-row{
		width: 100%;
	}
	.filter-item{float:left;margin-top:10px;margin-left: 10px;}
</style>