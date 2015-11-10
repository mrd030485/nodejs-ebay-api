function SellerRatingSummaryArrayType(AverageRatingSummary) {

	/**
	  Documentation
	   
                Type defining the <b>SellerRatingSummaryArray</b> container that is returned in the <b>GetFeedback</b> response. The <b>SellerRatingSummaryArray</b> container consists of an array of <b>AverageRatingSummary</b>
                containers, which provide details on Detailed Seller Ratings (DSRs), including the type of rating (Communication, Item As Described, Shipping and Handling Charges, or Shipping Time), the seller's average rating for that DSR type, the total
                number of DSR ratings, and the period in which those ratings were received (the last year or the last 30 days).
            
	 */

	/**
	 * Arrays
	 *	AverageRatingSummary: AverageRatingSummaryType
	 */
	this.AverageRatingSummary = AverageRatingSummary;
}
SellerRatingSummaryArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		AverageRatingSummary: (this.AverageRatingSummary === undefined)? null : this.AverageRatingSummary
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
module.exports = SellerRatingSummaryArrayType;