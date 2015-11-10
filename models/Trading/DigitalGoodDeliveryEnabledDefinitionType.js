function DigitalGoodDeliveryEnabledDefinitionType() {

	/**
	  Documentation
	   <span class="tablenote"><strong>Note:</strong> This type will be enabled with version 935. For those using versions older than 935, the <b>FeatureDefinitions.DigitalGoodDeliveryEnabled</b> field will not be
                    returned. </span> <br> Type defining the <b>DigitalGoodDeliveryEnabled</b> field that is returned under the <b>FeatureDefinitions</b> container of the <b>GetCategoryFeatures</b> response
                    (as long as 'DigitalGoodDeliveryEnabled' is included as a <b>FeatureID</b> value in the call request or no <b>FeatureID</b> values are passed into the call request). The <b>DigitalGoodDeliveryEnabled</b>
                    field is returned as an empty element (a boolean value is not returned) if one or more eBay API-enabled sites support digital gift card listings. <br><br> To verify if a specific eBay site supports digital gift card listings
                    (for most categories), look for a 'true' value in the <b>SiteDefaults.DigitalGoodDeliveryEnabled</b> field. <br><br> To verify if a specific category on a specific eBay site supports digital gift card listings,
                    pass in a <b>DigitalGoodDeliveryEnabled</b> value in the request, and then look for a 'true' value in the <b>DigitalGoodDeliveryEnabled</b> field of the corresponding <b>Category</b> node (match
                    up the <b>CategoryID<.b> values if more than one Category IDs were passed in the request).
	 */

	/**
	 * Arrays
	 */
}
DigitalGoodDeliveryEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = DigitalGoodDeliveryEnabledDefinitionType;