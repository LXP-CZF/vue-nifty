<template>
	<div id="jindu" class="jindu"></div>
</template>

<script>
	import echarts from "echarts";
	import {EleResize} from "../../assets/js/esresize.js"
	export default {
		name: 'jindu',
		data() {
			return {}
		},
		mounted() {
			this.drawEcharts();
		},
		methods:{
			drawEcharts(){
				let jinduEchart=this.$echarts.init(document.getElementById("jindu"))
				let resizeDiv=document.getElementById("jindu")
			/*	let highlight = '#03b7c9';
				var demoData = [
				    { name: 'PM2.5', value:100 , unit: 'μg/m3', pos: ['25%', '25%'], range: [0, 400] },
				    { name: 'SO2', value:0.3, unit: 'mg/m3', pos: ['75%', '25%'], range: [0, 1] },
				    { name: 'CO2', value: 800, unit: 'ppm', pos: ['25%', '75%'], range: [0, 2000] },
				    { name: 'O3', value: 110, unit: 'μg/m3', pos: ['75%', '75%'], range: [0, 200] },
				];*/
				jinduEchart.setOption({
					backgroundColor: '#183052',
				    title: {
				        text: '各城市12月PM2.5',
				        top:'2%',
				        textStyle:{
				        	color:'#fff',
				        	fontSize:'1rem'
				        }
				    },
				    tooltip : {
				        formatter: "{a} <br/>{c} μg/m3"
				    },
				    series: [
				        {
				            name: '内圈小',
				            type: 'gauge',
				            pointer:{
				              show:false  
				            },
				            radius: '40%',
				            startAngle: 200,
				            center:['25%','40%'],
				            endAngle: -20,
				            splitNumber: 2,
				            axisLine: { // 坐标轴线
				                lineStyle: { // 属性lineStyle控制线条样式
				                    color: [
				                        [1, '#bfcbd9']
				                    ],
				                    width: 5
				                }
				            },
				            splitLine: { //分隔线样式
				                show: false,
				            },
				            axisLabel: { //刻度标签
				                show: false,
				            },
				            axisTick: { //刻度样式
				                show: false,
				            },
				            detail: {
				                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                fontWeight: 'bolder',
				                fontSize:15,
				                offsetCenter:[0, '20%']
				            },
				            data: [{
				                value: 50,
				                name: ''
				            }]
				        }, 
				        {
				            name: '汕尾',
				            type: 'gauge',
				            title : {
				                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                fontWeight: 'bolder',
				                fontSize: 10,
				                fontStyle: 'italic',
				                 offsetCenter: [0, '33%'],
				                 color:'#fff'
				            },
				            pointer:{
				              show:true,
				              width:3
				            },
				            radius: '40%',
				            startAngle: 200,
				            endAngle: 50,
				            center:['25%','40%'],
				            splitNumber: 4,
				            axisLine: { // 坐标轴线
				                lineStyle: { // 属性lineStyle控制线条样式
				                    color: [
				                        [1, '#3d7a86']
				                    ],
				                    width: 5,
				                    shadowColor: '#3d7a86', //默认透明
				                    shadowOffsetX: 0,
				                    shadowOffsetY: 0,
				                    shadowBlur: 30,
				                    opacity: 1,
				                }
				
				            },
				            splitLine: { //分隔线样式
				                show: false,
				            },
				            axisLabel: { //刻度标签
				                show: false,
				            },
				            axisTick: { //刻度样式
				                show: false,
				            },
				            detail: {
				                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                fontWeight: 'bolder',
				                fontSize:15,
				                offsetCenter:[0, '20%']
				            },
				            data: [{
				                value: '50',
				            }]
				        }, 
				        {
				            name: '内圈小',
				            type: 'gauge',
				            pointer:{
				              show:false  
				            },
				            radius: '40%',
				            startAngle: 200,
				            center:['25%','85%'],
				            endAngle: -20,
				            splitNumber: 2,
				            axisLine: { // 坐标轴线
				                lineStyle: { // 属性lineStyle控制线条样式
				                    color: [
				                        [1, '#bfcbd9']
				                    ],
				                    width: 5
				                }
				            },
				            splitLine: { //分隔线样式
				                show: false,
				            },
				            axisLabel: { //刻度标签
				                show: false,
				            },
				            axisTick: { //刻度样式
				                show: false,
				            },
				            detail: {
				                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                fontWeight: 'bolder',
				                fontSize:15,
				                offsetCenter:[0, '20%']
				            },
				            data: [{
				                value: 120,
				                name: ''
				            }]
				        },
				        {
				            name: '深圳',
				            type: 'gauge',
				            title : {
				                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                fontWeight: 'bolder',
				                fontSize: 10,
				                fontStyle: 'italic',
				                 offsetCenter: [0, '33%'],
				                 color:'#fff',
				                 text:'nihaoa'
				            },
				            pointer:{
				              show:true,
				              width:3
				            },
				            radius: '40%',
				            startAngle: 200,
				            endAngle: 50,
				            center:['25%','85%'],
				            splitNumber: 4,
				            axisLine: { // 坐标轴线
				                lineStyle: { // 属性lineStyle控制线条样式
				                    color: [
				                        [1, '#f5b797']
				                    ],
				                    width: 5,
				                    shadowColor: '#f5b797', //默认透明
				                    shadowOffsetX: 0,
				                    shadowOffsetY: 0,
				                    shadowBlur: 20,
				                    opacity: 1,
				                }
				
				            },
				            splitLine: { //分隔线样式
				                show: false,
				            },
				            axisLabel: { //刻度标签
				                show: false,
				            },
				            axisTick: { //刻度样式
				                show: false,
				            },
				            detail: {
				                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                fontWeight: 'bolder',
				                fontSize:15,
				                offsetCenter:[0, '20%']
				            },
				            data: [{
				                value: '120',
				            }]
				        },
				        {
				            name: '内圈小',
				            type: 'gauge',
				            pointer:{
				              show:false  
				            },
				            radius: '40%',
				            startAngle: 200,
				            center:['75%','85%'],
				            endAngle: -20,
				            splitNumber: 2,
				            axisLine: { // 坐标轴线
				                lineStyle: { // 属性lineStyle控制线条样式
				                    color: [
				                        [1, '#bfcbd9']
				                    ],
				                    width: 5
				                }
				            },
				            splitLine: { //分隔线样式
				                show: false,
				            },
				            axisLabel: { //刻度标签
				                show: false,
				            },
				            axisTick: { //刻度样式
				                show: false,
				            },
				            detail: {
				                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                fontWeight: 'bolder',
				                fontSize:15,
				                offsetCenter:[0, '20%']
				            },
				            data: [{
				                value: 30,
				                name: ''
				            }]
				        },
				        {
				            name: '广州',
				            type: 'gauge',
				            title : {
				                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                fontWeight: 'bolder',
				                fontSize: 10,
				                fontStyle: 'italic',
				                 offsetCenter: [0, '33%'],
				                 color:'#fff',
				                 text:'nihaoa'
				            },
				            pointer:{
				              show:true,
				              width:3
				            },
				            radius: '40%',
				            startAngle: 200,
				            endAngle: 50,
				            center:['75%','85%'],
				            splitNumber: 4,
				            axisLine: { // 坐标轴线
				                lineStyle: { // 属性lineStyle控制线条样式
				                    color: [
				                        [1, '#f26d70']
				                    ],
				                    width: 5,
				                    shadowColor: '#f26d70', //默认透明
				                    shadowOffsetX: 0,
				                    shadowOffsetY: 0,
				                    shadowBlur: 20,
				                    opacity: 1,
				                }
				
				            },
				            splitLine: { //分隔线样式
				                show: false,
				            },
				            axisLabel: { //刻度标签
				                show: false,
				            },
				            axisTick: { //刻度样式
				                show: false,
				            },
				            detail: {
				                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                fontWeight: 'bolder',
				                fontSize:15,
				                offsetCenter:[0, '20%']
				            },
				            data: [{
				                value: '30',
				            }]
				        },
				        {
				            name: '内圈小',
				            type: 'gauge',
				            pointer:{
				              show:false  
				            },
				            radius: '40%',
				            startAngle: 200,
				            center:['75%','40%'],
				            endAngle: -20,
				            splitNumber: 2,
				            axisLine: { // 坐标轴线
				                lineStyle: { // 属性lineStyle控制线条样式
				                    color: [
				                        [1, '#bfcbd9']
				                    ],
				                    width: 5
				                }
				            },
				            splitLine: { //分隔线样式
				                show: false,
				            },
				            axisLabel: { //刻度标签
				                show: false,
				            },
				            axisTick: { //刻度样式
				                show: false,
				            },
				            detail: {
				                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                fontWeight: 'bolder',
				                fontSize:15,
				                offsetCenter:[0, '20%']
				            },
				            data: [{
				                value: 100,
				                name: ''
				            }]
				        },
				        {
				            name: '云浮',
				            type: 'gauge',
				            title : {
				                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                fontWeight: 'bolder',
				                fontSize: 10,
				                fontStyle: 'italic',
				                 offsetCenter: [0, '33%'],
				                 color:'#fff',
				                 text:'nihaoa'
				            },
				            pointer:{
				              show:true,
				              width:3
				            },
				            radius: '40%',
				            startAngle: 200,
				            endAngle: 50,
				            center:['75%','40%'],
				            splitNumber: 4,
				            axisLine: { // 坐标轴线
				                lineStyle: { // 属性lineStyle控制线条样式
				                    color: [
				                        [1, '#c5d1a3']
				                    ],
				                    width: 5,
				                    shadowColor: '#c5d1a3', //默认透明
				                    shadowOffsetX: 0,
				                    shadowOffsetY: 0,
				                    shadowBlur: 20,
				                    opacity: 1,
				                }
				
				            },
				            splitLine: { //分隔线样式
				                show: false,
				            },
				            axisLabel: { //刻度标签
				                show: false,
				            },
				            axisTick: { //刻度样式
				                show: false,
				            },
				            detail: {
				                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                fontWeight: 'bolder',
				                fontSize:15,
				                offsetCenter:[0, '20%']
				            },
				            data: [{
				                value: '100',
				            }]
				        },
				    ]
				   /* backgroundColor: '#222939',
				    series: (function() {
				        var result = [];
				        
				        demoData.forEach(function(item) {
				            result.push(
				                // 外围刻度
				                {
				                    type: 'gauge',
				                    center: item.pos,
				                    radius: '14%',  // 1行3个
				                    splitNumber: item.splitNum || 10,
				                    min: item.range[0],
				                    max: item.range[1],
				                    startAngle: 225,
				                    endAngle: -45,
				                    axisLine: {
				                        show: true,
				                        lineStyle: {
				                            width: 2,
				                            shadowBlur: 0,
				                            color: [
				                                [1, highlight]
				                            ]
				                        }
				                    },
				                    axisTick: {
				                        show: true,
				                        lineStyle: {
				                            color: highlight,
				                            width: 1
				                        },
				                        length: -5,
				                        splitNumber: 10
				                    },
				                    splitLine: {
				                        show: true,
				                        length: -14,
				                        lineStyle: {
				                            color: highlight,
				                        }
				                    },
				                    axisLabel: {
				                        distance: -20,
				                        textStyle: {
				                            color: highlight,
				                            fontSize: '14',
				                            fontWeight: 'bold'
				                        }
				                    },
				                    pointer: {
				                        show: 0
				                    },
				                    detail: {
				                        show: 0
				                    }
				                },
				                
				                // 内侧指针、数值显示
				                {
				                    name: item.name,
				                    type: 'gauge',
				                    center: item.pos,
				                    radius: '10.33%',
				                    startAngle: 225,
				                    endAngle: -45,
				                    min: item.range[0],
				                    max: item.range[1],
				                    axisLine: {
				                        show: true,
				                        lineStyle: {
				                            width: 16,
				                            color: [
				                                [1, 'rgba(255,255,255,.1)']
				                            ]
				                        }
				                    },
				                    axisTick: {
				                        show: 0,
				                    },
				                    splitLine: {
				                        show: 0,
				                    },
				                    axisLabel: {
				                        show: 0
				                    },
				                    pointer: {
				                        show: true,
				                        length: '105%'
				                    },
				                    detail: {
				                        show: true,
				                        offsetCenter: [0, '100%'],
				                        textStyle: {
				                            fontSize: 20,
				                            color: '#fff'
				                        },
				                        formatter: [
				                            '{value} ' + (item.unit || ''),
				                            '{name|' + item.name + '}'
				                        ].join('\n'),
				                        rich: {
				                            name: {
				                                fontSize: 14,
				                                lineHeight: 30,
				                                color: '#ddd'
				                            }
				                        }
				                    },
				                    itemStyle: {
				                        normal: {
				                            color: highlight,
				                        }
				                    },
				                    data: [{
				                        value: item.value
				                    }]
				                }
				            );
				        });
				        
				        return result;
				    })()
					*/			
				})
			    
		        let listener=function(){
					jinduEchart.resize();
				}
				EleResize.on(resizeDiv,listener)
			}
		}
	}
</script>

<style scoped>
	#jindu {
		width: 100%;
		height: 10.625rem;
	}
</style>