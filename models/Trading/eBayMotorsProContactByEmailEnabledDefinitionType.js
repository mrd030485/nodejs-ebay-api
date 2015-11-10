function eBayMotorsProContactByEmailEnabledDefinitionType() {

	/**
	  Documentation
	   Indicates whether the category supports the use of email to contact the seller for Classified Ad format listings.Added for EbayMotors Pro users.
	 */

	/**
	 * Arrays
	 */
}
eBayMotorsProContactByEmailEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = eBayMotorsProContactByEmailEnabledDefinitionType;