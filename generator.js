var result = []
var time = 0
function* generArr(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			result.push(time)
			time+=200
		},500)
	})
}

var gen = generArr()
console.log(gen)

gen.next().next()