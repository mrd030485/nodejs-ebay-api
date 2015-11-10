function SearchDetailsType(BuyItNowEnabled, Picture, RecentListing) {
	/**
	 * Arrays
	 */
	this.BuyItNowEnabled = BuyItNowEnabled;
	this.Picture = Picture;
	this.RecentListing = RecentListing;
}
SearchDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		BuyItNowEnabled: (this.BuyItNowEnabled === undefined)? null : this.BuyItNowEnabled,
		Picture: (this.Picture === undefined)? null : this.Picture,
		RecentListing: (this.RecentListing === undefined)? null : this.RecentListing
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
module.exports = SearchDetailsType;