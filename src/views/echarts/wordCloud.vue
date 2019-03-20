<template>
	<div id="wordCloud" class="wordCloud"></div>
</template>
<script>
	import echarts from "echarts";
	import 'echarts-wordcloud/dist/echarts-wordcloud.min.js'
	import {EleResize} from "../../assets/js/esresize.js"
	export default {
		name: 'wordCloud',
		data() {
			return {}
		},
		mounted() {
			this.drawEcharts();
		},
		methods:{
			drawEcharts(){
				let wordCloudEchart=this.$echarts.init(document.getElementById("wordCloud"))
				let resizeDiv=document.getElementById("wordCloud")
				wordCloudEchart.setOption({
					grid:{
						"bottom":"10%"
					},
				series: [
				    {
				        type: 'wordCloud',
				        gridSize: 2,
				        sizeRange: [12, 50],
				        rotationRange: [-90, 90],
				        shape: 'pentagon',
				        textStyle: {
				            normal: {
				                color: function () {
				                    return 'rgb(' + [
				                            Math.round(Math.random() * 255),
				                            Math.round(Math.random() * 255),
				                            Math.round(Math.random() * 255)
				                        ].join(',') + ')';
				                }
				            },
				            emphasis: {
				                shadowBlur: 10,
				                shadowColor: '#333'
				            }
				        },
				        data: [
				            {
				                name: '空气检测',
				                value: 10000,
				            }, {
				                name: 'SO2',
				                value: 6181
				            }, {
				                name: '化学',
				                value: 4386
				            }, {
				                name: '固废',
				                value: 2467
				            }, {
				                name: '噪音',
				                value: 2244
				            }, {
				                name: 'PM2.5',
				                value: 1898
				            }, {
				                name: '污水',
				                value: 1484
				            }, {
				                name: 'CO2',
				                value: 1112
				            }, {
				                name: 'O3',
				                value: 965
				            }, {
				                name: '工业污水',
				                value: 847
				            }, {
				                name: '废气污染',
				                value: 582
				            }, {
				                name: '堆积物污染',
				                value: 555
				            }, {
				                name: '化肥污染',
				                value: 550
				            }, {
				                name: 'PM10',
				                value: 462
				            }, {
				                name: 'NO2',
				                value: 366
				            }, {
				                name: 'CO',
				                value: 360
				            }, {
				                name: '溶剂',
				                value: 282
				            }, {
				                name: '染料',
				                value: 273
				            }, {
				                name: '金属' ,
				                value: 273
				            }, {
				                name: '油脂',
				                value: 265
				            }]
				    }
				]

		    })
				
				let listener=function(){
					wordCloudEchart.resize();
				}
				EleResize.on(resizeDiv,listener)
		}
	}
}
</script>
<style scoped>
	#wordCloud {
		width: 100%;
		height: 8.5625rem;
	}
</style>