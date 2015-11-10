function FaultDetailsType(ErrorCode, Severity, DetailedMessage) {

	/**
	  Documentation
	   
                SOAP faults are used to indicate that an infrastructure error has occurred, such as a problem on eBay's side with database or server going down, or a problem with the client or server-side SOAP framework.
            
	 */

	/**
	 * Arrays
	 */
	this.ErrorCode = ErrorCode;
	this.Severity = Severity;
	this.DetailedMessage = DetailedMessage;
}
FaultDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ErrorCode: (this.ErrorCode === undefined)? null : this.ErrorCode,
		Severity: (this.Severity === undefined)? null : this.Severity,
		DetailedMessage: (this.DetailedMessage === undefined)? null : this.DetailedMessage
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
module.exports = FaultDetailsType;