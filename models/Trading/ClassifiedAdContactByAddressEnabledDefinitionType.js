function ClassifiedAdContactByAddressEnabledDefinitionType() {

	/**
	  Documentation
	   
                Indicates whether the category supports the use of an address when contacting the seller for Classified Ad format listings. Added for the For Sale By Owner format.
            
	 */

	/**
	 * Arrays
	 */
}
ClassifiedAdContactByAddressEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = ClassifiedAdContactByAddressEnabledDefinitionType;