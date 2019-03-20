<template>
    <!--首页-->
	<el-main>
	<el-row><span class="push-left">DASHBOART</span> </el-row>
   <el-row :gutter="10">
     <el-col  :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
       <el-card class="box-card">
         <div class="class_i"><i class="el-icon-edit"></i></div>
         <div  class="class_text"><h1>241</h1></div>
       </el-card>
     </el-col>
     <el-col  :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
       <div class="divbox primaryColor">
         <div class="class_i"><i class="el-icon-message"></i></div>
         <div  class="class_text"><h1>22</h1></div>
       </div>
     </el-col>
     <el-col  :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
       <el-card class="box-card">
         <div class="class_i"><i class="el-icon-delete"></i></div>
         <div  class="class_text"><h1>261</h1></div>
       </el-card>
     </el-col>
     <el-col  :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
       <div class="divbox primaryColor">
       <div class="class_i"><i class="el-icon-share"></i></div>
         <div  class="class_text"><h1>21</h1></div>
       </div>
     </el-col>
     <el-col  :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
       <el-card class="box-card">
         <div class="class_i"><i class="el-icon-upload"></i></div>
         <div  class="class_text"><h1>241</h1></div>
       </el-card>
     </el-col>
     <el-col  :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
       <div class="divbox primaryColor">
       <div class="class_i"><i class="el-icon-sold-out"></i></div>
         <div  class="class_text"><h1>363</h1></div>
       </div>
     </el-col>
   </el-row>
  <el-row>
    <el-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    <div id="myChart" :style="{width:'100%',height: '450px',marginTop:'10px',marginBottom:'25px',backgroundColor:'#fff',paddingTop:'15px'}"></div>
    </el-col>
  </el-row>
    <el-row style="background: #2C3034">
      <el-col  :xs="6" :sm="6" :md="6" :lg="3" :xl="3" class="card">
        <p>Element React</p>
        <span>users</span>
        <h1 class="number">3460</h1>
      </el-col>
      <el-col  :xs="6" :sm="6" :md="6" :lg="3" :xl="3" class="card">
        <p>Element Angular</p>
        <span>users</span>
        <h1 class="number">375</h1>
      </el-col>
      <el-col  :xs="6" :sm="6" :md="6" :lg="3" :xl="3" class="card">
        <p>Users</p>
        <span>Element Vue</span>
        <h1 class="number" style="color: #e67a7a;">33631</h1>
      </el-col>
      <el-col  :xs="6" :sm="6" :md="6" :lg="3" :xl="3" class="card">
        <p>git \Element\Vue</p>
        <span>Star</span>
        <h1 class="number">57%</h1>
      </el-col>
      <el-col  :xs="6" :sm="6" :md="6" :lg="3" :xl="3" class="card">
        <p>gitHub \star</p>
        <span>Element React</span>
        <h1 class="number" style="color: #5ac35a">1941</h1>
      </el-col>
      <el-col  :xs="6" :sm="6" :md="6" :lg="3" :xl="3" class="card">
        <p>Star</p>
        <span>gitHub \Angular</span>
        <h1 class="number">375</h1>
      </el-col>
      <el-col  :xs="6" :sm="6" :md="6" :lg="3" :xl="3" class="card">
        <p>Element React</p>
        <span>users</span>
        <h1 class="number"  style="color: #5ac35a">3460</h1>
      </el-col>
      <el-col  :xs="6" :sm="6" :md="6" :lg="3" :xl="3" class="card">
        <p>Element React</p>
        <span>users</span>
        <h1 class="number">3460</h1>
      </el-col>
    </el-row>
    <el-row style="margin-top: 25px" :gutter="20">
      <el-col  :xs="24" :sm="24" :md="24" :lg="9" :xl="9">
        <div id="chartPie" :style="{width:'100%',height: '350px',marginTop:'10px',backgroundColor:'#fff',paddingTop:'15px'}"></div>
      </el-col>
      <el-col  :xs="24" :sm="24" :md="24" :lg="15" :xl="15">
        <div id="chartBar" :style="{width:'100%',height: '350px',marginTop:'10px',backgroundColor:'#fff',paddingTop:'15px'}"></div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 25px">
      <el-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div id="chartDate" :style="{width:'100%',height: '450px',marginTop:'10px',backgroundColor:'#fff',paddingTop:'15px'}"></div>
      </el-col>
    </el-row>
	</el-main>
</template>

