function eBayMotorsProBestOfferEnabledDefinitionType() {

	/**
	  Documentation
	   
                Indicates whether Contact Seller is enabled for Classified Ads. Added for EbayMotors Pro users.
            
	 */

	/**
	 * Arrays
	 */
}
eBayMotorsProBestOfferEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = eBayMotorsProBestOfferEnabledDefinitionType;