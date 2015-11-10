function LocalMarketPhoneCountDefinitionType() {

	/**
	  Documentation
	   Indicates which phone option the category supports when contacting the seller about listings in Classified Ad format. Added for Local Market users.
	 */

	/**
	 * Arrays
	 */
}
LocalMarketPhoneCountDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalMarketPhoneCountDefinitionType;