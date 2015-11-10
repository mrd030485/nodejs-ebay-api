function AverageRatingDetailArrayType(AverageRatingDetails) {

	/**
	  Documentation
	   
                This type has been deprecated and its functionality replaced by <b>SellerRatingSummaryArrayType</b>.
            
	 */

	/**
	 * Arrays
	 *	AverageRatingDetails: AverageRatingDetailsType
	 */
	this.AverageRatingDetails = AverageRatingDetails;
}
AverageRatingDetailArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		AverageRatingDetails: (this.AverageRatingDetails === undefined)? null : this.AverageRatingDetails
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
module.exports = AverageRatingDetailArrayType;