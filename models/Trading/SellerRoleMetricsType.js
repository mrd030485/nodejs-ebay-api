function SellerRoleMetricsType(PositiveFeedbackLeftCount, NegativeFeedbackLeftCount, NeutralFeedbackLeftCount, FeedbackLeftPercent, RepeatBuyerCount, RepeatBuyerPercent, UniqueBuyerCount, TransactionPercent, CrossBorderTransactionCount, CrossBorderTransactionPercent) {

	/**
	  Documentation
	   Specifies 1 year feedback metrics for a seller.
	 */

	/**
	 * Arrays
	 */
	this.PositiveFeedbackLeftCount = PositiveFeedbackLeftCount;
	this.NegativeFeedbackLeftCount = NegativeFeedbackLeftCount;
	this.NeutralFeedbackLeftCount = NeutralFeedbackLeftCount;
	this.FeedbackLeftPercent = FeedbackLeftPercent;
	this.RepeatBuyerCount = RepeatBuyerCount;
	this.RepeatBuyerPercent = RepeatBuyerPercent;
	this.UniqueBuyerCount = UniqueBuyerCount;
	this.TransactionPercent = TransactionPercent;
	this.CrossBorderTransactionCount = CrossBorderTransactionCount;
	this.CrossBorderTransactionPercent = CrossBorderTransactionPercent;
}
SellerRoleMetricsType.prototype.toJSON = function(with_null) {
	var json = { 
		PositiveFeedbackLeftCount: (this.PositiveFeedbackLeftCount === undefined)? null : this.PositiveFeedbackLeftCount,
		NegativeFeedbackLeftCount: (this.NegativeFeedbackLeftCount === undefined)? null : this.NegativeFeedbackLeftCount,
		NeutralFeedbackLeftCount: (this.NeutralFeedbackLeftCount === undefined)? null : this.NeutralFeedbackLeftCount,
		FeedbackLeftPercent: (this.FeedbackLeftPercent === undefined)? null : this.FeedbackLeftPercent,
		RepeatBuyerCount: (this.RepeatBuyerCount === undefined)? null : this.RepeatBuyerCount,
		RepeatBuyerPercent: (this.RepeatBuyerPercent === undefined)? null : this.RepeatBuyerPercent,
		UniqueBuyerCount: (this.UniqueBuyerCount === undefined)? null : this.UniqueBuyerCount,
		TransactionPercent: (this.TransactionPercent === undefined)? null : this.TransactionPercent,
		CrossBorderTransactionCount: (this.CrossBorderTransactionCount === undefined)? null : this.CrossBorderTransactionCount,
		CrossBorderTransactionPercent: (this.CrossBorderTransactionPercent === undefined)? null : this.CrossBorderTransactionPercent
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
module.exports = SellerRoleMetricsType;