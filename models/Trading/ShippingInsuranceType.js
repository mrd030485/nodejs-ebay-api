function ShippingInsuranceType(InsuranceOption, FlatRateInsuranceRangeCost) {

	/**
	  Documentation
	   Details about insurance for <a href="http://developer.ebay.com/DevZone/guides/ebayfeatures/Development/Listing-AnItem.html#CombinedInvoice">Combined Invoice</a> orders.
	 */

	/**
	 * Arrays
	 *	FlatRateInsuranceRangeCost: FlatRateInsuranceRangeCostType
	 */
	this.InsuranceOption = InsuranceOption;
	this.FlatRateInsuranceRangeCost = FlatRateInsuranceRangeCost;
}
ShippingInsuranceType.prototype.toJSON = function(with_null) {
	var json = { 
		InsuranceOption: (this.InsuranceOption === undefined)? null : this.InsuranceOption,
		FlatRateInsuranceRangeCost: (this.FlatRateInsuranceRangeCost === undefined)? null : this.FlatRateInsuranceRangeCost
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
module.exports = ShippingInsuranceType;