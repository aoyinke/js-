function Promise(excutor){
	var self = this
	self.onResolvedCallback = []  // Promise resolve时的回调函数集合
	
	
	//传递给Promise处理函数的resolve
	// 这里直接往实例上挂个data
	// 然后把onResolvedCallback数组立的函数依次执行一遍即可
	function resolve(value){
		//注意promise里的then函数需要异步
		setTimeout(()=>{
			self.data = value
			self.onResolvedCallback.forEach(callback =>callback(value))
		})
	}
	
	//执行用户传入的函数
	excutor(resolve.bind(self))
}


Promise.prototype.then = function(onResolved){
	//保存上下文，哪个promise调用的then，就指向哪个promise
	var self = this
	
	//一定要返回一个新的promise
	//promise2
	return new Promise(resolve =>{
		self.onResolvedCallback.push(function(){
			var result = onResolved(self.data)
			if(result instanceof Promise){
				//resolve的权力被交给了user promise
				result.then(resolve)
				
			}else{
				resolve(result)
			}
		})
	})
}

new Promise(resolve =>{
	setTimeout(()=>{
		resolve(1)
	},500)
})
// then1
.then(res=>{
	console.log(res)
	//user promise
	return new Promise(resolve=>{
		setTimeout(()=>{
			//resolve2
			resolve(2)
		},500)
	})
}).then(res=>{
	console.log(res)
})


// promise1
new Promise(resolve => {
    setTimeout(resolve, 1000)
})
  // then1 这里传入的函数 会被放到调用者promise的回调数组中
.then(res => {
  console.log(res)
})
