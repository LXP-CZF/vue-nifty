//防抖
export function debounce(func,wait){
    var delay=wait ||500;
    var timeout;  // 这里定义一个变量
    return function(){   // 闭包的使用，返回一个函数。
        var context=this;
        var args=arguments;
        if(timeout)  clearTimeout(timeout);//终止定时消息
        timeout=setTimeout(()=>{
            func.apply(context,args) //context调用func方法
        },delay);
    }
};

//节流
export function throttle(func,wait){
    var last;
    var timer;
    var delay=wait ||500;
    return function(){
        var args = arguments;
        var now = +new Date();
        if (last && now - last < delay) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                func.apply(this, args);
            }, delay);
        } else {
            last = now;
            func.apply(this, args);
        }
    }
};
export function changeAsideHeight(){
   
        document.querySelector('.asidemain').style.height=document.querySelector('.mainheight').offsetHeight+35+'px'
    
}