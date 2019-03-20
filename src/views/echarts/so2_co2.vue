<template>
	<div id="so2" :style="{width:'100%'}"></div>
</template>

<script>
	import echarts from "echarts";
	import {EleResize} from "../../assets/js/esresize.js"
	 export default {
        name: "so2co2",
        mounted(){
        this.drawChart();
       },
      methods:{
          drawChart(){
          let so2Echart=this.$echarts.init(document.getElementById('so2'));
          let resizeDiv=document.getElementById("so2")
         let data = [["05:00",116],["06:00",129],["07:00",135],["08:00",86],["09:00",73],["10:00",85],["11:00",73],["12:00",68],["13:00",92],["14:00",73],["15:00",83],["16:00",125],["17:00",107],["18:00",82]];

		let dateList = data.map(function (item) {
		    return item[0];
		});
		let valueList = data.map(function (item) {
		    return item[1];
		});
          so2Echart.setOption({
		    visualMap: [{
		        show: false,
		        type: 'continuous',
		        seriesIndex: 0,
		        min: 0,
		        max: 400
		    }, {
		        show: false,
		        type: 'continuous',
		        seriesIndex: 1,
		        dimension: 0,
		        min: 0,
		        max: dateList.length - 1
		    }],
		
		
		    title: [{
		    	bottom:'85%',
		        left: '0%',
		        text: 'For the SO2 axis',
		        textStyle:{
		        	color:'#fff',
		        }
		    }, {
		        top: '55%',
		        left: '0%',
		        text: 'For the CO2 axis',
		        textStyle:{
		        	color:'#fff'
		        }
		    }],
		    textStyle:{
		        	color:'#fff'
		       },
		    tooltip: {
		        trigger: 'axis'
		    },
		    xAxis: [{
		        data: dateList
		    }, {
		        data: dateList,
		        gridIndex: 1
		    }],
		    yAxis: [{
		        splitLine: {show: false}
		    }, {
		        splitLine: {show: false},
		        gridIndex: 1
		    }],
		    grid: [{
		        bottom: '60%'
		    }, {
		        top: '65%'
		    }],
		    series: [{
		        type: 'line',
		        showSymbol: false,
		        data: valueList
		    }, {
		        type: 'line',
		        showSymbol: false,
		        data: valueList,
		        xAxisIndex: 1,
		        yAxisIndex: 1
		    }]
		})
	        let listener=function(){
				so2Echart.resize();
			}
			EleResize.on(resizeDiv,listener)
        }
      }
    }
</script>

<style scoped>
#so2{height:18rem; padding-left: 10px;  padding-right: 10px;}
</style>