function SellingManagerEmailLogType(EmailType, CustomEmailName, EmailState, EventTime) {

	/**
	  Documentation
	   Contains list of Email log.
	 */

	/**
	 * Arrays
	 */
	this.EmailType = EmailType;
	this.CustomEmailName = CustomEmailName;
	this.EmailState = EmailState;
	this.EventTime = EventTime;
}
SellingManagerEmailLogType.prototype.toJSON = function(with_null) {
	var json = { 
		EmailType: (this.EmailType === undefined)? null : this.EmailType,
		CustomEmailName: (this.CustomEmailName === undefined)? null : this.CustomEmailName,
		EmailState: (this.EmailState === undefined)? null : this.EmailState,
		EventTime: (this.EventTime === undefined)? null : this.EventTime
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
module.exports = SellingManagerEmailLogType;