var StoreFontFaceCodeType = require('./StoreFontFaceCodeType'),
	StoreFontSizeCodeType = require('./StoreFontSizeCodeType');

function StoreFontType(NameFace, NameSize, NameColor, TitleFace, TitleSize, TitleColor, DescFace, DescSize, DescColor) {

	/**
	  Documentation
	   
                Store font set.
            
	 */

	/**
	 * Arrays
	 */
	var _NameFace;
	var _NameSize;
	var _TitleFace;
	var _TitleSize;
	var _DescFace;
	var _DescSize;
	Object.defineProperty(this, 'NameFace', {
		 get: function(){
			 return _NameFace;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreFontFaceCodeType){ 
					_NameFace = value; 
				}else{
					console.log('NameFace expects type StoreFontFaceCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'NameSize', {
		 get: function(){
			 return _NameSize;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreFontSizeCodeType){ 
					_NameSize = value; 
				}else{
					console.log('NameSize expects type StoreFontSizeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TitleFace', {
		 get: function(){
			 return _TitleFace;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreFontFaceCodeType){ 
					_TitleFace = value; 
				}else{
					console.log('TitleFace expects type StoreFontFaceCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TitleSize', {
		 get: function(){
			 return _TitleSize;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreFontSizeCodeType){ 
					_TitleSize = value; 
				}else{
					console.log('TitleSize expects type StoreFontSizeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DescFace', {
		 get: function(){
			 return _DescFace;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreFontFaceCodeType){ 
					_DescFace = value; 
				}else{
					console.log('DescFace expects type StoreFontFaceCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DescSize', {
		 get: function(){
			 return _DescSize;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreFontSizeCodeType){ 
					_DescSize = value; 
				}else{
					console.log('DescSize expects type StoreFontSizeCodeType');
				}
			}
		}
	});
	this.NameFace = NameFace;
	this.NameSize = NameSize;
	this.NameColor = NameColor;
	this.TitleFace = TitleFace;
	this.TitleSize = TitleSize;
	this.TitleColor = TitleColor;
	this.DescFace = DescFace;
	this.DescSize = DescSize;
	this.DescColor = DescColor;
}
StoreFontType.prototype.toJSON = function(with_null) {
	var json = { 
		NameFace: (this.NameFace === undefined)? null : this.NameFace.toJSON(),
		NameSize: (this.NameSize === undefined)? null : this.NameSize.toJSON(),
		NameColor: (this.NameColor === undefined)? null : this.NameColor,
		TitleFace: (this.TitleFace === undefined)? null : this.TitleFace.toJSON(),
		TitleSize: (this.TitleSize === undefined)? null : this.TitleSize.toJSON(),
		TitleColor: (this.TitleColor === undefined)? null : this.TitleColor,
		DescFace: (this.DescFace === undefined)? null : this.DescFace.toJSON(),
		DescSize: (this.DescSize === undefined)? null : this.DescSize.toJSON(),
		DescColor: (this.DescColor === undefined)? null : this.DescColor
	};
	if(!with_null) {
		for(var k in json) {
			if(json[k] === null) {
				delete json[k];
			}
		}
	}
	return json;
};
module.exports = StoreFontType;