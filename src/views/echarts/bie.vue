<template>
	<div id="bie" :style="{width:'99%'}"></div>
</template>

<script>
	import echarts from "echarts";
	import {EleResize} from "../../assets/js/esresize.js"
	 export default {
        name: "bie",
        mounted(){
        this.drawChart();
       },
      methods:{
          drawChart(){
          let bieEchart=this.$echarts.init(document.getElementById('bie'));
          let resizeDiv=document.getElementById("bie")
          bieEchart.setOption({
          	title : {
		        text: '污染源监管程度',
		        subtext: '国控企业类别统计',
		        x:'left',
		         textStyle:{
		    	color:'#fff'
		    },
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x : 'right',
		        y:'center',
		        data:['化学','金属','固废','污水','噪音','空气检测'],
		         textStyle:{
				    	color:'#919090'
				    },
		    },
		    calculable : true,
		    series : [
		      
		        {
		            name:'面积模式',
		            type:'pie',
		            radius : [25, 100],
		            center : ['50%', '50%'],
		            roseType : 'area',
		            data:[
		                {value:10, name:'化学'},
		                {value:5, name:'金属'},
		                {value:15, name:'固废'},
		                {value:25, name:'污水'},
		                {value:20, name:'噪音'},
		                {value:35, name:'空气检测'},
		            ]
		        }
		    ]
          })
          
          let listener=function(){
				bieEchart.resize();
			}
			EleResize.on(resizeDiv,listener)
        }
      }
    }
</script>

<style scoped>
#bie{height:23.9375rem;margin-top: 30px;}
</style>