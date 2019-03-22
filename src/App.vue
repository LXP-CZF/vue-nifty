<template>
<div id="app" ref="app">
		<transition name="fade"
		            mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
 export default {
	name: 'app',
	components: {
	}
}

</script>

<style  lang="less">
body{width: 100%;height: 100%; background: #8c979b;}
*{margin:0px;padding: 0px; }
#app {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 0px;
  
 
}

</style>
