function ValidateTestUserRegistrationRequestType(FeedbackScore, RegistrationDate, SubscribeSA, SubscribeSAPro, SubscribeSM, SubscribeSMPro) {

	/**
	  Documentation
	   Requests to enable a test user to sell items in the Sandbox environment.
	 */

	/**
	 * Arrays
	 */
	this.FeedbackScore = FeedbackScore;
	this.RegistrationDate = RegistrationDate;
	this.SubscribeSA = SubscribeSA;
	this.SubscribeSAPro = SubscribeSAPro;
	this.SubscribeSM = SubscribeSM;
	this.SubscribeSMPro = SubscribeSMPro;
}
ValidateTestUserRegistrationRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		FeedbackScore: (this.FeedbackScore === undefined)? null : this.FeedbackScore,
		RegistrationDate: (this.RegistrationDate === undefined)? null : this.RegistrationDate,
		SubscribeSA: (this.SubscribeSA === undefined)? null : this.SubscribeSA,
		SubscribeSAPro: (this.SubscribeSAPro === undefined)? null : this.SubscribeSAPro,
		SubscribeSM: (this.SubscribeSM === undefined)? null : this.SubscribeSM,
		SubscribeSMPro: (this.SubscribeSMPro === undefined)? null : this.SubscribeSMPro
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
module.exports = ValidateTestUserRegistrationRequestType;