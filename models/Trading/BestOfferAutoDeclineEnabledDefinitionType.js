function BestOfferAutoDeclineEnabledDefinitionType() {

	/**
	  Documentation
	   Type defining the <b>BestOfferAutoDeclineEnabled</b> field that is returned under the <b>FeatureDefinitions</b> container of the <b>GetCategoryFeatures</b> response (as long as <code>BestOfferAutoDeclineEnabled</code>
                    or <code>BestOfferAutoAcceptEnabled</code> is included as a <b>FeatureID</b> value in the call request or no <b>FeatureID</b> values are passed into the call request). This field is returned as an
                    empty element (a boolean value is not returned) if one or more eBay API-enabled sites support the Best Offer Auto Decline feature. <br/><br/> To verify if a specific eBay site supports the Best Offer Auto Decline feature
                    (for most categories), look for a <code>true</code> value in the <b>SiteDefaults.BestOfferAutoDeclineEnabled</b> field. <br/><br/> To verify if a specific category on a specific eBay site supports
                    the Best Offer Auto Decline feature, pass in a <b>CategoryID</b> value in the request, and then look for a <code>true</code> value in the <b>BestOfferAutoDeclineEnabled</b> field of the corresponding
                    Category node (match up the <b>CategoryID</b> values if more than one Category IDs were passed in the request).
	 */

	/**
	 * Arrays
	 */
}
BestOfferAutoDeclineEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = BestOfferAutoDeclineEnabledDefinitionType;