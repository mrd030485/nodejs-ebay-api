function eBayMotorsProCompanyNameEnabledDefinitionType() {

	/**
	  Documentation
	   Indicates whether the category supports the use of a company name when contacting the seller about Classified Ad format listings. Added for EbayMotors Pro users.
	 */

	/**
	 * Arrays
	 */
}
eBayMotorsProCompanyNameEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = eBayMotorsProCompanyNameEnabledDefinitionType;