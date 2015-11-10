function ValidateChallengeInputRequestType(ChallengeToken, UserInput, KeepTokenValid) {

	/**
	  Documentation
	   Validates the user response to a <b class="con">GetChallengeToken</b> botblock challenge.
	 */

	/**
	 * Arrays
	 */
	this.ChallengeToken = ChallengeToken;
	this.UserInput = UserInput;
	this.KeepTokenValid = KeepTokenValid;
}
ValidateChallengeInputRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ChallengeToken: (this.ChallengeToken === undefined)? null : this.ChallengeToken,
		UserInput: (this.UserInput === undefined)? null : this.UserInput,
		KeepTokenValid: (this.KeepTokenValid === undefined)? null : this.KeepTokenValid
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
module.exports = ValidateChallengeInputRequestType;