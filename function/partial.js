var _ = {}


function partial(fn){
	var args = [].slice.call(arguments,1)
	console.log(args)
	return function(){
		var poisition = 0, len = args.length
		console.log(arguments)
		for(var i = 0; i< len; i++){
			args[i] = args[i] === _ ? arguments[poisition++] : args[i]
		}
		while(poisition < arguments.length) args.push(arguments[poisition++])
		console.log(args)
		return fn.apply(this,args)
	}
}


var subtract = function(a, b) { return b - a; };
subFrom20 = partial(subtract, _, 20);

console.log(subFrom20(5));