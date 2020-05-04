// function extend(){
// 	var name,options,copy;
// 	var length = arguments.length
// 	var i = 1;
// 	var target = arguments[0]
// 	
// 	for (;i<length;i++){
// 		options = arguments
// 		if(options != null){
// 			for (name in options){
// 				copy = options[name]
// 				if(copy !== undefined){
// 					target[name] = copy
// 				}
// 			}
// 		}
// 	}
// 	return target
// }


function my_extend(){
	var target_object;
	var i = 1
	target_object = arguments[0]
	
	for(;i<arguments.length;i++){
		if(typeof arguments[i] !==null && arguments[i] instanceof Object){
			for(option in arguments[i]){
				target_object[option] = arguments[i][option]
			}
		}
	}
	return target_object
	
	
}


function isPlainObject(obj) {
    var proto, Ctor;
    if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
    }
    proto = Object.getPrototypeOf(obj);
    if (!proto) {
        return true;
    }
    Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
    return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
}

function deep_extend(){
	var deep = false
	var name, options, src, copy, clone, copyIsArray;
	var length = arguments.length
	var i = 1
	//第一个参数不是布尔值的情况下，target默认是第一个参数
	var target = arguments[0] || {}
	// 如果第一个参数是布尔值，第二个参数才是target
	if(typeof arguments[0] == 'boolean'){
		deep = target
		target = arguments[i] || {}
		i++
	}
	//如果target不是对象，我们是无法进行复制的，所以设为{}
	if(typeof target !== 'object'){
		target = {}
	}
	
	//循环遍历要复制的对象
	for(;i<length;i++){
		options = arguments[i]
		if(options !=null){
			for(name in options){
				//目标属性值
				src = target[name]
				//要复制的对象的属性值
				copy = options[name]
				
				//解决循环引用
				if(target === copy){
					continue
				}
				//要递归的对象必须是plainObject 活着数组
				if(deep && copy && 
				(isPlainObject(copy) ||
                        (copyIsArray = Array.isArray(copy)))){
							
					if(copyIsArray){
						copyIsArray = false
						clone = src && Array.isArray(src) ? src:[]
					}else{
						clone = src && isPlainObject(src) ? src : {};
					}
					//递归调用
					target[name] = deep_extend(deep,src,copy)
				}
				else if (copy !== undefined){
					target[name] = copy
				}
			}
		}
	}
	return target
}
var obj1 = {
    a: 1,
    b: { b1: 1, b2: 2 }
};

var obj2 = {
    b: { b1: 3, b3: 4 },
    c: 3
};

var obj3 = {
    d: 4
}

console.log(my_extend(obj1, obj2, obj3));


//思考
var a = extend(true, [4, 5, 6, 7, 8, 9], [1, 2, 3]);
console.log(a) // ???
var obj1 = {
    value: {
        3: 1
    }
}

var obj2 = {
    value: [5, 6, 7],

}

var b = extend(true, obj1, obj2) // ???
var c = extend(true, obj2, obj1) // ???