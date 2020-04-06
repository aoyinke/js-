
var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]
 
 
/**




// first
var new_arr = JSON.parse(JSON.stringify(arr))
 // 不能拷贝函数
 
var arr = [function(){
	console.log(a)
},
{
	b:function(){
		console.log(b)
	}
}]
*/

/** 浅拷贝
var shallowCopy = function(obj){
	//只拷贝对象
	if(typeof obj !== 'object') return
	//根据obj的类型判断是新建一个数组还是对象
	var newObj = obj instanceof Array ? []:{}
	//遍历obj ,并且判断是obj的属性才拷贝
	for (var key in obj){
		if(obj.hasOwnProperty(key)){
			newObj[key] = obj[key]
		}
	}
	return newObj
}
*/

var deepCopy = function(obj){
	if(typeof obj !== 'object') return;
	var newObj = obj instanceof Array ? []:{}
	for(var key in obj){
		if(obj.hasOwnProperty(key)){
			newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
		}
	}
	return newObj
}


var new_arr1 = deepCopy(arr)
new_arr1[3][1] = 'new1'
console.log(new_arr1)
console.log(arr)