<script>
  import echarts from "echarts";
  import {EleResize} from "../../assets/js/esresize.js"
  export default {
    data() {
      return {
        value6: '',
        value7: '',
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    },
    mounted(){
      this.drawLine();
      this.drawPie();
      this.drawBar();
      this.drawDate();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let resizeDiv=document.getElementById("myChart")
        var dataBJ = [
          [1,55,9,56,0.46,18,6,"良"],
          [2,25,11,21,0.65,34,9,"优"],
          [3,56,7,63,0.3,14,5,"良"],
          [4,33,7,29,0.33,16,6,"优"],
          [5,42,24,44,0.76,40,16,"优"],
          [6,82,58,90,1.77,68,33,"良"],
          [7,74,49,77,1.46,48,27,"良"],
          [8,78,55,80,1.29,59,29,"良"],
          [9,267,216,280,4.8,108,64,"重度污染"],
          [10,185,127,216,2.52,61,27,"中度污染"],
          [11,39,19,38,0.57,31,15,"优"],
          [12,41,11,40,0.43,21,7,"优"],
          [13,64,38,74,1.04,46,22,"良"],
          [14,108,79,120,1.7,75,41,"轻度污染"],
          [15,108,63,116,1.48,44,26,"轻度污染"],
          [16,33,6,29,0.34,13,5,"优"],
          [17,94,66,110,1.54,62,31,"良"],
          [18,186,142,192,3.88,93,79,"中度污染"],
          [19,57,31,54,0.96,32,14,"良"],
          [20,22,8,17,0.48,23,10,"优"],
          [21,39,15,36,0.61,29,13,"优"],
          [22,94,69,114,2.08,73,39,"良"],
          [23,99,73,110,2.43,76,48,"良"],
          [24,31,12,30,0.5,32,16,"优"],
          [25,42,27,43,1,53,22,"优"],
          [26,154,117,157,3.05,92,58,"中度污染"],
          [27,234,185,230,4.09,123,69,"重度污染"],
          [28,160,120,186,2.77,91,50,"中度污染"],
          [29,134,96,165,2.76,83,41,"轻度污染"],
          [30,52,24,60,1.03,50,21,"良"],
          [31,46,5,49,0.28,10,6,"优"]
        ];

        var dataGZ = [
          [1,26,37,27,1.163,27,13,"优"],
          [2,85,62,71,1.195,60,8,"良"],
          [3,78,38,74,1.363,37,7,"良"],
          [4,21,21,36,0.634,40,9,"优"],
          [5,41,42,46,0.915,81,13,"优"],
          [6,56,52,69,1.067,92,16,"良"],
          [7,64,30,28,0.924,51,2,"良"],
          [8,55,48,74,1.236,75,26,"良"],
          [9,76,85,113,1.237,114,27,"良"],
          [10,91,81,104,1.041,56,40,"良"],
          [11,84,39,60,0.964,25,11,"良"],
          [12,64,51,101,0.862,58,23,"良"],
          [13,70,69,120,1.198,65,36,"良"],
          [14,77,105,178,2.549,64,16,"良"],
          [15,109,68,87,0.996,74,29,"轻度污染"],
          [16,73,68,97,0.905,51,34,"良"],
          [17,54,27,47,0.592,53,12,"良"],
          [18,51,61,97,0.811,65,19,"良"],
          [19,91,71,121,1.374,43,18,"良"],
          [20,73,102,182,2.787,44,19,"良"],
          [21,73,50,76,0.717,31,20,"良"],
          [22,84,94,140,2.238,68,18,"良"],
          [23,93,77,104,1.165,53,7,"良"],
          [24,99,130,227,3.97,55,15,"良"],
          [25,146,84,139,1.094,40,17,"轻度污染"],
          [26,113,108,137,1.481,48,15,"轻度污染"],
          [27,81,48,62,1.619,26,3,"良"],
          [28,56,48,68,1.336,37,9,"良"],
          [29,82,92,174,3.29,0,13,"良"],
          [30,106,116,188,3.628,101,16,"轻度污染"],
          [31,118,50,0,1.383,76,11,"轻度污染"]
        ];

        var dataSH = [
          [1,91,45,125,0.82,34,23,"良"],
          [2,65,27,78,0.86,45,29,"良"],
          [3,83,60,84,1.09,73,27,"良"],
          [4,109,81,121,1.28,68,51,"轻度污染"],
          [5,106,77,114,1.07,55,51,"轻度污染"],
          [6,109,81,121,1.28,68,51,"轻度污染"],
          [7,106,77,114,1.07,55,51,"轻度污染"],
          [8,89,65,78,0.86,51,26,"良"],
          [9,53,33,47,0.64,50,17,"良"],
          [10,80,55,80,1.01,75,24,"良"],
          [11,117,81,124,1.03,45,24,"轻度污染"],
          [12,99,71,142,1.1,62,42,"良"],
          [13,95,69,130,1.28,74,50,"良"],
          [14,116,87,131,1.47,84,40,"轻度污染"],
          [15,108,80,121,1.3,85,37,"轻度污染"],
          [16,134,83,167,1.16,57,43,"轻度污染"],
          [17,79,43,107,1.05,59,37,"良"],
          [18,71,46,89,0.86,64,25,"良"],
          [19,97,71,113,1.17,88,31,"良"],
          [20,84,57,91,0.85,55,31,"良"],
          [21,87,63,101,0.9,56,41,"良"],
          [22,104,77,119,1.09,73,48,"轻度污染"],
          [23,87,62,100,1,72,28,"良"],
          [24,168,128,172,1.49,97,56,"中度污染"],
          [25,65,45,51,0.74,39,17,"良"],
          [26,39,24,38,0.61,47,17,"优"],
          [27,39,24,39,0.59,50,19,"优"],
          [28,93,68,96,1.05,79,29,"良"],
          [29,188,143,197,1.66,99,51,"中度污染"],
          [30,174,131,174,1.55,108,50,"中度污染"],
          [31,187,143,201,1.39,89,53,"中度污染"]
        ];

        var schema = [
          {name: 'date', index: 0, text: '日'},
          {name: 'AQIindex', index: 1, text: 'AQI指数'},
          {name: 'PM25', index: 2, text: 'PM2.5'},
          {name: 'PM10', index: 3, text: 'PM10'},
          {name: 'CO', index: 4, text: '一氧化碳（CO）'},
          {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
          {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
        ];


        var itemStyle = {
          normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        };
        // 绘制图表
        myChart.setOption({
          backgroundColor: '#fff',
          color: [
            '#4F7AA9', '#dd4444', '#fec42c'
          ],
          legend: {
            y: 'top',
            data: ['北京', '上海', '广州'],
            textStyle: {
              color: '#000',
              fontSize: 16
            }
          },
          grid: {
            x: '10%',
            x2: 150,
            y: '18%',
            y2: '10%'
          },
          tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
              var value = obj.value;
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName + ' ' + value[0] + '日：'
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                + schema[4].text + '：' + value[4] + '<br>'
                + schema[5].text + '：' + value[5] + '<br>'
                + schema[6].text + '：' + value[6] + '<br>';
            }
          },
          xAxis: {
            type: 'value',
            name: '日期',
            nameGap: 16,
            nameTextStyle: {
              color: '#000',
              fontSize: 14
            },
            max: 31,
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#000'
              }
            }
          },
          yAxis: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
              color: '#000',
              fontSize: 16
            },
            axisLine: {
              lineStyle: {
                color: '#000'
              }
            },
            splitLine: {
              show: false
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              dimension: 2,
              min: 0,
              max: 250,
              itemWidth: 30,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：PM2.5'],
              textGap: 30,
              textStyle: {
                color: '#000'
              },
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['#000']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            },
            {
              left: 'right',
              bottom: '5%',
              dimension: 6,
              min: 0,
              max: 50,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['明暗：二氧化硫'],
              textGap: 30,
              textStyle: {
                color: '#000'
              },
              inRange: {
                colorLightness: [1, 0.5]
              },
              outOfRange: {
                color: ['#000']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            }
          ],
          series: [
            {
              name: '北京',
              type: 'scatter',
              itemStyle: itemStyle,
              data: dataBJ
            },
            {
              name: '上海',
              type: 'scatter',
              itemStyle: itemStyle,
              data: dataSH
            },
            {
              name: '广州',
              type: 'scatter',
              itemStyle: itemStyle,
              data: dataGZ
            }
          ]
        });
        let listener=function(){
			myChart.resize();
		}
		EleResize.on(resizeDiv,listener)
      },
      drawPie(){
        let chartPie = this.$echarts.init(document.getElementById('chartPie'))
        let resizeDiv2=document.getElementById("chartPie")
        chartPie.setOption({
          color: [
            '#fec42c', '#dd4444', '#4F7AA9'
          ],
          angleAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            z: 10
          },
          radiusAxis: {
          },
          polar: {
          },
          series: [{
            type: 'bar',
            data: [1, 2, 3, 4, 3, 5, 1],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a'
          }, {
            type: 'bar',
            data: [2, 4, 6, 1, 3, 2, 1],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a'
          }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a'
          }],
          legend: {
            show: true,
            data: ['A', 'B', 'C']
          }
        });
        let listener2=function(){
			chartPie.resize();
		}
		EleResize.on(resizeDiv2,listener2)
      },
      drawBar(){
        let chartBar = this.$echarts.init(document.getElementById('chartBar'))
        let resizeDiv3=document.getElementById("chartBar")
        chartBar.setOption({
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'直接访问',
              type:'bar',
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'邮件营销',
              type:'bar',
              stack: '广告',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'联盟广告',
              type:'bar',
              stack: '广告',
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'视频广告',
              type:'bar',
              stack: '广告',
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'搜索引擎',
              type:'bar',
              data:[862, 1018, 964, 1026, 1679, 1600, 1570],
              markLine : {
                lineStyle: {
                  normal: {
                    type: 'dashed'
                  }
                },
                data : [
                  [{type : 'min'}, {type : 'max'}]
                ]
              }
            },
            {
              name:'百度',
              type:'bar',
              barWidth : 5,
              stack: '搜索引擎',
              data:[620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
              name:'谷歌',
              type:'bar',
              stack: '搜索引擎',
              data:[120, 132, 101, 134, 290, 230, 220]
            },
            {
              name:'必应',
              type:'bar',
              stack: '搜索引擎',
              data:[60, 72, 71, 74, 190, 130, 110]
            },
            {
              name:'其他',
              type:'bar',
              stack: '搜索引擎',
              data:[62, 82, 91, 84, 109, 110, 120]
            }
          ]
        });
        
      let listener3=function(){
			chartBar.resize();
		}
		EleResize.on(resizeDiv3,listener3)
      },
      drawDate(){
        let chartDate = this.$echarts.init(document.getElementById('chartDate'))
        let resizeDiv4=document.getElementById("chartDate")
        var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
        var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        var yMax = 500;
        var dataShadow = [];

        for (var i = 0; i < data.length; i++) {
          dataShadow.push(yMax);
        }

        chartDate.setOption({
          title: {
            text: '特性示例：渐变色 阴影 点击缩放',
            subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
          },
          xAxis: {
            data: dataAxis,
            axisLabel: {
              inside: true,
              textStyle: {
                color: '#fff'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            z: 10
          },
          yAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#999'
              }
            }
          },
          dataZoom: [
            {
              type: 'inside'
            }
          ],
          series: [
            { // For shadow
              type: 'bar',
              itemStyle: {
                normal: {color: 'rgba(0,0,0,0.05)'}
              },
              barGap:'-100%',
              barCategoryGap:'40%',
              data: dataShadow,
              animation: false
            },
            {
              type: 'bar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#83bff6'},
                      {offset: 0.5, color: '#188df0'},
                      {offset: 1, color: '#188df0'}
                    ]
                  )
                },
                emphasis: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#2378f7'},
                      {offset: 0.7, color: '#2378f7'},
                      {offset: 1, color: '#83bff6'}
                    ]
                  )
                }
              },
              data: data
            }
          ]
        });

