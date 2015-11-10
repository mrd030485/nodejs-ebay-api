function Group2MaxFlatShippingCostDefinitionType() {

	/**
	  Documentation
	   About shipping service group 2.
	 */

	/**
	 * Arrays
	 */
}
Group2MaxFlatShippingCostDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = Group2MaxFlatShippingCostDefinitionType;