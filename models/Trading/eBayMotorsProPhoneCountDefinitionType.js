function eBayMotorsProPhoneCountDefinitionType() {

	/**
	  Documentation
	   Indicates which phone option the category supports for contacting the seller about Classified Ad format listings. Added for EbayMotors Pro users.
	 */

	/**
	 * Arrays
	 */
}
eBayMotorsProPhoneCountDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = eBayMotorsProPhoneCountDefinitionType;