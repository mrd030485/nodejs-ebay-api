function SubscriptionType(EIASToken, SiteID, Active) {

	/**
	  Documentation
	   
	 */

	/**
	 * Arrays
	 */
	this.EIASToken = EIASToken;
	this.SiteID = SiteID;
	this.Active = Active;
}
SubscriptionType.prototype.toJSON = function(with_null) {
	var json = { 
		EIASToken: (this.EIASToken === undefined)? null : this.EIASToken,
		SiteID: (this.SiteID === undefined)? null : this.SiteID,
		Active: (this.Active === undefined)? null : this.Active
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
module.exports = SubscriptionType;