// Enable data zoom when user click bar.
        var zoomSize = 6;
        chartDate.on('click', function (params) {
          chartDate.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
          });
        });
       let listener4=function(){
			chartDate.resize();
		}
		EleResize.on(resizeDiv4,listener4)
      },
  tableRowClassName({row, rowIndex}) {
    if (rowIndex === 1) {
      return 'warning-row';
    } else if (rowIndex === 3) {
      return 'success-row';
    }
    return '';
  }
    }
  }
</script>

<style scoped>
  .el-main {
    background-color: #ecf0f5;
    color: #333;
    text-align: center;
    min-height: 100%;
    height:100%;
    width: 100%;
     }

  .push-left{float: left;margin-bottom: 12px;font-weight: bold}
  .box-card{padding-left: 15%;margin-bottom: 10px}
  .class_i{float: left;margin-right: 15px;font-size: 1.5em}
  .class_text{float: left;margin-bottom: 20px}
  .box{background: #4F7AA9 !important;color: #ffffff !important;}
  .divbox{width: 78%; height: 4.1875rem;text-align: center;line-height: 4.1875rem;color: #fff;padding-left: 23%;}
  .el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
  .card{background-color: #2C3034;color: white; text-align: left; padding: 17px 0px 13px 45px;font-size:0.8125rem;}
  .el-progress{margin-bottom: 30px}
.number{padding-top: 5px}
</style>
