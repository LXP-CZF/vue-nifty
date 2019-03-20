<template>
  <!--布局-->
  <div>
      <el-row :gutter="20" style="background-color: #ecf0f5;padding:0px 20px 0px 20px;">
        <el-col  :xs="24" :sm="24" :md="11" :lg="11" :xl="11" style="margin-top:-50px;">
          <el-row :gutter="20">
            <el-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="liteBanner primaryColor">
                <i class="el-icon-message"></i> DATEBASE
                <span>MORE</span>
              </div>
              <el-tabs type="border-card">
                <el-tab-pane label="table">
                  <el-table
                    :data="tableData3"
                    style="width: 100%;">
                    <el-table-column
                      prop="date"
                      label="日期"
                      >
                    </el-table-column>
                      <el-table-column label="配送信息">
                        <el-table-column
                          prop="province"
                          label="省份"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="city"
                          label="市区"
                         >
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          label="地址11"
                         >
                        </el-table-column>
                      </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="get you">Super</el-tab-pane>
              </el-tabs>
          </el-col>
            <el-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="margin-top: 20px">
                <div class="liteBanner" style="background-color: #8ec6ad !important;">
                  <i class="el-icon-message"></i> DATEBASE
                  <span>MORE</span>
                </div>
                <datazoom></datazoom>
              </el-col>
          </el-row>
      </el-col>
        <el-col  :xs="24" :sm="24" :md="13" :lg="13" :xl="13" style="margin-top:-50px;">
          <div class="liteBanner primaryColor">
            <i class="el-icon-message"></i> DATEBASE
            <span>MORE</span>
          </div>
          <radar></radar>
        </el-col>
      </el-row>
      </div>
</template>

<script>
  import datazoom from '@/views/echarts/dataZoom.vue'
  import radar from '@/views/echarts/radar.vue'
    export default {
        name: "basic_button",
     data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区',
        }]
      }
    },
      components:{
          datazoom,
          radar
      }


    }
</script>

<style scoped>
.liteBanner{height: 2.1875rem;width: 96.5%;color: #ffffff;line-height: 2.1875rem;text-align: left;padding: 0px 10px 0px 10px}
 span{float: right}
 .el-tabs__nav {
    white-space: nowrap;
    position: relative;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
    transition: transform .3s,-webkit-transform .3s;
    float: left;
    z-index: 0;
 }
</style>
