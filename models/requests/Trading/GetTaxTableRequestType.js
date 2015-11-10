function GetTaxTableRequestType() {

	/**
	  Documentation
	   Retrieves the tax table for a user on a given site or retrieves the valid jurisdictions (if any) for a given site.
	 */

	/**
	 * Arrays
	 */
}
GetTaxTableRequestType.prototype.toJSON = function(with_null) {
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
module.exports = GetTaxTableRequestType;