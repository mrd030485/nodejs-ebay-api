function StoreColorType(Primary, Secondary, Accent) {

	/**
	  Documentation
	   Store color set.
	 */

	/**
	 * Arrays
	 */
	this.Primary = Primary;
	this.Secondary = Secondary;
	this.Accent = Accent;
}
StoreColorType.prototype.toJSON = function(with_null) {
	var json = { 
		Primary: (this.Primary === undefined)? null : this.Primary,
		Secondary: (this.Secondary === undefined)? null : this.Secondary,
		Accent: (this.Accent === undefined)? null : this.Accent
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
module.exports = StoreColorType;