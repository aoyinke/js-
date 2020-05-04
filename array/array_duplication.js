var array = [1,1,'1',2,2]
var array2 = [1,1,'1',2,2]
var array3 = [1, 1, 'a', 'A', 2, 2];

function unique_indexOf(array){
	var res = [];
	for (var i = 0, len = array.length;i<len; i++){
		var current = array[i]
		if(res.indexOf(current) === -1){
			res.push(current)
		}
		return res;
	}
	
}

function unique_sort(array){
	var res = [];
	var sortedArray = array.concat().sort();
	var seen;
	for (var i = 0, len = array.length-1; i< len;i++){
		// 如果是第一个元素或者相邻的元素不相同
		if (!i || seen !== seen !== sortedArray[i]){
			res.push(sortedArray[i])
		}
		seen = sortedArray[i]
	}
	return res
}

//console.log(unique_sort(array))

function unique(array,isSorted){
	var res = []
	var seen;
	
	for(var i = 0, len = array.length -1 ;i<len;i++){
		var value = array[i]
		if(isSorted){
			if(!i || seen !== value){
				res.push(value)
			}
			seen = value
		}
		else if (res.indexOf(value) === -1){
			res.push(value)
		}
	}
	return res
}

console.log(unique(array2))
console.log(unique(array,true))

function unique_powerful(array,isSorted){
	var res = [];
	var seen;
	
	for(var i = 0,len = array.length; i < len;i++){
		var value = array[i]
		var computed = iteratee ? iteratee(value,i,array) : value
		if(isSorted){
			if(!i || seen !== computed){
				res.push(value)
			}
			seen = computed
		}
		else if(iteratee){
			if(seen.indexOf(computed) === -1){
				seen.push(computed)
				res.push(value)
			}
		}
		else if (res.indexOf(value) === -1){
			res.push(value)
		}
		
	}
	
	return res
}

//console.log(unique(array3,false,function(item){
//	return typeof item == 'string' ? item.toLowerCase() : item
//}))


function unique_object(array){
	var obj = {}
	return array.filter(function(item,index,array){
		return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
			
	})
		
	
}

console.log(unique_object(array))