function GetPromotionalSaleDetailsRequestType(PromotionalSaleID, PromotionalSaleStatus) {

	/**
	  Documentation
	   Retrieves information about promotional sales set up by an eBay store owner (the authenticated caller).
	 */

	/**
	 * Arrays
	 */
	this.PromotionalSaleID = PromotionalSaleID;
	this.PromotionalSaleStatus = PromotionalSaleStatus;
}
GetPromotionalSaleDetailsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		PromotionalSaleID: (this.PromotionalSaleID === undefined)? null : this.PromotionalSaleID,
		PromotionalSaleStatus: (this.PromotionalSaleStatus === undefined)? null : this.PromotionalSaleStatus
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
module.exports = GetPromotionalSaleDetailsRequestType;