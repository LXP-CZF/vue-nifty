<template>
   <div class="dataaa"  id="searchBar">
</div>
	
</template>

<script>
    export default {
	name: "bigger_data",
	data() {
		return {
            height:''
		}
	},
	components: {
		
	},
	mounted () {//给window添加一个滚动滚动监听事件
  window.addEventListener('scroll', this.handleScroll)
},

methods: {
  handleScroll () { //改变元素#searchBar的top值
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var offsetTop = document.querySelector('#searchBar').offsetTop;
	if(offsetTop==0)
	{
		 document.querySelector('#searchBar').style.top = offsetTop+'px';
		 document.querySelector('#searchBar').style.position="fixed";
	}else{
		document.querySelector('#searchBar').style.top = 100+'px';
	}
   
  },
},
destroyed () {//离开该页面需要移除这个监听的事件
  window.removeEventListener('scroll', this.handleScroll)
},

}
</script>

<style scoped="scoped">
.dataaa {
  /* position: fixed;
  bottom: 100px; */
 top: 300px; /* 开始处于距离顶部300px的位置，之后随着滚动条滚动top值改变，然后在top==100时停止 */
  left: 218px;
  box-sizing: border-box;
  z-index: 2;
  background:gold;
  width: 300px;
  height:200px;
}

</style>