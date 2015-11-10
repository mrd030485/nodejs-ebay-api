function ListingCheckoutRedirectPreferenceType(ProStoresStoreName, SellerThirdPartyUsername) {

	/**
	  Documentation
	   ProStores listing level preferences.
	 */

	/**
	 * Arrays
	 */
	this.ProStoresStoreName = ProStoresStoreName;
	this.SellerThirdPartyUsername = SellerThirdPartyUsername;
}
ListingCheckoutRedirectPreferenceType.prototype.toJSON = function(with_null) {
	var json = { 
		ProStoresStoreName: (this.ProStoresStoreName === undefined)? null : this.ProStoresStoreName,
		SellerThirdPartyUsername: (this.SellerThirdPartyUsername === undefined)? null : this.SellerThirdPartyUsername
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
module.exports = ListingCheckoutRedirectPreferenceType;