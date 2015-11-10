function FlatShippingDiscountType(DiscountName, DiscountProfile) {

	/**
	  Documentation
	   Details of an individual discount profile defined by the user for flat rate shipping.
	 */

	/**
	 * Arrays
	 *	DiscountProfile: DiscountProfileType
	 */
	this.DiscountName = DiscountName;
	this.DiscountProfile = DiscountProfile;
}
FlatShippingDiscountType.prototype.toJSON = function(with_null) {
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
module.exports = FlatShippingDiscountType;