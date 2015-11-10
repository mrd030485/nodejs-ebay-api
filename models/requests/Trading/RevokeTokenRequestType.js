function RevokeTokenRequestType(UnsubscribeNotification) {

	/**
	  Documentation
	   Revokes a token before it would otherwise expire.
	 */

	/**
	 * Arrays
	 */
	this.UnsubscribeNotification = UnsubscribeNotification;
}
RevokeTokenRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		UnsubscribeNotification: (this.UnsubscribeNotification === undefined)? null : this.UnsubscribeNotification
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
module.exports = RevokeTokenRequestType;