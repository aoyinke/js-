// 第一版
var class2type = {};

// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").map(function(item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})


function type(obj){
		
	if(obj == null){
		return obj + ""
	}
	return typeof obj === 'object' || typeof obj === 'function' ?
		class2type[Object.prototype.toString.call(obj)] || "object" :
		typeof obj
}


function isFunction(obj){
	return type(obj) === "function"
}

