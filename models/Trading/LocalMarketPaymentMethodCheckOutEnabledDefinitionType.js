function LocalMarketPaymentMethodCheckOutEnabledDefinitionType() {

	/**
	  Documentation
	   Indicates whether the category supports the use of payment method checkOut for Classified Ad format listings. Added for Local market users.
	 */

	/**
	 * Arrays
	 */
}
LocalMarketPaymentMethodCheckOutEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalMarketPaymentMethodCheckOutEnabledDefinitionType;