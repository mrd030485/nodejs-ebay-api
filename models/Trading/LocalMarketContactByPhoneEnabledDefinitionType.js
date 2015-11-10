function LocalMarketContactByPhoneEnabledDefinitionType() {

	/**
	  Documentation
	   Indicates whether the category supports using the telephone as a contact method. Added for Local Market users.
	 */

	/**
	 * Arrays
	 */
}
LocalMarketContactByPhoneEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalMarketContactByPhoneEnabledDefinitionType;