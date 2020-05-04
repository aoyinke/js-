// firstChild

var arr = [1,[2,[3,4]]]


function flatten(arr){
	var result = []
	for(var i = 0,len = arr.length;i<len;i++){
		if(Array.isArray(arr[i])){
			result = result.concat(flatten(arr[i]))
		}
		else{
			result.push(arr[i])
		}
	}
	return result
}


// 方法2
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    return arr.toString().split(',').map(function(item){
        return +item
    })
}



//方法三
function flatten(arr){
	return arr.reduce(function(prev,next){
		return prev.concat(Array.isArray(next) ? flatten(next) : next)
	},[])
}

console.log(flatten(arr))