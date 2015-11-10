function MinimumReservePriceDefinitionType() {

	/**
	  Documentation
	   
                Defines the Minimum Reserve Price feature. If the field is present, the feature applies to the category. The field is returned as an empty element (i.e., a boolean value is not returned).
            
	 */

	/**
	 * Arrays
	 */
}
MinimumReservePriceDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = MinimumReservePriceDefinitionType;