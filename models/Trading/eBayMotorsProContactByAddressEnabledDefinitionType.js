function eBayMotorsProContactByAddressEnabledDefinitionType() {

	/**
	  Documentation
	   
                Indicates whether the category supports the use of an address when contacting the seller about Classified Ad format listings. Added for EbayMotors Pro users.
            
	 */

	/**
	 * Arrays
	 */
}
eBayMotorsProContactByAddressEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = eBayMotorsProContactByAddressEnabledDefinitionType;