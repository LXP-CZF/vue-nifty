<template>
  <!--<div class="expand">-->
    <el-row :gutter="5">
    	<el-col  :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
    		  <!-- <el-button @click="handleAddTop" style="margin-top: 10px;">添加顶级节点</el-button> -->
        <el-tree ref="expandMenuList" class="expand_tree"
        v-if="isLoadingTree"
        :data="setTree"
        node-key="id"
        highlight-current
        :props="defaultProps"
        
        @node-click="handleNodeClick"></el-tree>  <!--树节点的内容区的渲染 Function-->
    	</el-col>
    	<el-col  :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
    		<Table></Table>
    	</el-col>
    </el-row>
      
      <!--</div>
  </div>-->
</template>
<!-- VUE饿了么树形控件添加增删改功能按钮 -->
<script>
import TreeRender from './tree_render'
import Table from '@/components/Table.vue'
import api from '@/api/city'

  export default{
    name: 'tree',
     components:{
    	Table
    },
    data(){
      return{
        maxexpandId: api.maxexpandId,//新增节点开始id
        non_maxexpandId: api.maxexpandId,//新增节点开始id(不更改)
        isLoadingTree: false,//是否加载节点树
        setTree: api.treelist,//节点树数据
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        defaultExpandKeys: [],//默认展开节点列表
      }
    },
    mounted(){
      this.initExpand()
    },
    methods: {
      initExpand(){
        this.setTree.map((a) => {
          this.defaultExpandKeys.push(a.id)
        });
        this.isLoadingTree = true;
      },
      handleNodeClick(data){//点击节点
        alert(data.name);
        data.isEdit = false;//放弃编辑状态
      },
      renderContent(h,{node,data,store}){//加载节点
        let that = this;
        return h(TreeRender,{
          props: {
            DATA: data,
            NODE: node,
            STORE: store,
            maxexpandId: that.non_maxexpandId
          },
          on: {
            nodeAdd: ((s,d,n) => that.handleAdd(s,d,n)),
            nodeEdit: ((s,d,n) => that.handleEdit(s,d,n)),
            nodeDel: ((s,d,n) => that.handleDelete(s,d,n))
          }
        });
      },
      handleAddTop(){
        this.setTree.push({
          id: ++this.maxexpandId,
          name: '新增节点',
          pid: '',
          isEdit: false,
          children: []
        })
      },
      handleAdd(s,d,n){//增加节点
        if(n.level >=6){
          this.$message.error("最多只支持五级！")
          return false;
        }
        //添加数据
        d.children.push({
          id: ++this.maxexpandId,
          name: '新增节点',
          pid: d.id,
          isEdit: false,
          children: []
        });
        //展开节点
        if(!n.expanded){
          n.expanded = true;
        }
      },
      handleEdit(s,d,n){//编辑节点
        console.log(s,d,n)
      },
      handleDelete(s,d,n){//删除节点
        console.log(s,d,n)
        let that = this;
        //有子级不删除
        if(d.children && d.children.length !== 0){
          this.$message.error("此节点有子级，不可删除！")
          return false;
        }else{
          //新增节点直接删除，否则要询问是否删除
          let delNode = () => {
            let list = n.parent.data.children || n.parent.data,//节点同级数据
              _index = 99999;//要删除的index
            /*if(!n.parent.data.children){//删除顶级节点，无children
              list = n.parent.data
            }*/
            list.map((c,i) => {
              if(d.id == c.id){
                _index = i;
              }
            })
            let k = list.splice(_index,1);
            //console.log(_index,k)
            this.$message.success("删除成功！")
          }
          let isDel = () => {
            that.$confirm("是否删除此节点？","提示",{
              confirmButtonText: "确认",
              cancelButtonText: "取消",
              type: "warning"
            }).then(() => {
              delNode()
            }).catch(() => {
              return false;
            })
          }
          //判断是否新增
          d.id > this.non_maxexpandId ? delNode() : isDel()
          
        }
      },
    }
    
  }
</script>

<style scoped>
.expand_tree{margin-top:-60px;}
</style>