function ClassifiedAdPhoneCountDefinitionType() {

	/**
	  Documentation
	   Indicates which phone option the category supports for contacting the seller for Classified Ad format listings. Added for the For Sale By Owner format.
	 */

	/**
	 * Arrays
	 */
}
ClassifiedAdPhoneCountDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = ClassifiedAdPhoneCountDefinitionType;