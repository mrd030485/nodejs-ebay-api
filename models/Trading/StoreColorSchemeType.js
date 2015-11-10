var StoreColorType = require('./StoreColorType'),
	StoreFontType = require('./StoreFontType');

function StoreColorSchemeType(ColorSchemeID, Name, Color, Font) {

	/**
	  Documentation
	   
                Store color scheme.
            
	 */

	/**
	 * Arrays
	 */
	var _Color;
	var _Font;
	Object.defineProperty(this, 'Color', {
		 get: function(){
			 return _Color;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreColorType){ 
					_Color = value; 
				}else{
					console.log('Color expects type StoreColorType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Font', {
		 get: function(){
			 return _Font;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreFontType){ 
					_Font = value; 
				}else{
					console.log('Font expects type StoreFontType');
				}
			}
		}
	});
	this.ColorSchemeID = ColorSchemeID;
	this.Name = Name;
	this.Color = Color;
	this.Font = Font;
}
StoreColorSchemeType.prototype.toJSON = function(with_null) {
	var json = { 
		ColorSchemeID: (this.ColorSchemeID === undefined)? null : this.ColorSchemeID,
		Name: (this.Name === undefined)? null : this.Name,
		Color: (this.Color === undefined)? null : this.Color.toJSON(),
		Font: (this.Font === undefined)? null : this.Font.toJSON()
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
module.exports = StoreColorSchemeType;