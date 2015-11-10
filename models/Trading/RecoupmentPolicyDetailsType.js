function RecoupmentPolicyDetailsType(EnforcedOnListingSite, EnforcedOnRegistrationSite, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   Details the recoupment policy on this site. There are two sites involved in recoupment - the listing site and the user registration site, each of which must agree before eBay enforces recoupment for a seller and listing.
	 */

	/**
	 * Arrays
	 */
	this.EnforcedOnListingSite = EnforcedOnListingSite;
	this.EnforcedOnRegistrationSite = EnforcedOnRegistrationSite;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
RecoupmentPolicyDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		EnforcedOnListingSite: (this.EnforcedOnListingSite === undefined)? null : this.EnforcedOnListingSite,
		EnforcedOnRegistrationSite: (this.EnforcedOnRegistrationSite === undefined)? null : this.EnforcedOnRegistrationSite,
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime
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
module.exports = RecoupmentPolicyDetailsType;