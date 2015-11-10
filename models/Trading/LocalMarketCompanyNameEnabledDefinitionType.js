function LocalMarketCompanyNameEnabledDefinitionType() {

	/**
	  Documentation
	   
                Indicates whether the category supports the use of the company name to contact the seller for Classified Ad format listings. Added for Local Market users.
            
	 */

	/**
	 * Arrays
	 */
}
LocalMarketCompanyNameEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalMarketCompanyNameEnabledDefinitionType;