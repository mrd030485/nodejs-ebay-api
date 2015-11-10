function LocalMarketShippingMethodEnabledDefinitionType() {

	/**
	  Documentation
	   
                Indicates if shipping options are available for Classified Ad format listings in the category. Added for Local Market users.
            
	 */

	/**
	 * Arrays
	 */
}
LocalMarketShippingMethodEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalMarketShippingMethodEnabledDefinitionType;