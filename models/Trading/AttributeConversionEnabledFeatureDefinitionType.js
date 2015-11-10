function AttributeConversionEnabledFeatureDefinitionType() {

	/**
	  Documentation
	   
                This type has been deprecated, as "old" eBay attributes are no longer supported.
            
	 */

	/**
	 * Arrays
	 */
}
AttributeConversionEnabledFeatureDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = AttributeConversionEnabledFeatureDefinitionType;