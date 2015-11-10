function GetSellerDashboardRequestType() {

	/**
	  Documentation
	   Retrieves a brief summary of the requester's status as an eBay seller.
	 */

	/**
	 * Arrays
	 */
}
GetSellerDashboardRequestType.prototype.toJSON = function(with_null) {
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
module.exports = GetSellerDashboardRequestType;