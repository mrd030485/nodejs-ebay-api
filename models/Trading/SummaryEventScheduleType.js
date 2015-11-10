function SummaryEventScheduleType(EventType, SummaryPeriod, Frequency) {

	/**
	  Documentation
	   Details about a summary event schedule.
	 */

	/**
	 * Arrays
	 */
	this.EventType = EventType;
	this.SummaryPeriod = SummaryPeriod;
	this.Frequency = Frequency;
}
SummaryEventScheduleType.prototype.toJSON = function(with_null) {
	var json = { 
		EventType: (this.EventType === undefined)? null : this.EventType,
		SummaryPeriod: (this.SummaryPeriod === undefined)? null : this.SummaryPeriod,
		Frequency: (this.Frequency === undefined)? null : this.Frequency
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
module.exports = SummaryEventScheduleType;