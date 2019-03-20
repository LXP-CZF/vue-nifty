<template>
	<!--地图容器-->
	<div id="container" class="container"></div>
</template>
<script>
	import echarts from "echarts";
	import "echarts-gl";
	import BMap from 'BMap';
	import "../../../node_modules/echarts/map/js/world.js";
	import "../../../node_modules/echarts/map/js/china.js";
	export default {
		name: '',
		data() {
			return {}
		},
		mounted() {
			this.drawEcharts();
		},
		methods:{
			drawEcharts(){
			let map = new BMap.Map("container"); 
			map.centerAndZoom(new BMap.Point(113.270793,23.136637), 12); 
			map.enableScrollWheelZoom();
			map.setMapStyle({
			  styleJson:[
          {
                    "featureType": "land",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#e7f7fc"
                    }
          },
          {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                              "color": "#96b5d6"
                    }
          },
          {
                    "featureType": "green",
                    "elementType": "all",
                    "stylers": {
                              "color": "#b0d3dd"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#a6cfcf"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#7dabb3"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#e7f7fc"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#b0d5d4"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#7a959a"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                              "color": "#d6e4e5"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#374a46"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#374a46"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                              "color": "#eeeeeeff"
                    }
          }
]
			});
			let riding = new BMap.RidingRoute(map, { 
			    renderOptions: { 
			        map: map, 
			        autoViewport: true 
			    }
			});
			
			let start = new BMap.Point(116.310791, 40.003419);
			let end = new BMap.Point(116.386419, 40.003519);
			riding.search(start, end);
		 }
	}
}
</script>
<style scoped>
	.container {
		width: 100%;
		height: 27.75rem;
		margin: 15px 0px 25px 25px;
	}
</style>