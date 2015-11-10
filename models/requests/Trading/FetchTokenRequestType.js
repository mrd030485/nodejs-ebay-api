function FetchTokenRequestType(SecretID, SessionID) {

	/**
	  Documentation
	   Retrieves an authentication token for a user.&nbsp;<b>Also for Half.com</b>.
	 */

	/**
	 * Arrays
	 */
	this.SecretID = SecretID;
	this.SessionID = SessionID;
}
FetchTokenRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		SecretID: (this.SecretID === undefined)? null : this.SecretID,
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
module.exports = FetchTokenRequestType;