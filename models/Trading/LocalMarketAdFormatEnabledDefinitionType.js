function LocalMarketAdFormatEnabledDefinitionType() {

	/**
	  Documentation
	   Defines the AdFormatEnabled feature. If the field is present, the corresponding feature applies to the category. This field is returned as an empty element (e.g., a boolean value is not returned). Added for Local Market users.
	 */

	/**
	 * Arrays
	 */
}
LocalMarketAdFormatEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalMarketAdFormatEnabledDefinitionType;