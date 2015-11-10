function StoreColorSchemeArrayType(ColorScheme) {

	/**
	  Documentation
	   Set of eBay Store color schemes.
	 */

	/**
	 * Arrays
	 *	ColorScheme: StoreColorSchemeType
	 */
	this.ColorScheme = ColorScheme;
}
StoreColorSchemeArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		ColorScheme: (this.ColorScheme === undefined)? null : this.ColorScheme
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
module.exports = StoreColorSchemeArrayType;