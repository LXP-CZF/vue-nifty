<template>
	<div id="content" class="content"></div>
</template>
<script>
	import echarts from "echarts";
	import {EleResize} from "../../assets/js/esresize.js"
	export default {
		name: 'qingjian',
		data() {
			return {}
		},
		mounted() {
			this.drawEcharts();
		},
		methods:{
			drawEcharts(){
				let qingjianEchart=this.$echarts.init(document.getElementById("content"))
				let resizeDiv=document.getElementById("content")
				let xAxisData = [];
				let data = [];
				let data2 = [];
				for (let i = 0; i < 50; i++) {
				    xAxisData.push(i);
				    data.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
				    data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
				}	
				qingjianEchart.setOption({
				    xAxis: [{
				        show: false,
				        data: xAxisData
				    }, {
				        show: false,
				        data: xAxisData
				    }],
				    visualMap: {
				        show: false,
				        min: 0,
				        max: 50,
				        dimension: 0,
				        inRange: {
				            color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
				        }
				    },
				    yAxis: {
				        axisLine: {
				            show: false
				        },
				        axisLabel: {
				            textStyle: {
				                color: '#4a657a'
				            }  
				        },
				        splitLine: {
				            show: false,
				            lineStyle: {
				                color: '#08263f'
				            }
				        },
				        axisTick: {
				            show: false
				        }
				    },
				    grid: {
					      "top": "7%",
					      "bottom":"7%"
					    },
				    series: [{
				        name: 'back',
				        type: 'bar',
				        data: data2,
				        z: 1,
				        itemStyle: {
				            normal: {
				                opacity: 0.4,
				                barBorderRadius: 5,
				                shadowBlur: 3,
				                shadowColor: '#111'
				            }
				        }
				    }, {
				        name: 'Simulate Shadow',
				        type: 'line',
				        data: data,
				        z: 2,
				        showSymbol: false,
				        animationDelay: 0,
				        animationEasing: 'linear',
				        animationDuration: 1200,
				        lineStyle: {
				            normal: {
				                color: 'transparent'
				            }  
				        },
				        areaStyle: {
				            normal: {
				                color: '#08263a',
				                shadowBlur: 50,
				                shadowColor: '#000'
				            }
				        }
				    }, {
				        name: 'front',
				        type: 'bar',
				        data: data,
				        xAxisIndex: 1,
				        z: 3,
				        itemStyle: {
				            normal: {
				                barBorderRadius: 5
				            }
				        }
				    }],
				    animationEasing: 'elasticOut',
				    animationEasingUpdate: 'elasticOut',
				    animationDelay: function (idx) {
				        return idx * 20;
				    },
				    animationDelayUpdate: function (idx) {
				        return idx * 20;
				    }
				})
				
				let listener=function(){
					qingjianEchart.resize();
				}
				EleResize.on(resizeDiv,listener)
		 }
	}
}
</script>
<style scoped>
	#content {
		width: 100%;
		height: 7.5rem;
	}
</style>