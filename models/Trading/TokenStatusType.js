function TokenStatusType(Status, EIASToken, ExpirationTime, RevocationTime) {

	/**
	  Documentation
	   Returns token status.
	 */

	/**
	 * Arrays
	 */
	this.Status = Status;
	this.EIASToken = EIASToken;
	this.ExpirationTime = ExpirationTime;
	this.RevocationTime = RevocationTime;
}
TokenStatusType.prototype.toJSON = function(with_null) {
	var json = { 
		Status: (this.Status === undefined)? null : this.Status,
		EIASToken: (this.EIASToken === undefined)? null : this.EIASToken,
		ExpirationTime: (this.ExpirationTime === undefined)? null : this.ExpirationTime,
		RevocationTime: (this.RevocationTime === undefined)? null : this.RevocationTime
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
module.exports = TokenStatusType;