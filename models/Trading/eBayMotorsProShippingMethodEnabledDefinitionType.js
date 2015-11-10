function eBayMotorsProShippingMethodEnabledDefinitionType() {

	/**
	  Documentation
	   
                Indicates if the category supports shipping options for Classified Ad format listings. Added for EbayMotors Pro users.
            
	 */

	/**
	 * Arrays
	 */
}
eBayMotorsProShippingMethodEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = eBayMotorsProShippingMethodEnabledDefinitionType;