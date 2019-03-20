<template>
	<el-row :gutter="10" style="width:100%;background: #183052;margin: -25px 0px 0px 25px;">
		<el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" style="padding-top: 30px;padding-left: 17px; color: #FFF;font-family:'华文行楷';">
			<h4>污染源</h4>
			<h3>污染处理</h3>
			<h3>SO2\CO2</h3>
		</el-col>
		<el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
	    <div id='main' :style="{width:'100%',paddingTop:'10px'}"></div>
		</el-col>
		<el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
			<div id='main2' :style="{width:'100%',paddingTop:'10px'}"></div>
		</el-col>
		<el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
			<div id='main3' :style="{width:'100%',paddingTop:'10px'}"></div>
		</el-col>
	</el-row>

</template>

<script>
	import echarts from "echarts";
	import "echarts-gl";
	import "../../../node_modules/echarts/map/js/china.js";
	import {EleResize} from "../../assets/js/esresize.js"
	export default {
        name: "china",
		mounted() {
				this.drawChart();
			},
	    methods: {
		drawChart() {
			let mainChart= this.$echarts.init(document.getElementById('main'))
			let main2Chart= this.$echarts.init(document.getElementById('main2'))
			let main3Chart= this.$echarts.init(document.getElementById('main3'))
			let resizeDiv=document.getElementById("main")
			let resizeDiv2=document.getElementById("main2")
			let resizeDiv3=document.getElementById("main3")
			mainChart.setOption({
			    //"backgroundColor": "#1c2e40",
			    "color": "#384757",
			    "tooltip": {
			      "trigger": "axis",
			      "axisPointer": {
			        "type": "cross",
			        "crossStyle": {
			          "color": "#384757"
			        }
			      }
			    },
			    /*"legend": {
			      "data": [
			        {
			          "name": "人为",
			          "icon": "circle",
			          "textStyle": {
			            "color": "#7d838b",
			            "fontSize":'12px'
			          }
			        },
			        {
			          "name": "非人为",
			          "icon": "circle",
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        },
			        /*{
			          "name": "完成率",
			          "icon": "circle",
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        }
			      ],
			      "top": "1%",
			      "textStyle": {
			        "color": "#fff"
			      }
			    },*/
			    "xAxis": [
			      {
			        "type": "category",
			        "data": [
			          "北京",
			          "广州",
			          "深圳",
			          "西安",
			          "云浮"
			        ],
			        "axisPointer": {
			          "type": "shadow"
			        },
			        "axisLabel": {
			          "show": false,
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        },
			         splitLine: {
		                show: false
		            },
			      }
			    ],
			    "yAxis": [
			      {
			        "type": "value",
			       // "name": "污染数",
			        "nameTextStyle": {
			          "color": "#7d838b"
			        },
			        "min": 0,
			        "max": 50,
			        "interval": 10,
			        "axisLabel": {
			          "show": false,
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        },
			        "axisLine": {
			          "show": false
			        },
			        "splitLine": {
			        	 "show": false,
			          "lineStyle": {
			            "color": "#7d838b"
			          }
			        }
			      },
			      /*{
			        "type": "value",
			        "name": "完成率",
			        "show": true,
			        "axisLabel": {
			          "show": true,
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        }
			      }*/
			    ],
			    "grid": {
			      "top": "1%",
			      "bottom":"5%"
			    },
			    "series": [
			      {
			        "name": "人为",
			        "type": "bar",
			        "data": [
			          14,
			          16,
			          36,
			          16,
			          14
			        ],
			        "barWidth": "auto",
			        "itemStyle": {
			          "normal": {
			            "color": {
			              "type": "linear",
			              "x": 0,
			              "y": 0,
			              "x2": 0,
			              "y2": 1,
			              "colorStops": [
			                {
			                  "offset": 0,
			                  "color": "rgba(255,37,117,0.7)"
			                },
			                {
			                  "offset": 0.5,
			                  "color": "rgba(0,133,245,0.7)"
			                },
			                {
			                  "offset": 1,
			                  "color": "rgba(0,133,245,0.3)"
			                }
			              ],
			              "globalCoord": false
			            }
			          }
			        }
			      },
			      {
			        "name": "非人为",
			        "type": "bar",
			        "data": [
			          12,
			          12,
			          36,
			          16,
			          18,
			        ],
			        "barWidth": "auto",
			        "itemStyle": {
			          "normal": {
			            "color": {
			              "type": "linear",
			              "x": 0,
			              "y": 0,
			              "x2": 0,
			              "y2": 1,
			              "colorStops": [
			                {
			                  "offset": 0,
			                  "color": "rgba(255,37,117,0.7)"
			                },
			                {
			                  "offset": 0.5,
			                  "color": "rgba(0,255,252,0.7)"
			                },
			                {
			                  "offset": 1,
			                  "color": "rgba(0,255,252,0.3)"
			                }
			              ],
			              "globalCoord": false
			            }
			          }
			        },
			        "barGap": "0"
			      },
			   /*   {
			        "name": "完成率",
			        "type": "line",
			        "yAxisIndex": 1,
			        "data": [
			          100,
			          33,
			          100,
			          100,
			          100,
			          100
			        ],
			        "itemStyle": {
			          "normal": {
			            "color": "#ffaa00"
			          }
			        },
			        "smooth": true
			      }*/
			    ]
			})
				
			main2Chart.setOption({
			    //"backgroundColor": "#1c2e40",
			    "color": "#384757",
			    "tooltip": {
			      "trigger": "axis",
			      "axisPointer": {
			        "type": "cross",
			        "crossStyle": {
			          "color": "#384757"
			        }
			      }
			    },
			   /* "legend": {
			      "data": [
			        {
			          "name": "待处理",
			          "icon": "circle",
			          "textStyle": {
			            "color": "#7d838b",
			            "fontSize":'12px'
			          }
			        },
			        {
			          "name": "已处理",
			          "icon": "circle",
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        },
			        {
			          "name": "完成率",
			          "icon": "circle",
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        }
			      ],
			      "top": "1%",
			      "textStyle": {
			        "color": "#fff"
			      }
			    },*/
			    "xAxis": [
			      {
			        "type": "category",
			        "data": [
			          "北京",
			          "广州",
			          "深圳",
			          "西安",
			          "云浮"
			        ],
			        "axisPointer": {
			          "type": "shadow"
			        },
			        "axisLabel": {
			          "show": false,
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        },
			         splitLine: {
		                show: false
		            },
			      }
			    ],
			    "yAxis": [
			      {
			        "type": "value",

			        "nameTextStyle": {
			          "color": "#7d838b"
			        },
			        "min": 0,
			        "max": 50,
			        "interval": 10,
			        "axisLabel": {
			          "show": false,
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        },
			        "axisLine": {
			          "show": false
			        },
			        "splitLine": {
			        	 "show": false,
			          "lineStyle": {
			            "color": "#7d838b"
			          }
			        }
			      },
			      {
			        "type": "value",
			        "name": "完成率",
			        "show": false,
			        "axisLabel": {
			          "show": false,
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        }
			      }
			    ],
			    "grid": {
			      "top": "1%",
			      "bottom":"5%"
			    },
			    "series": [
			      {
			        "name": "待处理",
			        "type": "bar",
			        "data": [
			          14,
			          16,
			          36,
			          16,
			          14
			        ],
			        "barWidth": "auto",
			        "itemStyle": {
			          "normal": {
			            "color": {
			              "type": "linear",
			              "x": 0,
			              "y": 0,
			              "x2": 0,
			              "y2": 1,
			               "colorStops": [
			                {
			                  "offset": 1,
			                  "color": "rgba(255,37,117,0.7)"
			                },
			                {
			                  "offset": 0.5,
			                  "color": "rgba(0,255,252,0.7)"
			                },
			                {
			                  "offset": 0,
			                  "color": "rgba(0,255,252,0.3)"
			                }
			              ],
			              "globalCoord": false
			            }
			          }
			        }
			      },
			      {
			        "name": "已处理",
			        "type": "bar",
			        "data": [
			          12,
			          12,
			          36,
			          16,
			          18,
			        ],
			        "barWidth": "auto",
			        "itemStyle": {
			          "normal": {
			            "color": {
			              "type": "linear",
			              "x": 0,
			              "y": 0,
			              "x2": 0,
			              "y2": 1,
			              "colorStops": [
			                {
			                  "offset": 1,
			                  "color": "rgba(255,37,117,0.7)"
			                },
			                {
			                  "offset": 0,
			                  "color": "rgba(0,133,245,0.7)"
			                },
			                {
			                  "offset": 0.5,
			                  "color": "rgba(0,133,245,0.3)"
			                }
			              ],
			              "globalCoord": false
			            }
			          }
			        },
			        "barGap": "0"
			      },
			      {
			        "name": "完成率",
			        "type": "line",
			        "yAxisIndex": 1,
			        "data": [
			          100,
			          33,
			          100,
			          100,
			          100,
			          100
			        ],
			        "itemStyle": {
			          "normal": {
			            "color": "#ffaa00"
			          }
			        },
			        "smooth": true
			      }
			    ]
			})
					
			main3Chart.setOption({
			    //"backgroundColor": "#1c2e40",
			    "color": "#384757",
			    "tooltip": {
			      "trigger": "axis",
			      "axisPointer": {
			        "type": "cross",
			        "crossStyle": {
			          "color": "#384757"
			        }
			      }
			    },
			    /*"legend": {
			      "data": [
			        {
			          "name": "人为",
			          "icon": "circle",
			          "textStyle": {
			            "color": "#7d838b",
			            "fontSize":'12px'
			          }
			        },
			        {
			          "name": "非人为",
			          "icon": "circle",
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        },
			        /*{
			          "name": "完成率",
			          "icon": "circle",
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        }
			      ],
			      "top": "1%",
			      "textStyle": {
			        "color": "#fff"
			      }
			    },*/
			    "xAxis": [
			      {
			        "type": "category",
			        "data": [
			          "北京",
			          "广州",
			          "深圳",
			          "西安",
			          "云浮"
			        ],
			        "axisPointer": {
			          "type": "shadow"
			        },
			        "axisLabel": {
			          "show": false,
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        },
			         splitLine: {
		                show: false
		            },
			      }
			    ],
			    "yAxis": [
			      {
			        "type": "value",
			       // "name": "污染数",
			        "nameTextStyle": {
			          "color": "#7d838b"
			        },
			        "min": 0,
			        "max": 50,
			        "interval": 10,
			        "axisLabel": {
			          "show": false,
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        },
			        "axisLine": {
			          "show": false
			        },
			        "splitLine": {
			        	 "show": false,
			          "lineStyle": {
			            "color": "#7d838b"
			          }
			        }
			      },
			      /*{
			        "type": "value",
			        "name": "完成率",
			        "show": true,
			        "axisLabel": {
			          "show": true,
			          "textStyle": {
			            "color": "#7d838b"
			          }
			        }
			      }*/
			    ],
			    "grid": {
			      "top": "1%",
			      "bottom":"5%"
			    },
			    "series": [
			      {
			        "name": "SO2",
			        "type": "bar",
			        "data": [
			          14,
			          16,
			          36,
			          16,
			          14
			        ],
			        "barWidth": "auto",
			        "itemStyle": {
			          "normal": {
			            "color": {
			              "type": "linear",
			              "x": 0,
			              "y": 0,
			              "x2": 0,
			              "y2": 1,
			               "colorStops": [
			                {
			                  "offset": 0,
			                  "color": "rgba(255,37,117,0.7)"
			                },
			                {
			                  "offset": 0.5,
			                  "color": "rgba(0,255,252,0.7)"
			                },
			                {
			                  "offset": 1,
			                  "color": "rgba(0,255,252,0.3)"
			                }
			              ],
			              "globalCoord": false
			            }
			          }
			        }
			      },
			      {
			        "name": "CO2",
			        "type": "bar",
			        "data": [
			          12,
			          12,
			          36,
			          16,
			          18,
			        ],
			        "barWidth": "auto",
			        "itemStyle": {
			          "normal": {
			            "color": {
			              "type": "linear",
			              "x": 0,
			              "y": 0,
			              "x2": 0,
			              "y2": 1,
			              "colorStops": [
			                {
			                  "offset": 0,
			                  "color": "rgba(255,37,117,0.7)"
			                },
			                {
			                  "offset": 0.5,
			                  "color": "rgba(0,133,245,0.7)"
			                },
			                {
			                  "offset": 1,
			                  "color": "rgba(0,133,245,0.3)"
			                }
			              ],
			             
			              "globalCoord": false
			            }
			          }
			        },
			        "barGap": "0"
			      },
			   /*   {
			        "name": "完成率",
			        "type": "line",
			        "yAxisIndex": 1,
			        "data": [
			          100,
			          33,
			          100,
			          100,
			          100,
			          100
			        ],
			        "itemStyle": {
			          "normal": {
			            "color": "#ffaa00"
			          }
			        },
			        "smooth": true
			      }*/
			    ]
			})
				
			let listener=function(){
				mainChart.resize();
			}
			EleResize.on(resizeDiv,listener)
			
			let listener2=function(){
				main2Chart.resize();
			}
			EleResize.on(resizeDiv,listener2)
			
			let listener3=function(){
				main3Chart.resize();
			}
			EleResize.on(resizeDiv,listener3)

		}
	}
}
</script>

<style scoped>
	#main,#main2,#main3{height:6.25rem;}
</style>