function CalculatedShippingDiscountType(DiscountName, DiscountProfile) {

	/**
	  Documentation
	   Type used by the <b>CalculatedShippingDiscount</b> container, which is used in the <b>SetShippingDiscountProfiles</b> call to create one or more discounted calculated shipping rules. The <b>CalculatedShippingDiscount</b>
                    container is returned in the response of all other calls that use this type.
	 */

	/**
	 * Arrays
	 *	DiscountProfile: DiscountProfileType
	 */
	this.DiscountName = DiscountName;
	this.DiscountProfile = DiscountProfile;
}
CalculatedShippingDiscountType.prototype.toJSON = function(with_null) {
	var json = { 
		DiscountName: (this.DiscountName === undefined)? null : this.DiscountName,
		DiscountProfile: (this.DiscountProfile === undefined)? null : this.DiscountProfile
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
module.exports = CalculatedShippingDiscountType;