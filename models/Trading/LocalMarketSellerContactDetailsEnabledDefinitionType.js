function LocalMarketSellerContactDetailsEnabledDefinitionType() {

	/**
	  Documentation
	   
                Defines the SellerContactDetailsEnabled feature. If the field is present, the category allows retrieval of seller-level contact information. The field is returned as an empty element (e.g., a boolean value is not returned). Added for Local Market users.
            
	 */

	/**
	 * Arrays
	 */
}
LocalMarketSellerContactDetailsEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalMarketSellerContactDetailsEnabledDefinitionType;