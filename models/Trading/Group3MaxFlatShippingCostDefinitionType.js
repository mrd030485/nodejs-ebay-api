function Group3MaxFlatShippingCostDefinitionType() {

	/**
	  Documentation
	   
                About shipping service group 3.
            
	 */

	/**
	 * Arrays
	 */
}
Group3MaxFlatShippingCostDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = Group3MaxFlatShippingCostDefinitionType;