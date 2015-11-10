function eBayMotorsProPaymentMethodCheckOutEnabledDefinitionType() {

	/**
	  Documentation
	   
                Indicates whether the category supports the use of payment method checkOut for Classified Ad format listings.Added for EbayMotors Pro users.
            
	 */

	/**
	 * Arrays
	 */
}
eBayMotorsProPaymentMethodCheckOutEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = eBayMotorsProPaymentMethodCheckOutEnabledDefinitionType;