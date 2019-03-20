<template>
	<div id="lineChart" :style="{width:'99%'}"></div>
</template>

<script>
	import echarts from "echarts";
	import {EleResize} from "../../assets/js/esresize.js"
	 export default {
        name: "lineChart",
        mounted(){
        this.drawChart();
       },
      methods:{
          drawChart(){
          let lineChart=this.$echarts.init(document.getElementById('lineChart'));
          let resizeDiv=document.getElementById("lineChart")
          lineChart.setOption({
          	    backgroundColor: '#183052',
          	     color: ['#ffd285', '#ff733f', '#ec4863'],
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        x: 300,
			        top: '7%',
			        textStyle: {
			            color: '#ffd285',
			        },
			        data: ['正常', '偏高', '超标']
			    },
			    grid: {
			        left: '1%',
			        right: '35%',
			        top: '16%',
			        bottom: '6%',
			        containLabel: true
			    },
			    toolbox: {
			        "show": false,
			        feature: {
			            saveAsImage: {}
			        }
			    },
			    xAxis: {
			        type: 'category',
			        "axisLine": {
			            lineStyle: {
			                color: '#FF4500'
			            }
			        },
			        "axisTick": {
			            "show": false
			        },
			        axisLabel: {
			            textStyle: {
			                color: '#fff'
			            }
			        },
			        boundaryGap: false,
			        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
			    },
			    yAxis: {
			        "axisLine": {
			            lineStyle: {
			                color: '#fff'
			            }
			        },
			        splitLine: {
			            show: true,
			            lineStyle: {
			                color: '#fff'
			            }
			        },
			        "axisTick": {
			            "show": false
			        },
			        axisLabel: {
			            textStyle: {
			                color: '#fff'
			            }
			        },
			        type: 'value'
			    },
			    series: [{
			            name: '正常',
			            smooth: true,
			            type: 'line',
			            symbolSize: 8,
			            symbol: 'circle',
			            data: [90, 110, 139, 142, 130, 142, 130,133]
			        }, {
			            name: '偏高',
			            smooth: true,
			            type: 'line',
			            symbolSize: 8,
			            symbol: 'circle',
			            data: [70, 50, 50, 87, 90, 80, 70,72]
			        }, {
			            name: '超标',
			            smooth: true,
			            type: 'line',
			            symbolSize: 8,
			            symbol: 'circle',
			            data: [20, 22, 20, 32, 15, 20, 19,22]
			        },
			        {
			            type: 'pie',
			            center: ['83%', '33%'],
			            radius: ['25%', '30%'],
			            label: {
			                normal: {
			                    position: 'center'
			                }
			            },
			            data: [{
			                value: 180,
			                tooltip: {
			                    show: true
			                },
			                itemStyle: {
			                    normal: {
			                        color: '#ffd285'
			                    }
			                },
			                
			            }, {
			                value: 180,
			                tooltip: {
			                    show: false
			                },
			                itemStyle: {
			                    normal: {
			                        color: '#ff733f'
			                    },
			                    top:'10%'
			                },
			                
			            }, {
			                value: 335,
			                itemStyle: {
			                    normal: {
			                        color: '#ec4863'
			                    }
			                },
			                
			            }]
			        },
			
			
			        {
			            type: 'pie',
			            center: ['83%', '72%'],
			            radius: ['25%', '30%'],
			            label: {
			                normal: {
			                    position: 'center'
			                }
			            },
			            data: [{
			                value: 180,
			                tooltip: {
			                    show: false
			                },
			                itemStyle: {
			                    normal: {
			                        color: '#ffd285'
			                    }
			                },
			                
			            }, {
			                value: 180,
			                tooltip: {
			                    show: false
			                },
			                itemStyle: {
			                    normal: {
			                        color: '#AACD06'
			                    }
			                },
			                
			            }, {
			                value: 335,
			                itemStyle: {
			                    normal: {
			                        color: '#ec4863',
			                        fontSize:8
			                    }
			                },
			               
			            }]
			        }
			    ]
			   
          })
          
          let listener=function(){
				lineChart.resize();
			}
			EleResize.on(resizeDiv,listener)
        }
      }
    }
</script>

<style scoped>
#lineChart{height:8rem;margin-top: 30px;width: 100%;}
</style>