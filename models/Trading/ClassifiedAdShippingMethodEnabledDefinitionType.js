function ClassifiedAdShippingMethodEnabledDefinitionType() {

	/**
	  Documentation
	   
                Indicates whether shipping options are available for the category.
            
	 */

	/**
	 * Arrays
	 */
}
ClassifiedAdShippingMethodEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = ClassifiedAdShippingMethodEnabledDefinitionType;