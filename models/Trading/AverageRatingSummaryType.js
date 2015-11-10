function AverageRatingSummaryType(FeedbackSummaryPeriod, AverageRatingDetails) {

	/**
	  Documentation
	   This type is used by the <b>AverageRatingSummary</b> container that is returned in the <b>GetFeedback</b> call to display the seller's rating information across the four different Detail Seller Rating areas. The
                    Detail Seller Rating subject areas include Item as Described, Communication, Shipping Time, and Shipping and Handling charges.
	 */

	/**
	 * Arrays
	 *	AverageRatingDetails: AverageRatingDetailsType
	 */
	this.FeedbackSummaryPeriod = FeedbackSummaryPeriod;
	this.AverageRatingDetails = AverageRatingDetails;
}
AverageRatingSummaryType.prototype.toJSON = function(with_null) {
	var json = { 
		FeedbackSummaryPeriod: (this.FeedbackSummaryPeriod === undefined)? null : this.FeedbackSummaryPeriod,
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
module.exports = AverageRatingSummaryType;