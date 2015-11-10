function FeedbackPeriodArrayType(FeedbackPeriod) {

	/**
	  Documentation
	   
                Container for a set of feedback statistics. Contains zero one or multiple FeedbackPeriod objects. Output only, for the summary feedback data returned by GetFeedback.
            
	 */

	/**
	 * Arrays
	 *	FeedbackPeriod: FeedbackPeriodType
	 */
	this.FeedbackPeriod = FeedbackPeriod;
}
FeedbackPeriodArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		FeedbackPeriod: (this.FeedbackPeriod === undefined)? null : this.FeedbackPeriod
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
module.exports = FeedbackPeriodArrayType;