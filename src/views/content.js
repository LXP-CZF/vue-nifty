import vueheader from "./layout/header.vue";
import vuefooter from "./layout/footer.vue";
import vuemain from "./layout/main.vue";
import vueaside from "./layout/aside.vue";

import vueGridLayout from 'vue-grid-layout';
var GridLayout = vueGridLayout.GridLayout;
var GridItem = vueGridLayout.GridItem;
export default {
data(){
	return{
		collapse:false,
        laytypeA:false,
        laytypeAA:false,
        laytypeAAA:false,
        laytypeABB:false,
        laytypeAB:false,
        laytypeAAB:true,
		 formatLayoutVisible:false,
		 layTable:[{id:1,src:require("../../static/image/A12.png"),laytype:"AAB"},
		           {id:2,src:require("../../static/image/AA12.png"),laytype:"AB"},
		           {id:3,src:require("../../static/image/AAA2.png"),laytype:"AAA"},
		           {id:4,src:require("../../static/image/AB112.png"),laytype:"AA"},
		           {id:5,src:require("../../static/image/BA11.png"),laytype:"A"},
		           {id:6,src:require("../../static/image/AB11.png"),laytype:"ABB"}
		           ],
	}
},
  components:{
        vueheader,
        GridLayout,
        GridItem,
        vuefooter,
        vuemain,
        vueaside
    },
methods:{
	formatLayout(){
		this.formatLayoutVisible=true;
	},
    layView(item){/*选择layout*/
        	  this.layouttype= item.laytype;
        	  if(item.laytype=="A"){
        	  	 this.laytypeA=true;
        	  	 this.laytypeAA=false;
        	  	 this.laytypeAAA=false;
        	  	 this.laytypeABB=false;
        	  	 this.laytypeAB=false;
        	  	 this.laytypeAAB=false;
        	  }else if(item.laytype=="AA"){
        		  this.laytypeA=false;
        		  this.laytypeAAA=false;
        		  this.laytypeABB=false;
        		  this.laytypeAB=false;
        		  this.laytypeAAB=false;
        		  this.laytypeAA=true;
        	  }else if(item.laytype=="AAA"){
        		  this.laytypeA=false;
        		  this.laytypeAA=false;
        		  this.laytypeABB=false;
        		  this.laytypeAB=false;
        		  this.laytypeAAB=false;
        		  this.laytypeAAA=true;
        	  }else if(item.laytype=="AB"){
        		  this.laytypeA=false;
        		  this.laytypeAA=false;
        		  this.laytypeABB=false;
        		  this.laytypeAAB=false;
        		  this.laytypeAB=true;
        		  this.laytypeAAA=false;
        	  }else if(item.laytype=="AAB"){
        		  this.laytypeA=false;
        		  this.laytypeAA=false;
        		  this.laytypeAAA=false;
        		  this.laytypeAB=false;
        		  this.laytypeABB=false;
        		  this.laytypeAAB=true;
        	  }
        	  else if(item.laytype=="ABB"){
        		  this.laytypeA=false;
        		  this.laytypeAA=false;
        		  this.laytypeAAA=false;
        		  this.laytypeAB=false;
        		  this.laytypeAAB=false;
        		  this.laytypeABB=true;
        	  }
        	this.formatLayoutVisible = false;
          },
	}
}
