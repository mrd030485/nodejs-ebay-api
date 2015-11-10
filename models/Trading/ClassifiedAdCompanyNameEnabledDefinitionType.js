function ClassifiedAdCompanyNameEnabledDefinitionType() {

	/**
	  Documentation
	   
                Indicates whether the category supports the use of a company name when contacting the seller for Classified Ad format listings. Added for the For Sale By Owner format.
            
	 */

	/**
	 * Arrays
	 */
}
ClassifiedAdCompanyNameEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = ClassifiedAdCompanyNameEnabledDefinitionType;