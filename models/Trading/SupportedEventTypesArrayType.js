function SupportedEventTypesArrayType(EventType) {

	/**
	  Documentation
	   
            
	 */

	/**
	 * Arrays
	 *	EventType: NotificationEventTypeCodeType
	 */
	this.EventType = EventType;
}
SupportedEventTypesArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		EventType: (this.EventType === undefined)? null : this.EventType
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
module.exports = SupportedEventTypesArrayType;