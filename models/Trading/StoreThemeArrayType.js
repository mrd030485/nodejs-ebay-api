var StoreColorSchemeArrayType = require('./StoreColorSchemeArrayType');

function StoreThemeArrayType(Theme, GenericColorSchemeArray) {

	/**
	  Documentation
	   Set of Store themes.
	 */

	/**
	 * Arrays
	 *	Theme: StoreThemeType
	 */
	var _GenericColorSchemeArray;
	Object.defineProperty(this, 'GenericColorSchemeArray', {
		 get: function(){
			 return _GenericColorSchemeArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreColorSchemeArrayType){ 
					_GenericColorSchemeArray = value; 
				}else{
					console.log('GenericColorSchemeArray expects type StoreColorSchemeArrayType');
				}
			}
		}
	});
	this.Theme = Theme;
	this.GenericColorSchemeArray = GenericColorSchemeArray;
}
StoreThemeArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		Theme: (this.Theme === undefined)? null : this.Theme,
		GenericColorSchemeArray: (this.GenericColorSchemeArray === undefined)? null : this.GenericColorSchemeArray.toJSON()
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
module.exports = StoreThemeArrayType;