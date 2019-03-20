<template>
	<div id="bar2" :style="{width:'87%',height: '243px',paddingLeft:'10px'}"></div>
</template>

<script>
	import echarts from "echarts";
	 export default {
        name: "bar2",
        mounted(){
        this.drawChart();
       },
      methods:{
          drawChart(){
          let bar2Echart=this.$echarts.init(document.getElementById('bar2'));
          
          bar2Echart.setOption({
          	color: ['#006699', '#4cabce'],
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		    	right:'5%',
		        data: ['今年', '去年'],
		        textStyle:{
		    	color:'#919090'
		    },
		    },
		    textStyle:{
		    	color:'#919090'
		    },
    		calculable: true,
		    xAxis: [
		        {
		            type: 'category',
		            axisTick: {show: false},
		            data: ['北京', '广州', '西安', '上海','湖南'],
		            name:'废水',
		             nameTextStyle:{
		            	align:'left',
		            	fontSize:'10'
		            }
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            name:'%',
		            splitLine:{
		            	lineStyle:{
		            		color:['#474545']
						}
					}
				}
			],
series: [{
			name: '今年',
			type: 'bar',
			barGap: 0,
			data: [72, 32, 21, 84, 36],
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
								offset: 0,
								color: '#17a6aa'
							},
							{
								offset: 1,
								color: '#8b5aec'
							}
						]
					),
					barBorderRadius: 8
				},
				emphasis: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
								offset: 0,
								color: '#8b5aec'
							},
							{
								offset: 1,
								color: '#17a6aa'
							}
						]
					),
					barBorderRadius: 8
				}
			}
		},
		{
			name:'去年',
		            type: 'bar',
		            data: [20, 92, 51, 34,84],
		        itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
								offset: 0,
								color: '#bc8856'
							},
							{
								offset: 1,
								color: '#42418c'
							}
						]
					),
					barBorderRadius: 8
				},
				emphasis: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
								offset: 0,
								color: '#42418c'
							},
							{
								offset: 1,
								color: '#bc8856'
							}
						]
					),
					barBorderRadius: 8
				}
			}
		}
		    ]
          })
        }
      }
    }
</script>

<style>
</style>