function SellerFeeDiscountDashboardType(Percent) {

	/**
	  Documentation
	   
                PowerSeller discount information (e.g., to show in a Seller Dashboard). As a PowerSeller, you can earn discounts on your monthly invoice Final Value Fees based on how well you're doing as a seller.
            
	 */

	/**
	 * Arrays
	 */
	this.Percent = Percent;
}
SellerFeeDiscountDashboardType.prototype.toJSON = function(with_null) {
	var json = { 
		Percent: (this.Percent === undefined)? null : this.Percent
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
module.exports = SellerFeeDiscountDashboardType;