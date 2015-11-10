function ScheduleType(ScheduleID, ScheduleTime) {

	/**
	  Documentation
	   This type is deprecated as Live Auctions are no longer a valid listing type.
	 */

	/**
	 * Arrays
	 */
	this.ScheduleID = ScheduleID;
	this.ScheduleTime = ScheduleTime;
}
ScheduleType.prototype.toJSON = function(with_null) {
	var json = { 
		ScheduleID: (this.ScheduleID === undefined)? null : this.ScheduleID,
		ScheduleTime: (this.ScheduleTime === undefined)? null : this.ScheduleTime
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
module.exports = ScheduleType;