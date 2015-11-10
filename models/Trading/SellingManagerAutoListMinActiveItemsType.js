function SellingManagerAutoListMinActiveItemsType(MinActiveItemCount, ListTimeFrom, ListTimeTo, SpacingIntervalInMinutes, ListingHoldInventoryLevel) {

	/**
	  Documentation
	   Defines the options available for an automated listing rule that keeps a minimum number of items on the site.
	 */

	/**
	 * Arrays
	 */
	this.MinActiveItemCount = MinActiveItemCount;
	this.ListTimeFrom = ListTimeFrom;
	this.ListTimeTo = ListTimeTo;
	this.SpacingIntervalInMinutes = SpacingIntervalInMinutes;
	this.ListingHoldInventoryLevel = ListingHoldInventoryLevel;
}
SellingManagerAutoListMinActiveItemsType.prototype.toJSON = function(with_null) {
	var json = { 
		MinActiveItemCount: (this.MinActiveItemCount === undefined)? null : this.MinActiveItemCount,
		ListTimeFrom: (this.ListTimeFrom === undefined)? null : this.ListTimeFrom,
		ListTimeTo: (this.ListTimeTo === undefined)? null : this.ListTimeTo,
		SpacingIntervalInMinutes: (this.SpacingIntervalInMinutes === undefined)? null : this.SpacingIntervalInMinutes,
		ListingHoldInventoryLevel: (this.ListingHoldInventoryLevel === undefined)? null : this.ListingHoldInventoryLevel
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
module.exports = SellingManagerAutoListMinActiveItemsType;