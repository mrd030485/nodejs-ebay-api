var NotificationEventTypeCodeType = require('./NotificationEventTypeCodeType'),
	EnableCodeType = require('./EnableCodeType');

function NotificationEnableType(EventType, EventEnable) {

	/**
	  Documentation
	   
                Specifies a notification event and whether the notification is enabled or disabled.
            
	 */

	/**
	 * Arrays
	 */
	var _EventType;
	var _EventEnable;
	Object.defineProperty(this, 'EventType', {
		 get: function(){
			 return _EventType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NotificationEventTypeCodeType){ 
					_EventType = value; 
				}else{
					console.log('EventType expects type NotificationEventTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'EventEnable', {
		 get: function(){
			 return _EventEnable;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof EnableCodeType){ 
					_EventEnable = value; 
				}else{
					console.log('EventEnable expects type EnableCodeType');
				}
			}
		}
	});
	this.EventType = EventType;
	this.EventEnable = EventEnable;
}
NotificationEnableType.prototype.toJSON = function(with_null) {
	var json = { 
		EventType: (this.EventType === undefined)? null : this.EventType.toJSON(),
		EventEnable: (this.EventEnable === undefined)? null : this.EventEnable.toJSON()
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