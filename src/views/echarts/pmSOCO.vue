<template>
	<div id="myChart" :style="{width:'95%'}"></div>
</template>

<script>
	import echarts from "echarts";
	import {EleResize} from "../../assets/js/esresize.js"
	 export default {
        name: "myChart",
        mounted(){
        this.drawChart();
       },
      methods:{
          drawChart(){
          let myChart=this.$echarts.init(document.getElementById('myChart'));
          let resizeDiv=document.getElementById("myChart")
          myChart.setOption({
          	    backgroundColor: '#183052',
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            lineStyle: {
			                color: '#57617B'
			            }
			        }
			    },
			    legend: {
			        icon: 'rect',
			        itemWidth: 14,
			        itemHeight: 5,
			        itemGap: 13,
			        data: ['PM2.5', 'SO2','CO2'],
			        right: '14%',
			        textStyle: {
			            fontSize: 10,
			            color: '#F1F1F3'
			        }
			    },
			    grid: {
			    	top:'18%',
			        left: '3%',
			        right: '4%',
			        bottom: '0%',
			        containLabel: true
			    },
			    xAxis: [{
			        type: 'category',
			        boundaryGap: false,
			        axisLine: {
			            lineStyle: {
			                color: '#57617B'
			            }
			        },
			        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
			    }, {
			        axisPointer: {
			            show: false
			        },
			        axisLine: {
			            lineStyle: {
			                color: '#57617B'
			            }
			        },
			        axisTick: {
			            show: false
			        },
			
			        position: 'bottom',
			        offset: 20,
			        data: ['', '', '', '', '', '', '', '', '', '', {
			            value: '周六',
			            textStyle: {
			                align: 'left'
			            }
			        }, '周日']
			    }],
			    yAxis: [{
			        type: 'value',
			        axisTick: {
			            show: false
			        },
			        axisLine: {
			            lineStyle: {
			                color: '#57617B'
			            }
			        },
			        axisLabel: {
			            margin: 5,
			            textStyle: {
			                fontSize: 11
			            }
			        },
			        splitLine: {
			            lineStyle: {
			                color: '#57617B'
			            }
			        }
			    }],
			    series: [{
			        name: 'PM2.5',
			        type: 'line',
			        smooth: true,
			        symbol: 'circle',
			        symbolSize: 5,
			        showSymbol: false,
			        lineStyle: {
			            normal: {
			                width: 1
			            }
			        },
			        areaStyle: {
			            normal: {
			                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                    offset: 0,
			                    color: 'rgba(137, 189, 27, 0.3)'
			                }, {
			                    offset: 0.8,
			                    color: 'rgba(137, 189, 27, 0)'
			                }], false),
			                shadowColor: 'rgba(0, 0, 0, 0.1)',
			                shadowBlur: 10
			            }
			        },
			        itemStyle: {
			            normal: {
			                color: 'rgb(137,189,27)',
			                borderColor: 'rgba(137,189,2,0.27)',
			                borderWidth: 12
			
			            }
			        },
			        data: [100, 122, 111, 134, 150, 120, 110, 125, 145, 122, 165, 122]
			    }, {
			        name: 'SO2',
			        type: 'line',
			        smooth: true,
			        symbol: 'circle',
			        symbolSize: 5,
			        showSymbol: false,
			        lineStyle: {
			            normal: {
			                width: 1
			            }
			        },
			        areaStyle: {
			            normal: {
			                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                    offset: 0,
			                    color: 'rgba(0, 136, 212, 0.3)'
			                }, {
			                    offset: 0.8,
			                    color: 'rgba(0, 136, 212, 0)'
			                }], false),
			                shadowColor: 'rgba(0, 0, 0, 0.1)',
			                shadowBlur: 10
			            }
			        },
			        itemStyle: {
			            normal: {
			                color: 'rgb(0,136,212)',
			                borderColor: 'rgba(0,136,212,0.2)',
			                borderWidth: 12
			
			            }
			        },
			        data: [100, 110, 125, 145, 122, 165, 122, 120, 182, 191, 134, 50]
			    }, {
			        name: 'CO2',
			        type: 'line',
			        smooth: true,
			        symbol: 'circle',
			        symbolSize: 5,
			        showSymbol: false,
			        lineStyle: {
			            normal: {
			                width: 1
			            }
			        },
			        areaStyle: {
			            normal: {
			                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                    offset: 0,
			                    color: 'rgba(219, 50, 51, 0.3)'
			                }, {
			                    offset: 0.8,
			                    color: 'rgba(219, 50, 51, 0)'
			                }], false),
			                shadowColor: 'rgba(0, 0, 0, 0.1)',
			                shadowBlur: 10
			            }
			        },
			        itemStyle: {
			            normal: {
			
			                color: 'rgb(219,50,51)',
			                borderColor: 'rgba(219,50,51,0.2)',
			                borderWidth: 12
			            }
			        },
			        data: [100, 112, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
			    }, ]
          })
          
          let listener=function(){
				myChart.resize();
			}
			EleResize.on(resizeDiv,listener)
        }
      }
    }
</script>

<style scoped>
#myChart{height:8rem;margin-top: 30px;}
</style>