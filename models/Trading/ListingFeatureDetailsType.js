function ListingFeatureDetailsType(BoldTitle, Border, Highlight, GiftIcon, HomePageFeatured, FeaturedFirst, FeaturedPlus, ProPack, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   Details about feature availability for the site.
	 */

	/**
	 * Arrays
	 */
	this.BoldTitle = BoldTitle;
	this.Border = Border;
	this.Highlight = Highlight;
	this.GiftIcon = GiftIcon;
	this.HomePageFeatured = HomePageFeatured;
	this.FeaturedFirst = FeaturedFirst;
	this.FeaturedPlus = FeaturedPlus;
	this.ProPack = ProPack;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
ListingFeatureDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		BoldTitle: (this.BoldTitle === undefined)? null : this.BoldTitle,
		Border: (this.Border === undefined)? null : this.Border,
		Highlight: (this.Highlight === undefined)? null : this.Highlight,
		GiftIcon: (this.GiftIcon === undefined)? null : this.GiftIcon,
		HomePageFeatured: (this.HomePageFeatured === undefined)? null : this.HomePageFeatured,
		FeaturedFirst: (this.FeaturedFirst === undefined)? null : this.FeaturedFirst,
		FeaturedPlus: (this.FeaturedPlus === undefined)? null : this.FeaturedPlus,
		ProPack: (this.ProPack === undefined)? null : this.ProPack,
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
module.exports = ListingFeatureDetailsType;