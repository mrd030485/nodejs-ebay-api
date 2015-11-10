function GetCharitiesRequestType(CharityID, CharityName, Query, CharityRegion, CharityDomain, IncludeDescription, MatchType, Featured, CampaignID) {

	/**
	  Documentation
	   Searches for nonprofit charity organizations that meet the criteria specified in the request. It is recommended that you use at least one input filter, because this call no longer returns all charities when made without filters.
	 */

	/**
	 * Arrays
	 */
	this.CharityID = CharityID;
	this.CharityName = CharityName;
	this.Query = Query;
	this.CharityRegion = CharityRegion;
	this.CharityDomain = CharityDomain;
	this.IncludeDescription = IncludeDescription;
	this.MatchType = MatchType;
	this.Featured = Featured;
	this.CampaignID = CampaignID;
}
GetCharitiesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		CharityID: (this.CharityID === undefined)? null : this.CharityID,
		CharityName: (this.CharityName === undefined)? null : this.CharityName,
		Query: (this.Query === undefined)? null : this.Query,
		CharityRegion: (this.CharityRegion === undefined)? null : this.CharityRegion,
		CharityDomain: (this.CharityDomain === undefined)? null : this.CharityDomain,
		IncludeDescription: (this.IncludeDescription === undefined)? null : this.IncludeDescription,
		MatchType: (this.MatchType === undefined)? null : this.MatchType,
		Featured: (this.Featured === undefined)? null : this.Featured,
		CampaignID: (this.CampaignID === undefined)? null : this.CampaignID
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
module.exports = GetCharitiesRequestType;