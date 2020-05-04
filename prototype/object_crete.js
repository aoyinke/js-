function object_create(obj){
	var args = [].slice.call(arguments,1)
	for(let i in obj){
		console.log(obj[i])
	}
	for(let i of args){
		
		Object.assign(obj,i)
	}
	function F(){}
	F.prototype = obj
	return new F(args)
}


var person = {
	age:18,
	friend:['gray','amili','adward']
}
var instance1 = object_create(person,{sex:"male"})
console.log(instance1.sex)

// var instance1 = Object.create(person)
// var secondPerson = Object.create(person)
// instance1.friend.push('youxiu')
// secondPerson.friend.push('hhhh')
// console.log(secondPerson.friend)