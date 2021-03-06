function UPCEnabledDefinitionType() {

	/**
	  Documentation
	   Type defining the <b>UPCEnabled</b> field that is returned under the <b>FeatureDefinitions</b> container of the <b>GetCategoryFeatures</b> response (as long as 'UPCEnabled' is included as a <b>FeatureID</b>
                    value in the call request or no <b>FeatureID</b> values are passed into the call request). This field is returned as an empty element (a boolean value is not returned) if one or more eBay API-enabled sites support the UPC
                    product identifying feature. <br><br> To verify if a specific eBay site supports the UPC product identifying feature (for most categories), look for a 'true' value in the <b>SiteDefaults.UPCEnabled</b> field.
                    <br><br> To verify if a specific category on a specific eBay site supports the UPC product identifying feature, pass in a <b>CategoryID</b> value in the request, and then look for a 'true' value in the <b>UPCEnabled</b>
                    field of the corresponding <b>Category</b> node (match up the <b>CategoryID<.b> values if more than one Category IDs were passed in the request).
	 */

	/**
	 * Arrays
	 */
}
UPCEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = UPCEnabledDefinitionType;