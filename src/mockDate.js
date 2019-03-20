import Mock from 'mockjs'

const Random=Mock.Random
let data=[]

let size = [
'300x250', '250x250', '240x400', '336x280', 
'180x150', '720x300', '468x60', '234x60', 
'88x31', '120x90', '120x60', '120x240', 
'125x125', '728x90', '160x600', '120x600', 
'300x600'
]
let n=40;
for(let i=1;i<=n;i++){
	let template={
		'id': i,
		'Boolean':Random.boolean,
		'Natural':Random.natural(1,10),
		"Integer":Random.integer(1,100),
		'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
	    'Character': Random.character(), // 生成随机字符串,可加参数定义规则
	    'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
	    'Range': Random.range(0, 10, 2), // 生成一个随机数组
	    'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
	    'Image': Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
	    'Color': Random.color(), // 生成一个颜色随机值
	    'Paragraph':Random.paragraph(2, 5), //生成2至5个句子的文本
	    'Name': Random.name(), // 生成姓名
	    'Url': Random.url(), // 生成web地址
	    'Address': Random.province() // 生成地址*/
	}
	data.push(template)
}
/*let list=function(options){
	let rtype=options.type.toLowerCase();
	switch(rtype){
		case 'get':
			break;
		case 'post':
		let id=parseInt(JSON.parse(options.body).params.id);
		data=data.filter(function(val){
			return val.id!=id;
		});
			break;
		default:
			break;
	}
}*/

Mock.mock('/data/index','post',data)//根据数据模板生成模拟数据

