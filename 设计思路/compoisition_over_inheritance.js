class GuitarAmp{
	constructor({cabinet = 'spruce', distortion = '1', volume = '0'} = {}){
		Object.assign(this,{
			cabinet,distortion,volume
		})
	}
}


class BassAmp extends GuitarAmp{
	constructor(options = {}){
		super(options)
		this.lowCut = options.lowCut
		
	}
	
}



class ChannelStrip extends BassAmp{
	constructor(options = {}){
		super(options)
		this.inputLevel = options.inputLevel
	}
}


test('Class Inheritance',nest =>{
	nest.text('Bass',assert =>{
		   const msg = `instance should inherit props
    from GuitarAmp and BassAmp`;
	
	const myAmp = new BassAmp()
	const actual = Object.keys(myAmp)
	const expected  = ['cabinet', 'distortion', 'volume', 'lowCut'];
	
	assert.deepEqual(actual,expected,msg)
	assert.end()
	})
})