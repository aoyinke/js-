var count = 1;
var container = document.getElementById('container');
console.log('asdasd')
function getUserAction(e) {
    container.innerHTML = count++;

};



function throttle(func,wait){
	var context,args;
	var previous = 0
	return function(){
		var now = +new Date();
		context = this
		args = arguments
		if(now -previous > wait){
			func.apply(context,args)
			previous = now
		}
	}
}

function throttle(func,wait){
	var timeout;
	
	
	return function(){
		context = this
		args = arguments
		if(!timeout){
			timeout = setTimeout(function(){
				timeout = null;
				func.apply(context,args)
			},wait)
		}
	}
}

function throttle(func,wait,options){
	var timeout,context,args,result
	var previous = 0
	if(!options) options = {}
	
	
	var later = function(){
		previous =+ new Date()
		timeout = null
		func.apply(context,args)
	}
	var throttled =  function(){
		var now =+ new Date()
		//下次触发func的剩余时间
		var remaining = wait - (now - previous)
		//如果没有剩余的时间了或者你改了系统时间
		if(remaining <= 0 || remaining > wait){
			if(timeout){
				clearTimeout(timeout)
				timeout = null
			}
			previous = now
			func.apply(context,args)
			
		}else if (!timeout){
			timeout = setTimeout(LATER,remaining)
		}
		
	}
	
	return throttled
}
container.onmousemove = throttle(getUserAction, 3000);