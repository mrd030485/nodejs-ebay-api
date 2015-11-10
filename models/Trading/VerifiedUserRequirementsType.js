function VerifiedUserRequirementsType(VerifiedUser, MinimumFeedbackScore) {

	/**
	  Documentation
	   
                Type defining the <b>VerifiedUserRequirements</b> container, which is used by the seller to block prospective buyers who do not pass a verified user check.
            
	 */

	/**
	 * Arrays
	 */
	this.VerifiedUser = VerifiedUser;
	this.MinimumFeedbackScore = MinimumFeedbackScore;
}
VerifiedUserRequirementsType.prototype.toJSON = function(with_null) {
	var json = { 
		VerifiedUser: (this.VerifiedUser === undefined)? null : this.VerifiedUser,
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
module.exports = VerifiedUserRequirementsType;