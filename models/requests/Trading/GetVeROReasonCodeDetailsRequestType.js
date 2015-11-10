function GetVeROReasonCodeDetailsRequestType(ReasonCodeID, ReturnAllSites) {

	/**
	  Documentation
	   Retrieves details for VeRO reason codes and their descriptions. You can specify a reason code ID to get details for a specific reason on the site specified in the request header. If ReasonCodeID is not passed in the request, all reason
                    codes are returned. Set ReturnAllSites to true to retrieve reason codes for all sites. You must be a member of the Verified Rights Owner (VeRO) Program to use this call.
	 */

	/**
	 * Arrays
	 */
	this.ReasonCodeID = ReasonCodeID;
	this.ReturnAllSites = ReturnAllSites;
}
GetVeROReasonCodeDetailsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ReasonCodeID: (this.ReasonCodeID === undefined)? null : this.ReasonCodeID,
		ReturnAllSites: (this.ReturnAllSites === undefined)? null : this.ReturnAllSites
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
module.exports = GetVeROReasonCodeDetailsRequestType;