function GetSellingManagerAlertsRequestType() {

	/**
	  Documentation
	   Retrieves Selling Manager alerts. This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
}
GetSellingManagerAlertsRequestType.prototype.toJSON = function(with_null) {
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
module.exports = GetSellingManagerAlertsRequestType;