// pointfree 指的是函数无须提及将要操作的数据是什么样的。依然是以最初的需求为例：
// 需求：输入 'kevin'，返回 'HELLO, KEVIN'。

var greet = function(name){
	return ('hello' + name).toUpperCase()
}

//pointFree
//先定义基本运算,这些可以封装起来复用
var toUpperCase = function(x){return x.toUpperCase()}
var hello = function(x){return 'HELLO,' + x}

var greet = compose(hello,toUpperCase())
greet('kevin')