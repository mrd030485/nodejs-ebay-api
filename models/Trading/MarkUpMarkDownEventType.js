function MarkUpMarkDownEventType(Type, Time, Reason) {

	/**
	  Documentation
	   Describes an individual mark-up or mark-down event. eBay will automatically mark an application as down if attempts to deliver a notification fail repeatedly. eBay may mark an application down manually under certain circumstances.
	 */

	/**
	 * Arrays
	 */
	this.Type = Type;
	this.Time = Time;
	this.Reason = Reason;
}
MarkUpMarkDownEventType.prototype.toJSON = function(with_null) {
	var json = { 
		Type: (this.Type === undefined)? null : this.Type,
		Time: (this.Time === undefined)? null : this.Time,
		Reason: (this.Reason === undefined)? null : this.Reason
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
module.exports = MarkUpMarkDownEventType;