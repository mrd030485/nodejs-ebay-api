function SupportedSellerProfilesType(SupportedSellerProfile) {

	/**
	  Documentation
	   
                Type defining the <b>SupportedSellerProfiles</b> container for all payment, return, and shipping policy profiles that a seller has defined for a site.
            
	 */

	/**
	 * Arrays
	 *	SupportedSellerProfile: SupportedSellerProfileType
	 */
	this.SupportedSellerProfile = SupportedSellerProfile;
}
SupportedSellerProfilesType.prototype.toJSON = function(with_null) {
	var json = { 
		SupportedSellerProfile: (this.SupportedSellerProfile === undefined)? null : this.SupportedSellerProfile
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
module.exports = SupportedSellerProfilesType;