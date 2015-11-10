function MinimumFeedbackScoreDetailsType(FeedbackScore) {

	/**
	  Documentation
	   
                Type defining the <b>MinimumFeedbackScore</b> container that is returned in <b>GeteBayDetails</b>. The <b>MinimumFeedbackScore</b> container consists of the values that can be used in the <b>BuyerRequirementDetails.MinimumFeedbackScore</b>
                field when listing an item through an Add/Revise/Relist API call. The Feedback Score for a potential buyer must be greater than or equal to the specified value, or that buyer is blocked from buying the item. <br/><br/> For
                the <b>MinimumFeedbackScore</b> container to appear in the <b>GeteBayDetails</b> response, <b>BuyerRequirementDetails</b> must be one of the values passed into the <b>DetailName</b> field
                in the <b>GeteBayDetails</b> request (or, no <b>DetailName</b> filters should be used).
            
	 */

	/**
	 * Arrays
	 */
	this.FeedbackScore = FeedbackScore;
}
MinimumFeedbackScoreDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		FeedbackScore: (this.FeedbackScore === undefined)? null : this.FeedbackScore
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
module.exports = MinimumFeedbackScoreDetailsType;