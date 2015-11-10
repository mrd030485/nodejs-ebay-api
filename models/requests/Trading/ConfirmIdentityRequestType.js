function ConfirmIdentityRequestType(SessionID) {

	/**
	  Documentation
	   Returns the ID of a user who has gone through an application's consent flow process for obtaining an authorization token.
	 */

	/**
	 * Arrays
	 */
	this.SessionID = SessionID;
}
ConfirmIdentityRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		SessionID: (this.SessionID === undefined)? null : this.SessionID
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
module.exports = ConfirmIdentityRequestType;