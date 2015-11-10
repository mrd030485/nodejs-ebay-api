function ConditionValuesDefinitionType() {

	/**
	  Documentation
	   
                Defines the Item Condition feature. If a field of this type is present, the corresponding feature applies to the site. The field is returned as an empty element (e.g., a boolean value is not returned).
            
	 */

	/**
	 * Arrays
	 */
}
ConditionValuesDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = ConditionValuesDefinitionType;