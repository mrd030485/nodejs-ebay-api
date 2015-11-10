function SellingManagerAutoListAccordingToScheduleType(DayOfWeek, ListingPeriodInWeeks, ListAtSpecificTimeOfDay, StartTime, EndTime, MaxActiveItemCount, ListingHoldInventoryLevel) {

	/**
	  Documentation
	   Defines the options available for an Automated Listing Rule that keeps a fixed number of items on the site
	 */

	/**
	 * Arrays
	 */
	this.DayOfWeek = DayOfWeek;
	this.ListingPeriodInWeeks = ListingPeriodInWeeks;
	this.ListAtSpecificTimeOfDay = ListAtSpecificTimeOfDay;
	this.StartTime = StartTime;
	this.EndTime = EndTime;
	this.MaxActiveItemCount = MaxActiveItemCount;
	this.ListingHoldInventoryLevel = ListingHoldInventoryLevel;
}
SellingManagerAutoListAccordingToScheduleType.prototype.toJSON = function(with_null) {
	var json = { 
		DayOfWeek: (this.DayOfWeek === undefined)? null : this.DayOfWeek,
		ListingPeriodInWeeks: (this.ListingPeriodInWeeks === undefined)? null : this.ListingPeriodInWeeks,
		ListAtSpecificTimeOfDay: (this.ListAtSpecificTimeOfDay === undefined)? null : this.ListAtSpecificTimeOfDay,
		StartTime: (this.StartTime === undefined)? null : this.StartTime,
		EndTime: (this.EndTime === undefined)? null : this.EndTime,
		MaxActiveItemCount: (this.MaxActiveItemCount === undefined)? null : this.MaxActiveItemCount,
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
module.exports = SellingManagerAutoListAccordingToScheduleType;