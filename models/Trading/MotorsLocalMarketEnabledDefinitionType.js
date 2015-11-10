function MotorsLocalMarketEnabledDefinitionType() {

	/**
	  Documentation
	   
                Defines the Motors Local Market feature. If the Motors Local Market field is present, the corresponding feature applies to the Motors Local Market category. The field is returned as an empty element (e.g., a boolean value is not returned).
            
	 */

	/**
	 * Arrays
	 */
}
MotorsLocalMarketEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = MotorsLocalMarketEnabledDefinitionType;