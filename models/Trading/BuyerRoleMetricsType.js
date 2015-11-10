function BuyerRoleMetricsType(PositiveFeedbackLeftCount, NegativeFeedbackLeftCount, NeutralFeedbackLeftCount, FeedbackLeftPercent) {

	/**
	  Documentation
	   Type defining the <b>BuyerRoleMetrics</b> container, which consists of details relating to the eBay buyer's one-year history of leaving feedback for the seller.
	 */

	/**
	 * Arrays
	 */
	this.PositiveFeedbackLeftCount = PositiveFeedbackLeftCount;
	this.NegativeFeedbackLeftCount = NegativeFeedbackLeftCount;
	this.NeutralFeedbackLeftCount = NeutralFeedbackLeftCount;
	this.FeedbackLeftPercent = FeedbackLeftPercent;
}
BuyerRoleMetricsType.prototype.toJSON = function(with_null) {
	var json = { 
		PositiveFeedbackLeftCount: (this.PositiveFeedbackLeftCount === undefined)? null : this.PositiveFeedbackLeftCount,
		NegativeFeedbackLeftCount: (this.NegativeFeedbackLeftCount === undefined)? null : this.NegativeFeedbackLeftCount,
		NeutralFeedbackLeftCount: (this.NeutralFeedbackLeftCount === undefined)? null : this.NeutralFeedbackLeftCount,
		FeedbackLeftPercent: (this.FeedbackLeftPercent === undefined)? null : this.FeedbackLeftPercent
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
module.exports = BuyerRoleMetricsType;