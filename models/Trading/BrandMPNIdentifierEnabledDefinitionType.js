function BrandMPNIdentifierEnabledDefinitionType() {

	/**
	  Documentation
	   Type defining the <b>BrandMPNIdentifierEnabled</b> field that is returned under the <b>FeatureDefinitions</b> container of the <b>GetCategoryFeatures</b> response (as long as <code>BrandMPNIdentifierEnabled</code>
                    is included as a <b>FeatureID</b> value in the call request or no <b>FeatureID</b> values are passed into the call request). This field is returned as an empty element (a boolean value is not returned) if one
                    or more eBay API-enabled sites support the Brand/Manufacturer Part Number feature. <br/><br/> To verify if a specific eBay site supports the Brand/Manufacturer Part Number feature (for most categories), look for a <code>true</code>
                    value in the <b>SiteDefaults.BrandMPNIdentifierEnabled</b> field. <br/><br/> To verify if a specific category on a specific eBay site supports the Brand/Manufacturer Part Number feature, pass in a <b>CategoryID</b>
                    value in the request, and then look for a <code>true</code> value in the <b>BrandMPNIdentifierEnabled</b> field of the corresponding <b>Category</b> node (match up the <b>CategoryID</b>
                    values if more than one Category ID was passed in the request).
	 */

	/**
	 * Arrays
	 */
}
BrandMPNIdentifierEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = BrandMPNIdentifierEnabledDefinitionType;