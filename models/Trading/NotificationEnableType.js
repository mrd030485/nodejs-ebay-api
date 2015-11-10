function NotificationEnableType(EventType, EventEnable) {

	/**
	  Documentation
	   Specifies a notification event and whether the notification is enabled or disabled.
	 */

	/**
	 * Arrays
	 */
	this.EventType = EventType;
	this.EventEnable = EventEnable;
}
NotificationEnableType.prototype.toJSON = function(with_null) {
	var json = { 
		EventType: (this.EventType === undefined)? null : this.EventType,
		EventEnable: (this.EventEnable === undefined)? null : this.EventEnable
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
module.exports = NotificationEnableType;