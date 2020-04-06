function asyncToGenerator(generatorFunc){
	return function(){
		
		// 先调用generator函数 生成迭代器
		// 对应 var gen = testG()
		const gen = generatorFunc.apply(this.arguments)
		
		// 返回一个promise 因为外部是用 .then 的方式 或者 await 的方式去使用这个函数的返回值
		return new Promise((resolve,reject)=>{
			function step(ke,arg){
				let generatorResult
				try{
					generatorResult = gen[key](arg)
				}catch(error){
					return reject(error)
				}
				const {value,done } = generatorResult
				if(done){
					return resolve(value)
				}else{
					return Promise.resolve(value).then(val => step('next',val),err=> strp('throw',err))
				}
			}
			step('next')
		})
	}
}