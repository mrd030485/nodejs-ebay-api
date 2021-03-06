function BestOfferAutoAcceptEnabledDefinitionType() {

	/**
	  Documentation
	   Type defining the <b>BestOfferAutoAcceptEnabled</b> field that is returned under the <b>FeatureDefinitions</b> container of the <b>GetCategoryFeatures</b> response (as long as <code>BestOfferAutoAcceptEnabled</code>
                    or <code>BestOfferAutoDeclineEnabled</code> is included as a <b>FeatureID</b> value in the call request or no <b>FeatureID</b> values are passed into the call request). This field is returned as
                    an empty element (a boolean value is not returned) if one or more eBay API-enabled sites support the Best Offer Auto Accept feature. <br/><br/> To verify if a specific eBay site supports the Best Offer Auto Accept feature
                    (for most categories), look for a <code>true</code> value in the <b>SiteDefaults.BestOfferAutoAcceptEnabled</b> field. <br/><br/> To verify if a specific category on a specific eBay site supports
                    the Best Offer Auto Accept feature, pass in a <b>CategoryID</b> value in the request, and then look for a <code>true</code> value in the <b>BestOfferAutoAcceptEnabled</b> field of the corresponding
                    Category node (match up the <b>CategoryID</b> values if more than one Category IDs were passed in the request).
	 */

	/**
	 * Arrays
	 */
}
BestOfferAutoAcceptEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = BestOfferAutoAcceptEnabledDefinitionType;