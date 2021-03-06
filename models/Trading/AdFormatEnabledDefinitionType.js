function AdFormatEnabledDefinitionType() {

	/**
	  Documentation
	   Type defining the <b>AdFormatEnabled</b> field that is returned under the <b>FeatureDefinitions</b> container if <code>AdFormatEnabled</code> is used as a <b>FeatureID</b> value in the request,
                    or if no <b>FeatureID</b> values are used in the request. This field is returned as an empty element (a boolean value is not returned) if one or more eBay API-enabled sites support Classified Ad listings. <br> <br>
                    To verify if a specific eBay site supports Classified Ad listings (for most categories), look for a <code>true</code> value in the <b>SiteDefaults.AdFormatEnabled</b> field. <br> <br> To verify if
                    a specific category on a specific eBay site supports Classified Ad listings, pass in a <b>CategoryID</b> value in the request, and then look for a <code>true</code> value in the <b>AdFormatEnabled</b>
                    field of the corresponding <b>Category</b> node (match up the <b>CategoryID</b> values if more than one Category IDs were passed in the request).
	 */

	/**
	 * Arrays
	 */
}
AdFormatEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = AdFormatEnabledDefinitionType;