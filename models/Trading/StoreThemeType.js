var StoreColorSchemeType = require('./StoreColorSchemeType');

function StoreThemeType(ThemeID, Name, ColorScheme) {

	/**
	  Documentation
	   
                Store theme.
            
	 */

	/**
	 * Arrays
	 */
	var _ColorScheme;
	Object.defineProperty(this, 'ColorScheme', {
		 get: function(){
			 return _ColorScheme;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreColorSchemeType){ 
					_ColorScheme = value; 
				}else{
					console.log('ColorScheme expects type StoreColorSchemeType');
				}
			}
		}
	});
	this.ThemeID = ThemeID;
	this.Name = Name;
	this.ColorScheme = ColorScheme;
}
StoreThemeType.prototype.toJSON = function(with_null) {
	var json = { 
		ThemeID: (this.ThemeID === undefined)? null : this.ThemeID,
		Name: (this.Name === undefined)? null : this.Name,
		ColorScheme: (this.ColorScheme === undefined)? null : this.ColorScheme.toJSON()
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
module.exports = StoreThemeType;