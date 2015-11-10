function StoreInventoryEnabledDefinitionType() {

	/**
	  Documentation
	   
                Defines the StoreInventoryEnabled feature. If the field is present, the corresponding feature applies to the category. The field is returned as an empty element (e.g., a boolean value is not returned).value different from site. 
	 */

	/**
	 * Arrays
	 */
}
StoreInventoryEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = StoreInventoryEnabledDefinitionType;