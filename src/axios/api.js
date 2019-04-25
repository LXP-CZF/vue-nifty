import axios from 'axios'
// import store from '../store/index'
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'


// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
 
    return config;
  },
  error => {
    return Promise.reject(error);
  });

  // 响应拦截器
axios.interceptors.response.use(function(response) {
	//对响应数据做某些事
  return response;
}, function(error) {
	//请求错误时做某些事
  return Promise.reject(error);
})


// 封装axios的post请求
export function fetch(url,params){
	return new  Promise((resolve,reject)=>{
		axios.post(url,params)
		.then(response=>{
			resolve(response.data);
		})
		.catch((error)=>{
			reject(error);
		})
	})
}

export default{
	mockdata(url,params){
		return fetch(url,params);
	}
}
