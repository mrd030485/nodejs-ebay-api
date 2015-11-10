function GetClientAlertsAuthTokenRequestType() {

	/**
	  Documentation
	   Retrieves a token required for the GetUserAlerts call in the Client Alerts API.
	 */

	/**
	 * Arrays
	 */
}
GetClientAlertsAuthTokenRequestType.prototype.toJSON = function(with_null) {
	var json = { 
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
module.exports = GetClientAlertsAuthTokenRequestType;