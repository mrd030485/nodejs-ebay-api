function FeedbackPeriodType(PeriodInDays, Count) {

	/**
	  Documentation
	   Contains the data for one type of feedback for one predefined time period. Parent FeedbackPeriodArrayType object indicates the type of feedback counted: positive, neutral, negative, or total. Output only, in the summary feedback data returned
                    by GetFeedback.
	 */

	/**
	 * Arrays
	 */
	this.PeriodInDays = PeriodInDays;
	this.Count = Count;
}
FeedbackPeriodType.prototype.toJSON = function(with_null) {
	var json = { 
		PeriodInDays: (this.PeriodInDays === undefined)? null : this.PeriodInDays,
		Count: (this.Count === undefined)? null : this.Count
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
module.exports = FeedbackPeriodType;