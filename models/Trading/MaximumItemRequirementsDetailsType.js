function MaximumItemRequirementsDetailsType(MaximumItemCount, MinimumFeedbackScore) {

	/**
	  Documentation
	   A means of limiting unpaying or low feedback bidders.
	 */

	/**
	 * Arrays
	 */
	this.MaximumItemCount = MaximumItemCount;
	this.MinimumFeedbackScore = MinimumFeedbackScore;
}
MaximumItemRequirementsDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		MaximumItemCount: (this.MaximumItemCount === undefined)? null : this.MaximumItemCount,
		MinimumFeedbackScore: (this.MinimumFeedbackScore === undefined)? null : this.MinimumFeedbackScore
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
module.exports = MaximumItemRequirementsDetailsType;