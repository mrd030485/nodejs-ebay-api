function NotificationEventPropertyType(EventType, Name, Value) {

	/**
	  Documentation
	   Defines properties associated with a particular event.
	 */

	/**
	 * Arrays
	 */
	this.EventType = EventType;
	this.Name = Name;
	this.Value = Value;
}
NotificationEventPropertyType.prototype.toJSON = function(with_null) {
	var json = { 
		EventType: (this.EventType === undefined)? null : this.EventType,
		Name: (this.Name === undefined)? null : this.Name,
		Value: (this.Value === undefined)? null : this.Value
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
module.exports = NotificationEventPropertyType;