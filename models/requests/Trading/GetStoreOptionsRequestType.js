function GetStoreOptionsRequestType() {

	/**
	  Documentation
	   Retrieves the current list of eBay store configuration settings.
	 */

	/**
	 * Arrays
	 */
}
GetStoreOptionsRequestType.prototype.toJSON = function(with_null) {
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
module.exports = GetStoreOptionsRequestType;