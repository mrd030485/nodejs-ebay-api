function eBayMotorsProSellerContactDetailsEnabledDefinitionType() {

	/**
	  Documentation
	   
                Defines the SellerContactDetailsEnabled feature. If this field is present, the category allows retrieval of seller-level contact information. The field is returned as an empty element (e.g., a boolean value is not returned). Added for EbayMotors Pro users.
            
	 */

	/**
	 * Arrays
	 */
}
eBayMotorsProSellerContactDetailsEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = eBayMotorsProSellerContactDetailsEnabledDefinitionType;