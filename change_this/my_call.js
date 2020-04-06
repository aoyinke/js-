//first 

Function.prototype.call2 = function(context){
	//首先要获取调用call的函数，用this可以获取
	context = context || window;
	context.fn = this;
	var args = []
	for(var i = 1,len = arguments.length;i<len;i++){
		args.push('arguments[' + i + ']')
	}
	var result = eval('context.fn(' + args  +')')
	delete context.fn
	return result
}


var foo = {
	value:1
}

function bar(name,age){
	console.log(name)
	console.log(age)
	console.log(this.value)
	return {
		value:this.value,
		name:name
	}
}

bar.call2(null)