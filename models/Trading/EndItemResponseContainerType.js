function EndItemResponseContainerType(EndTime, CorrelationID, Errors) {

	/**
	  Documentation
	   Includes the acknowledgement of date and time the auction was ended due to the call to EndItem.
	 */

	/**
	 * Arrays
	 *	Errors: ErrorType
	 */
	this.EndTime = EndTime;
	this.CorrelationID = CorrelationID;
	this.Errors = Errors;
}
EndItemResponseContainerType.prototype.toJSON = function(with_null) {
	var json = { 
		EndTime: (this.EndTime === undefined)? null : this.EndTime,
		CorrelationID: (this.CorrelationID === undefined)? null : this.CorrelationID,
		Errors: (this.Errors === undefined)? null : this.Errors
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
module.exports = EndItemResponseContainerType;