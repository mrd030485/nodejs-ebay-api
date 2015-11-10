function Group1MaxFlatShippingCostDefinitionType() {

	/**
	  Documentation
	   About shipping service group 1.
	 */

	/**
	 * Arrays
	 */
}
Group1MaxFlatShippingCostDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = Group1MaxFlatShippingCostDefinitionType;