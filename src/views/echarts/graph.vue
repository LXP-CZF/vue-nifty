<template>
	<div id="graphChart" :style="{width:'100%'}"></div>
</template>

<script>
	import echarts from "echarts";
	import {EleResize} from "../../assets/js/esresize.js"
	 export default {
        name: "graphChart",
        mounted(){
        this.drawChart();
       },
      methods:{
          drawChart(){
          let graphChart=this.$echarts.init(document.getElementById('graphChart'));
          let resizeDiv=document.getElementById("graphChart")
          function setCatData(arr, n, sm) {
          for (var i = 0; i < arr.length; i++) {
              listdata.push({
                  "name": arr[i],
                  "symbolSize": sm || 10,
                  "category": n,
                  "label": {
                      "normal": {
                          //   "show": true,
                          "textStyle": {
                              "color": colors[n]
                          }
                      }
                  }
              })
          }
      }
           function setLinkData(arr, title, cc) {
          for (var i = 0; i < arr.length; i++) {
              links.push({
                  "source": arr[i],
                  "target": title,
                  lineStyle: {
                      normal: {
                          color: cc
                      }
                  }
              })
          }
      }
            var legendes = ["基本数据", "税收数据", "欠税信息", "行政处罚信息", "重大违法信息", "增值税申报信息", "缴税情况", "税务信用评级", "所得税年度汇算清缴", "企业画像"];
      // var colors = ['#dc44c8', '#6444dc', '#dc4474', '#dc4444', '#68b6ef', '#68efb8', '#ef9b68', '#4c6492', '#4a561a', '#fff'];
      //   var colors = ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'];
      var colors = ['#72d3f9', '#4185f7', '#62abe1', '#3060ba', '#0057a6', '#00a3d0', '#03a7dc', '#16dcdc', '#2976b2', '#2976b2'];

      var texts = [];
      for (var i = 0; i < legendes.length; i++) {
          texts.push({
              "name": legendes[i],
              "itemStyle": {
                  "normal": {
                      "color": colors[i],
                      //   "borderWidth": 30,
                      //   "shadowBlur": 15,
                      //   "shadowColor": colors[i],
                      //   color: '#66ff00',
                      //   borderColor: 'rgba(255, 255, 255, 0.2)',
                      //   borderWidth: 6
                  }
              }
          })
      }
      var listdata = [];
      var cat1 = ["基本数据", "企业名称", "社会统一信用代码", "生产经营地址", "纳税人状态", "登记日期", "生产经营地址（共管户国税为准）", "法定代表人", "行业类型", "纳税人类型", "国地最早开业（设立）日期", "登记注册类型（共管户国税为准）", "纳税人登记状态（共管户国税为准）", "增值税最早申报日期", "营业税最早申报日期"];
      var cat2 = ["税收数据", "所属日期起", "所属日期止", "应税销售收入", "入库税额", "入库税额（消）", "入库税额（营）", "入库税额（企）", "减免税额（增）", "减免税额（消）", "减免税额（营）", "减免税额（企）"];
      var cat3 = ["欠税信息", "经营地点", "增值税欠税金额", "消费税欠税金额", "所得税欠税金额"];
      var cat4 = ["行政处罚信息", "案件名称", "行政处罚类别", "行政处罚结果", "行政处罚事由", "行政处罚依据", "处罚金额", "行政处罚日期", "处罚截止日期", "处罚机关", "当前状态"];
      var cat5 = ["重大违法信息", "中介机构", "从业人员", "案件性质", "主要违法事实", "处罚情况"];
      var cat6 = ["增值税申报信息", "增值税申报信息-年度", "申报月份", "按适用税率计税销售额", "应补退税额", "按简易办法计税销售额", "免、抵、退办法出口销售额", "免税销售额"];
      var cat7 = ["缴税情况", "缴税情况-年度", "属期起止", "税种代码", "税款种类", "实缴时间", "实缴税额"];
      var cat8 = ["税务信用评级", "信用级别", "信用评级年度", "信用评分分数"]
      var cat9 = ["所得税年度汇算清缴", "所得税年度汇算清缴-年度", "汇算清缴日期", "营业收入", "应纳税所得额", "应纳所得税额"];
      var cat10 = ["企业"];

      // 拼装数据
      setCatData(cat1, 0)
      setCatData(cat2, 1)
      setCatData(cat3, 2)
      setCatData(cat4, 3)
      setCatData(cat5, 4)
      setCatData(cat6, 5)
      setCatData(cat7, 6)
      setCatData(cat8, 7)
      setCatData(cat9, 8)
      setCatData(cat10, 9, 15)
      var links = [];

      setLinkData(cat1, "基本数据", colors[0]);
      setLinkData(cat2, "税收数据", colors[1]);
      setLinkData(cat3, "欠税信息", colors[2]);
      setLinkData(cat4, "行政处罚信息", colors[3]);
      setLinkData(cat5, "重大违法信息", colors[4]);
      setLinkData(cat6, "增值税申报信息", colors[5]);
      setLinkData(cat7, "缴税情况", colors[6]);
      setLinkData(cat8, "税务信用评级", colors[7]);
      setLinkData(cat9, "所得税年度汇算清缴", colors[8]);
      setLinkData(legendes, "企业", colors[9]);

      //   var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
      //   var planePath ='path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z';
      var planePath = 'circle';
          graphChart.setOption({
          	    backgroundColor: '#183052',
          	      tooltip: {
              formatter: function(parmes) {
                  if (parmes.data.name) {
                      return legendes[parmes.data.category] + ">" + parmes.name;
                  }
              }
          },
          animationDurationUpdate: 300,
          animationEasingUpdate: 'quinticInOut',
          series: [{
              type: 'graph',
              layout: 'force',
              symbol: planePath,
              symbolSize: 1,
              roam: true,
              //   focusNodeAdjacency: false,
              focusNodeAdjacency: true,
              legendHoverLink: true,
              draggable: true,
              force: {
                  repulsion: 10,
                  gravity: 0.03,
                  edgeLength: 20,
                  layoutAnimation: true
              },
              categories: texts,
              data: listdata,
              links: links,
              lineStyle: {
                  normal: {
                      opacity: 0.9,
                      width: 1,
                      curveness: 0
                  }
              }
          }]
			    
          })
          
          let listener=function(){
				graphChart.resize();
			}
			EleResize.on(resizeDiv,listener)
        }
      }
    }
</script>

<style scoped>
#graphChart{height:8rem;margin-top: 30px;width: 100%;}
</style>