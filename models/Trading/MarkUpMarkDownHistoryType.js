function MarkUpMarkDownHistoryType(MarkUpMarkDownEvent) {

	/**
	  Documentation
	   List of objects representing markup or markdown events for a given application and time period. If no time period is specified in the request, the information for only one day (24 hours before the time the call is made to the time the
                    call is made) is included. The maximum time period is allowed is 3 days (72 hours before the call is made to the time the call is made).
	 */

	/**
	 * Arrays
	 *	MarkUpMarkDownEvent: MarkUpMarkDownEventType
	 */
	this.MarkUpMarkDownEvent = MarkUpMarkDownEvent;
}
MarkUpMarkDownHistoryType.prototype.toJSON = function(with_null) {
	var json = { 
		MarkUpMarkDownEvent: (this.MarkUpMarkDownEvent === undefined)? null : this.MarkUpMarkDownEvent
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
module.exports = MarkUpMarkDownHistoryType;