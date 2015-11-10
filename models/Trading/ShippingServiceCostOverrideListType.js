function ShippingServiceCostOverrideListType(ShippingServiceCostOverride) {

	/**
	  Documentation
	   
                Type defining the <b>ShippingServiceCostOverrideList</b> container, which is used when the seller wants to override the flat shipping costs for all domestic and/or all international shipping services defined in the Business Policies shipping
                profile referenced in the <b>SellerProfiles.SellerShippingProfile.ShippingProfileID</b> field of an Add/Revise/Relist call. <br/><br/> Shipping service cost overrides are a listing-level concept, and the shipping
                costs specified through each <b>ShippingServiceCostOverrideList.ShippingServiceCostOverride</b> container will not change the shipping costs defined for the same shipping services in the Business Policies shipping profile.
            
	 */

	/**
	 * Arrays
	 *	ShippingServiceCostOverride: ShippingServiceCostOverrideType
	 */
	this.ShippingServiceCostOverride = ShippingServiceCostOverride;
}
ShippingServiceCostOverrideListType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingServiceCostOverride: (this.ShippingServiceCostOverride === undefined)? null : this.ShippingServiceCostOverride
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
module.exports = ShippingServiceCostOverrideListType;