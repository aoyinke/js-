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
		chain.unshift(interceptor)
	})
	//把相应拦截器往数组尾部推
	axios.interceptors.response.forEach(interceptor=>{
		chain.pusn(interceptor)
	})
	// 把config也包装成一个promise
	
	let promise = Promse.resolve(config)



	// 利用promise.then的能力递归执行所有的拦截器
	while(chain.length){
		const {resolved,rejected} = chain.shift()
		promise = promise.then(resolved,rejected)
	}

	return promise
}


axios.useRequestInterceptor(config =>{
	return{
		...config,
		extraParams1:"extraParams1"
	}
})

axios.useRequestInterceptor(config => {
  return {
    ...config,
    extraParams2: 'extraParams2',
  };
});


axios.useResponseInterceptor(
resp=>{
	const{
		extraParams1,
		extraParams2,
		result:{code,message}
	} = resp
	return `${extraParams1} ${extraParams2} ${message}`
		
},
error =>{
	console.log('error',error)
	
})





(async function(){
	const result = await axios.run({
		message:"message1"
	})
	console.log('result1',result)
})()


(async function() {
  const result = await axios.run({
    error: true,
  });
  console.log('result3: ', result);
})();