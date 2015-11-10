function VariationsEnabledDefinitionType() {

	/**
	  Documentation
	   
                Defines the multi-variation listing feature. If the field is present, the corresponding feature applies to the site. The field is returned as an empty element (e.g., a boolean value is not returned).<br> <br> Multi-variation listings contain
                items that are logically the same product, but that vary in their manufacturing details or packaging. For example, a particular brand and style of shirt could be available in different sizes and colors, such as "large blue" and "medium
                black" variations.
            
	 */

	/**
	 * Arrays
	 */
}
VariationsEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = VariationsEnabledDefinitionType;