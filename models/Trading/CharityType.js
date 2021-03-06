function CharityType(CharityName, CharityNumber, DonationPercent, CharityID, Mission, LogoURL, Status, CharityListing) {

	/**
	  Documentation
	   Identifies a Giving Works listing and benefiting nonprofit charity organization.
	 */

	/**
	 * Arrays
	 */
	this.CharityName = CharityName;
	this.CharityNumber = CharityNumber;
	this.DonationPercent = DonationPercent;
	this.CharityID = CharityID;
	this.Mission = Mission;
	this.LogoURL = LogoURL;
	this.Status = Status;
	this.CharityListing = CharityListing;
}
CharityType.prototype.toJSON = function(with_null) {
	var json = { 
		CharityName: (this.CharityName === undefined)? null : this.CharityName,
		CharityNumber: (this.CharityNumber === undefined)? null : this.CharityNumber,
		DonationPercent: (this.DonationPercent === undefined)? null : this.DonationPercent,
		CharityID: (this.CharityID === undefined)? null : this.CharityID,
		Mission: (this.Mission === undefined)? null : this.Mission,
		LogoURL: (this.LogoURL === undefined)? null : this.LogoURL,
		Status: (this.Status === undefined)? null : this.Status,
		CharityListing: (this.CharityListing === undefined)? null : this.CharityListing
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
module.exports = CharityType;