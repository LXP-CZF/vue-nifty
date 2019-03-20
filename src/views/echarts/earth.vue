<template>
	<div id='main' :style="{width:'100%',paddingTop:'10px',paddingBottom:'10px'}"></div>
</template>

<script>
	import echarts from "echarts";
	import "echarts-gl";
	import "../../../node_modules/echarts/map/js/world.js";
	export default {
        name: "earth",
		mounted() {
				this.drawChart();
			},
	    methods: {
		drawChart() {
			let mainChart= this.$echarts.init(document.getElementById('main'))
		
		    var geoCoordMap = {
        '南宁': [108.479, 23.1152],
        '广州': [113.5107, 23.2196],
        '重庆': [107.7539, 30.1904],
        '芬兰': [24.909912, 60.169095], 
        '美国': [-100.696295, 33.679979], 
        '日本': [139.710164, 35.706962], 
        '韩国': [126.979208, 37.53875], 
        '瑞士': [7.445147, 46.956241],
        '东南亚': [117.53244, 5.300343], 
        '澳大利亚': [135.193845, -25.304039], 
        '德国': [13.402393, 52.518569], 
        '英国': [-0.126608, 51.208425], 
        '加拿大': [-102.646409, 59.994255]
    };

    /* 
        记录下起点城市和终点城市的名称，以及权重
        数组第一位为终点城市，数组第二位为起点城市，以及该城市的权重，就是图上圆圈的大小
     */

    var CQData = [
        [{name: '重庆'}, {name: "英国",value: 70}]
    ];

    var GZData = [
        [{name: '广州'}, {name: "日本",value: 30}],
    ];

    var NNData = [
        [{name: '南宁'}, {name: "加拿大",value: 80}],
        [{name: '南宁'}, {name: "美国",value: 100}],
        [{name: '南宁'}, {name: "澳大利亚",value: 95}],
        [{name: '南宁'}, {name: "瑞士",value: 50}]
    ];

    var convertData = function(data) {
        var res = []; 
        for(var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[1].name];
            var toCoord = geoCoordMap[dataItem[0].name];
            if(fromCoord && toCoord) {
                res.push([fromCoord, toCoord])
            }
        }
        console.log(res)
        return res;
    }

    var series = [];// 3D飞线
    var dser = [];  // 2D散点坐标
    [['重庆', CQData],['广州', GZData],['南宁', NNData]].forEach(function(item, i) {
        dser.push({ 
        type: 'effectScatter',         
        coordinateSystem: 'geo', 
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke' 
        },
        label: {
            fontSize:24,  
            show: true,
            position: 'right', 
            formatter: '{b}'  
        },
        itemStyle: {
            normal: {
                color: '#f5f802'
            }
        },
        data: item[1].map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name],
                symbolSize: dataItem[1].value / 4
            };
        })
    },{
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'left',
                fontSize:18,
                formatter: '{b}'
            }
        },
        itemStyle: {
            normal: {
                color: '#ff0000'
            }
        },
        data: [{
            name: item[0],
            value: geoCoordMap[item[0]],
            symbolSize:parseInt(Math.random()*20+10),
            label: {
                normal: {
                    position: 'right'
                }
            }
        }]
    })
    series.push({
            type: 'lines3D',
            effect: {
                show: true,
                period: 3,//速度
                trailLength: 0.1//尾部阴影          
            },
            lineStyle: {//航线的视图效果
                color: '#9ae5fc',
                width: 1,
                opacity: 0.6
            },
            data: convertData(item[1])// 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
        })
    });
var canvas = document.createElement('canvas');
   
    var myChart = echarts.init(canvas, null, {
        width: 4096,
        height: 2048
    });
    myChart.setOption({
	    backgroundColor: 'rgba(3,28,72,0.7)',
	    title: {
	        show:true
	    },
	    geo: {
	        type: 'map',
	        map: 'world',
	        left:0,
	        top:0,
	        right: 0,
	        bottom: 0,
	        boundingCoords: [[-180, 90], [180, -90]],
	        zoom:0,
	        roam: false,
	        itemStyle: {
	            borderColor:'#000d2d',
	            normal: {
	                areaColor: '#2455ad',
	                borderColor:'#000c2d'
	            },
	            emphasis: {
	                areaColor: '#357cf8' 
	            }
	        },
	        label:{
	            fontSize:24
	        }
	    },
	    series:dser
	});
	
			mainChart.setOption({
				backgroundColor: 'rgba(0,0,0,0)',//canvas的背景颜色
        
        globe: {
            baseTexture:myChart,
            top: 'middle',
            left: 'left',
            displacementScale: 0,
            environment:'none',
            shading: 'color',
            viewControl: {
                distance:240,
                autoRotate: true
            }
        },
        roam: true,
        series:series
			});
			 window.onresize=function(){
              mainChart.resize();
            }

		}
	}
}
</script>

<style scoped>
	#main{min-height:613px;height: 100%;}
</style>