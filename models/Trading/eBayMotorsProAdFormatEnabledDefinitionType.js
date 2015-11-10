function eBayMotorsProAdFormatEnabledDefinitionType() {

	/**
	  Documentation
	   
                Defines the AdFormatEnabled feature. If this field is present, the corresponding feature applies to the category. The field is returned as an empty element (e.g., a boolean value is not returned). Added for EbayMotors Pro users.
            
	 */

	/**
	 * Arrays
	 */
}
eBayMotorsProAdFormatEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = eBayMotorsProAdFormatEnabledDefinitionType;