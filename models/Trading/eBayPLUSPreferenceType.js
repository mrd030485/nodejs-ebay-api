function eBayPLUSPreferenceType(Country, OptInStatus, ListingPreference) {

	/**
	  Documentation
	   Contains information about a country where a specified seller is eligible to offer eBay Plus on listings, as well as the seller's opt-in status and listing preference for that country. <br/><br/> eBay Plus is a premium account
                    option for buyers, which provides benefits such as fast free domestic shipping and free returns on selected items. Top Rated eBay sellers must opt in to eBay Plus to be able offer the program on qualifying listings. Sellers must commit
                    to next-day delivery of those items. <br/><br/> <span class="tablenote"> <strong>Note:</strong> Currently, eBay Plus is available only to buyers in Germany (DE). </span> For more details about eBay
                    Plus, see <a href="../../../../guides/ebayfeatures/Development/Feature-eBayPlus.html">Offering eBay Plus</a>.
	 */

	/**
	 * Arrays
	 */
	this.Country = Country;
	this.OptInStatus = OptInStatus;
	this.ListingPreference = ListingPreference;
}
eBayPLUSPreferenceType.prototype.toJSON = function(with_null) {
	var json = { 
		Country: (this.Country === undefined)? null : this.Country,
		OptInStatus: (this.OptInStatus === undefined)? null : this.OptInStatus,
		ListingPreference: (this.ListingPreference === undefined)? null : this.ListingPreference
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
module.exports = eBayPLUSPreferenceType;