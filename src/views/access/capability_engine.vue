<template>
	<section>
		<!--工具条-->
		<el-col :span="24">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
						<span>查询</span>
				</div>
        	<el-form :inline="true" :model="filters" ref="filters">
				<el-form-item :label="type_name" prop="name">
					<el-input v-model="filters.name" placeholder="请输入"></el-input>
				</el-form-item>
					<el-form-item :label="vender" prop="name">
					<el-input v-model="filters.name" placeholder="请输入"></el-input>
				</el-form-item>
				<el-form-item label="能力类型" prop="value">
					<el-select v-model="filters.value" placeholder="请选择" >
						<el-option label="正常" value="suc" ></el-option>
						<el-option label="停用" value="error"></el-option>
					</el-select>
			  </el-form-item>
				<el-form-item>
					<el-button type="primary" class="btnsBg"  size="small" icon="el-icon-search" v-on:click="getUsers">查询</el-button>
					<el-button  size="small" icon="el-icon-delete" v-on:click="resetForm('filters')">重置</el-button>
				</el-form-item>
			</el-form>
			</el-card>
		
		</el-col>
		<!-- button -->
    <el-col :span="24">
			<el-card class="box-card">
					<el-row class="tabletitle">
						<el-col :span="12" class="titletext">
							<span class="title">{{title}}</span></el-col>
							<el-col :span="12" class="titlebtns">
							<el-button   size="mini"  icon="el-icon-edit" @click="handleAdd" class="btnsBorderno">新增</el-button>
							<el-button  size="mini" icon="el-icon-delete" @click="batchRemove"  class="btnsBorderno" :disabled="this.sels.length===0">批量删除</el-button>
						</el-col>
					</el-row>
		<!--列表-->
		
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" :header-cell-style="tableHeaderColor" :default-sort = "{prop: 'birth', order: 'descending'}" style="width: 100%; margin: 7px 0px 0px 0px;">
			<el-table-column type="selection" >
			</el-table-column>
			<el-table-column type="index">
			</el-table-column>
			<el-table-column prop="name" :label="type_name" min-width="8%">
			</el-table-column>
			<el-table-column prop="sex" :label="statue" :formatter="formatSex" min-width="6%">
			</el-table-column>
            <el-table-column prop="sex" :label="type" :formatter="formatSex" min-width="6%">
			</el-table-column>
            <el-table-column prop="addr" :label="vender" min-width="14%">
			</el-table-column>
			<el-table-column prop="birth" :label="start_date" sortable min-width="10%">
			</el-table-column>
            <el-table-column prop="name" :label="creater" min-width="6%">
			</el-table-column>
            <el-table-column prop="name" :label="changer" min-width="8%">
			</el-table-column>
			<el-table-column prop="birth" :label="end_date" min-width="9%">
			</el-table-column>
			<el-table-column label="操作" min-width="15%">
				<template scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="mini" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-col :span="24" class="pagination">
			<el-pagination layout="prev, pager, next" background  @current-change="handleCurrentChange"  :page-size="pagesize" :current-page="page" :total="total">
			</el-pagination>
		</el-col>
	</el-card>
	</el-col>
		<!--工具条-->
		

		<!--编辑界面-->
		<el-dialog title="编辑" :visible.syn="editFormVisible" @close="editFormVisible=false">
			<el-form :model="editForm" label-width="100px" :rules="editFormRules" ref="editForm">
				<el-form-item :label="type_name" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item :label="vender">
					<el-input type="textarea" v-model="editForm.addr"></el-input>
				</el-form-item>
                <el-form-item :label="type">
					<el-radio-group v-model="editForm.sex">
						<el-radio class="radio" :label="1">启用</el-radio>
						<el-radio class="radio" :label="0">停用</el-radio>
					</el-radio-group>
				</el-form-item>
                <el-form-item label="api_key">
					<el-input auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="api_secret">
					<el-input auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item :label="statue">
					<el-radio-group v-model="editForm.sex">
						<el-radio class="radio" :label="1">启用</el-radio>
						<el-radio class="radio" :label="0">停用</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

		<!--新增界面-->
		<el-dialog title="新增" :visible.syn="addFormVisible" @close="addFormVisible=false">
			<el-form :model="addForm" label-width="100px" :rules="addFormRules" ref="addForm">
				<el-form-item :label="type_name" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item :label="vender">
					<el-input v-model="addForm.addr" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item :label="type">
					<el-radio-group v-model="editForm.sex">
						<el-radio class="radio" :label="1">启用</el-radio>
						<el-radio class="radio" :label="0">停用</el-radio>
					</el-radio-group>
				</el-form-item>
                <el-form-item label="api_key">
					<el-input auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="api_secret">
					<el-input auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item :label="statue">
					<el-radio-group v-model="addForm.sex">
						<el-radio class="radio" :label="1">启用</el-radio>
						<el-radio class="radio" :label="0">停用</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	import util from '@/common/js/util'
	//import NProgress from 'nprogress'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '@/api/api';
  import {changeAsideHeight} from '../../assets/js/public'
	export default {
		data() {
			return {
				filters: {
					name: '',
					value1:'',
					value:'',
                },
                type_name:'引擎名称',
                statue:'状态',
                type:'类型',
                vender:'厂家',
                start_date:'创建日期',
                creater:'创建人',
                changer:'最后修改者',
                end_date:'最后修改日期',
                title:'能力引擎管理表',
				users: [],
				total: 0,
				page: 1,
				pagesize:10,
				listLoading: false,
				downloadLoading:false,
				sels: [],//列表选中列

				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				},

				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				}

			}
		},
		mounted() {
			this.getUsers();
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '启用' : row.sex == 0 ? '停用' : '未知';
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getUsers()
			},
			//获取用户列表
			getUsers() {
				let para = {
					page: this.page,
					name: this.filters.name
				};
				this.listLoading = true;
				//NProgress.start();
				getUserListPage(para).then((res) => {
					this.total = res.data.total;
					this.users = res.data.users;
					this.listLoading = false;
					//NProgress.done();
					
				});
			
			},
			//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					removeUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				};
			},
			//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.editForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							editUser(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '修改成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
			//新增
			addSubmit: function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.addForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							addUser(para).then((res) => {
								this.addLoading = false;
								//NProgress.done();
								this.$message({
									message: '新增成功',
									type: 'success'
								});
								this.$refs['addForm'].resetFields();
								this.addFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
			selsChange: function (sels) {
				this.sels = sels;
			},
			//批量删除
			batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { ids: ids };
					batchRemoveUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
		handleDownload() {
	      this.downloadLoading = true
	      import('@/vendor/Export2Excel').then(excel => {
	        const tHeader = ['name', 'sex', 'age', 'birth', 'addr']
	        const filterVal = ['name', 'sex', 'age', 'birth', 'addr']
	        const data = this.formatJson(filterVal, this.users)
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
			},
			resetForm(formName) {
        this.$refs[formName].resetFields();
			},
			tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: lightblue;color: #fff;font-weight: 500;'
      }
    }
		},
	
	}

</script>

<style scoped>
section{margin-top: -85px;}
.el-dialog{text-align: left;}
.box-card{width: 100%;min-height: 100px; height: auto;margin: 0px 0px 10px 0px; text-align: center; border-radius: 5px;}
.pagination{background: white;margin: -6px 0px 10px 0px;text-align:center;width:100%;height: 60px;padding-top: 15px}
.btns{margin: 20px 0px 10px 0px;padding:7px; text-align: right !important;}
.title{font-size: .8rem;color:#25476a !important;}
.tabletitle {
   
    margin: -20px -10px 0px -10px;
}
.titletext{
    text-align: left;
    padding: 9px;
}
.titlebtns{
    text-align: right;
    padding-right: 10px;
		}
		.btnsBorderno{color: #000 !important;border:none !important;background: transparent !important;}
</style>