function GlobalShippingEnabledDefinitionType() {

	/**
	  Documentation
	   
                Specifies whether the Global Shipping Program (GSP) is enabled are not. The field is returned as an empty element (i.e., a boolean value is not returned).
            
	 */

	/**
	 * Arrays
	 */
}
GlobalShippingEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = GlobalShippingEnabledDefinitionType;