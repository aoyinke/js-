const axios = config =>{
	if(config.error){
		return Promise.reject({
			error:"erro in axios"
		})
	}else{
		return Promise.resolve({
			...config,
			result:config.result
			})
	}
}

axios.interceptors = {
	request:[],
	response:[]
}

//注册请求拦截器
axios.useRequestInterceptor = (resolved,rejected)=>{
	axios.interceptors.request.push({resolved,rejected})
}

//注册响应拦截器
axios.useResponseInterceptor = (resolved,rejected)=>{
	axios.interceptors.response.push({resolved,rejected})
}

//运行拦截器
axios.run = config =>{
	const chain = [
		{
			resolved:axios,
			rejected:undefined
		}
	]
	axios.interceptors.request.forEach(inerceptor=>{
		chain.unshift(interceptors)
	})
	//把相应拦截器往数组尾部推
	axios.interceptors.response.forEach(interceptors=>{
		chain.pusn(interceptors)
	})

	let promise = Promse.resolve(config)

	while(chain.length){
		const {resolved,rejected} = chain.shift()
		promise = promise.then(resolved,rejected)
	}

	return promise
}


