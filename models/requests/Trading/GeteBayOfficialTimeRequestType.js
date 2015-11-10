function GeteBayOfficialTimeRequestType() {

	/**
	  Documentation
	   Gets the official eBay system time in GMT.
	 */

	/**
	 * Arrays
	 */
}
GeteBayOfficialTimeRequestType.prototype.toJSON = function(with_null) {
	var json = { 
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
module.exports = GeteBayOfficialTimeRequestType;