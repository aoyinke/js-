// example
function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}


// firstChild

function objectFactory(){
	var obj = new Object()
	
	Constructor = [].shift.call(arguments)
	
	obj.__proto__ = Constructor.prototype;
	
	var ret = Constructor.apply(ob,arguments)
	
	return typeof ret === 'object' ? ret : obj //确保构造器总是返回一个对象

}





args('asdas','name','asdas',{name:"asdasdasdsadsaadsa"})