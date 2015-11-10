function CharityIDType(type) {

	/**
	  Documentation
	   Defines the affiliation status for a nonprofit charity organization registered with the eBay Giving Works provider.
	 */

	/**
	 * Arrays
	 */
	this.type = type;
}
CharityIDType.prototype.toJSON = function(with_null) {
	var json = { 
		type: (this.type === undefined)? null : this.type
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
module.exports = CharityIDType;