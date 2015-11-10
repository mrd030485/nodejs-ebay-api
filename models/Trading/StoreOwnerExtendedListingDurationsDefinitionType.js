function StoreOwnerExtendedListingDurationsDefinitionType() {

	/**
	  Documentation
	   
                If the field is present, the corresponding feature applies to the category. The field is returned as an empty element (i.e., a boolean value is not returned).
            
	 */

	/**
	 * Arrays
	 */
}
StoreOwnerExtendedListingDurationsDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = StoreOwnerExtendedListingDurationsDefinitionType;