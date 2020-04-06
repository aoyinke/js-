Function.prototype.my_bind = function(){
	
	let self = this
	let context = Array.prototype.shift.call(arguments)
	let args = Array.prototype.slice.call(arguments)
	return function(){
		self.apply(context,Array.prototype.concat.call(args,Array.prototype.slice.call(arguments)))
	}
}


function a(m, n, o) {
    console.log(this.name + ' ' + m + ' ' + n + ' ' + o);
  }

  var b = {
    name: 'kong'
  };

  a.my_bind(b, 7, 8)(9); // kong 7 8 9