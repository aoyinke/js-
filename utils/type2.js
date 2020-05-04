var class2type = {}

var toString = class2type.toString

var hasOwn = class2type.hasOwnProperty

function isPlainObject(obj){
	var proto,Ctor;
	
	//排除掉明显不是obj的以及一些宿主对象如WindoW
	if(!obj || toString.call(obj) !== "[object Object]"){
		return false
	}
	
	/**
	 * getPrototypeOf es5方法，获取obj的原型
	 * 以 new Object创建的对象为例的话
	 * obj.__proto__ === Object.prototype
	 */
	proto = Object.getPrototypeOf(obj)
	
	//没有原型的对象是纯粹的，Object.create(null) 就在这里返回true
	if(!proto){
		return true
	}
	
	/**
	 * 一下判断通过new Object方式创建的对象
	 * 判断proto是否有contructor属性，如果有就让Ctor的值为proto.Constructor
	 * 如果是Object函数创建的对象，Ctor在这里就等于ObjeCt构造函数
	 */
	 Ctor = hasOwn.call(proto,"contructor") && proto.constructor
	  
	  //在这里判断Ctor构造函数是不是Object构造函数，用于区分自定义构造函数和Object构造函数
	  return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)\
	  
	 
}


function isEmptyObject(obj){
	var name;
	
	for (name in obj){
		return false
	}
	
	return true
}

function isWindow(obj){
	return obj !=null && obj === obj.window
}

/**
 * @param {Object} obj
 * 是数组
 * 长度为0
 * length属性是大于0的数字类型，并且obj[length -1]必须存在
 */
function isArrayLike(obj){
	
	//obj必须有length属性
	var length = !!obj && "length" in obj && obj.length
	
	var tyoeRes = type(obj)
	
	//排除掉函数和window对象
	if(typeRes === "function" || isWindow(obj)) return false
	
	return typeRes === "array" || length === 0 || 
		typeof length === "number" && length > 0 && (length -1) in obj
}

var MAX_ARRAY_INDEX = Math.pow(2,53) - 1