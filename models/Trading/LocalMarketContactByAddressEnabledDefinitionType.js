function LocalMarketContactByAddressEnabledDefinitionType() {

	/**
	  Documentation
	   Indicates whether the category supports using an address when contacting the seller for Classified Ad format listings. Added for Local Market users.
	 */

	/**
	 * Arrays
	 */
}
LocalMarketContactByAddressEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalMarketContactByAddressEnabledDefinitionType;