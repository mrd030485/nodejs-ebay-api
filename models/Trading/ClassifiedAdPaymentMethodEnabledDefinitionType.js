function ClassifiedAdPaymentMethodEnabledDefinitionType() {

	/**
	  Documentation
	   
                Indicates whether Contact Seller is enabled Classified Ads.
            
	 */

	/**
	 * Arrays
	 */
}
ClassifiedAdPaymentMethodEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = ClassifiedAdPaymentMethodEnabledDefinitionType;