function eq(a,b){
	
	// === 结果为 true 的区别出 +0 和 - 0
	if(a === b) return a !== 0 || 1/a === 1/b;
	return false
		
		
	// typeof null 的结果为 object 这里做判断，是为了让有null的情况尽早推出函数
	if(a == null b == null) return false
	
	
	// 判断NaN
	if(a !== a) return b !==b;
	
	// 判断参数 a 类型，如果是基本类型，在这里可以直接返回false
	var type = typeof a;
	if( type !== 'function' && type !== 'object' && typeof b != 'object' ) return false
	
	
	//更复杂的对象使用deepEp函数进行深度比较
	return deepEq(a,b)
	
}



