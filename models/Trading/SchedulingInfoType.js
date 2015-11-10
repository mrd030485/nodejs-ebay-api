function SchedulingInfoType(MaxScheduledMinutes, MinScheduledMinutes, MaxScheduledItems) {

	/**
	  Documentation
	   Contains information for scheduling limits for the user.
	 */

	/**
	 * Arrays
	 */
	this.MaxScheduledMinutes = MaxScheduledMinutes;
	this.MinScheduledMinutes = MinScheduledMinutes;
	this.MaxScheduledItems = MaxScheduledItems;
}
SchedulingInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		MaxScheduledMinutes: (this.MaxScheduledMinutes === undefined)? null : this.MaxScheduledMinutes,
		MinScheduledMinutes: (this.MinScheduledMinutes === undefined)? null : this.MinScheduledMinutes,
		MaxScheduledItems: (this.MaxScheduledItems === undefined)? null : this.MaxScheduledItems
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
module.exports = SchedulingInfoType;