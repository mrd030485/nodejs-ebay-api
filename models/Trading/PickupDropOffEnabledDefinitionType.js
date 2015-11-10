function PickupDropOffEnabledDefinitionType() {

	/**
	  Documentation
	   
                The <b>PickupDropOffEnabled</b> field is returned as an empty element (a boolean value is not returned) if one or more eBay API-enabled sites support the "Click and Collect" feature. This field will be returned as long as 'PickupDropOffEnabled'
                is included as a <b>FeatureID</b> value in the call request or no <b>FeatureID</b> values are passed into the call request. <br/><br/> Currently, the "Click and Collect" feature is only available on
                the eBay UK site (site ID=3) and eBay Australia site (site ID=15). <br/><br/> To verify if a specific category supports the the "Click and Collect" feature, pass in a <b>CategoryID</b> value in the request, and
                then look for a 'true' value in the <b>PickupDropOffEnabled</b> field of the corresponding Category node (match up the <b>CategoryID</b> values if more than one Category IDs were passed in the request).
            
	 */

	/**
	 * Arrays
	 */
}
PickupDropOffEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = PickupDropOffEnabledDefinitionType;