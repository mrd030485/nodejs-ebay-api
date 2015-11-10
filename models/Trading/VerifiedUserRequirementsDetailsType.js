function VerifiedUserRequirementsDetailsType(VerifiedUser, FeedbackScore) {

	/**
	  Documentation
	   
                Type defining the <b>BuyerRequirementDetails.VerifiedUserRequirements</b> container that is returned in <b>GeteBayDetails</b>. The <b>VerifiedUserRequirements</b> container provides the <b>VerifiedUser</b>
                and <b>FeedbackScore</b> values that may be used in listing calls to restrict unverified users who have Feedback scores below the minimum threshold.
            
	 */

	/**
	 * Arrays
	 */
	this.VerifiedUser = VerifiedUser;
	this.FeedbackScore = FeedbackScore;
}
VerifiedUserRequirementsDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		VerifiedUser: (this.VerifiedUser === undefined)? null : this.VerifiedUser,
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
module.exports = VerifiedUserRequirementsDetailsType;