<template>
	<div id="bar_shuiping" class="bar_shuiping"></div>
</template>

<script>
	import echarts from "echarts";
	import {EleResize} from "../../assets/js/esresize.js"
	export default{
		name:'barShuiping',
		mounted(){
			this.drawEchart()
		},
		methods:{
			drawEchart(){
				let barHechart=this.$echarts.init(document.getElementById("bar_shuiping"))
				let resizeDiv=document.getElementById("bar_shuiping")
				let data = [30, 26, 20, 10, 14]
				let titlename = ['工业企业', '社会生活', '交通', '建筑施工', '其他'];
				let valdata = [100, 100, 100, 100, 100]
				let myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
				barHechart.setOption({
					 title: {
				        text: '噪音分布占比',
				        top:'1%',
				        left:'31%',
				        textStyle:{
				        	color:'#fff',
				        	fontSize:'1.1rem'
				        }
				    },
				    xAxis: {
				        show: false
				    },
				    yAxis: [{
				        show: true,
				        data: titlename,
				        inverse: true,
				        axisLine: {
				            show: false
				        },
				        splitLine: {
				            show: false
				        },
				        axisTick: {
				            show: false
				        },
				        axisLabel: {
				            color: '#fff',
				            formatter: function(value, index) {
				                return [
				                    '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
				                ].join('\n')
				            },
				            rich: {
				                lg: {
				                    backgroundColor: '#339911',
				                    color: '#fff',
				                    borderRadius: 15,
				                    // padding: 5,
				                    align: 'center',
				                    width: 15,
				                    height: 15
				                },
				            }
				        },
				
				
				    }, {
				        show: false,
				        inverse: true,
				        data: valdata,
				        axisLabel: {
				            textStyle: {
				                fontSize: 12,
				                color: '#fff',
				            },
				        },
				        axisLine: {
				            show: false
				        },
				        splitLine: {
				            show: false
				        },
				        axisTick: {
				            show: false
				        },
				
				    }],
				    grid: {
					      "top": "17%",
					      "bottom":"2%",
					      "left":"37%"
					    },
				    series: [{
				        name: '条',
				        type: 'bar',
				        yAxisIndex: 0,
				        data: data,
				        barWidth: 10,
				        itemStyle: {
				            normal: {
				                barBorderRadius: 30,
				                color: function(params) {
				                    var num = myColor.length;
				                    return myColor[params.dataIndex % num]
				                },
				            }
				        },
				        label: {
				            normal: {
				                show: true,
				                position: 'inside',
				                formatter: '{c}%'
				            }
				        },
				    }, {
				        name: '框',
				        type: 'bar',
				        yAxisIndex: 1,
				        barGap: '-100%',
				        data: [100, 100, 100, 100, 100],
				        barWidth: 15,
				        itemStyle: {
				            normal: {
				                color: 'none',
				                borderColor: '#00c1de',
				                borderWidth: 1,
				                barBorderRadius: 15,
				            }
				        }
				    }, ]
				})
				let listener=function(){
					barHechart.resize();
				}
				EleResize.on(resizeDiv,listener)
			}
		}
	}
</script>

<style scoped>
	#bar_shuiping{
		width: 100%;
		height: 8.5625rem;
	}
</style>