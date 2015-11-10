var NotificationEventTypeCodeType = require('./NotificationEventTypeCodeType'),
	NotificationEventPropertyNameCodeType = require('./NotificationEventPropertyNameCodeType');

function NotificationEventPropertyType(EventType, Name, Value) {

	/**
	  Documentation
	   
                Defines properties associated with a particular event.
            
	 */

	/**
	 * Arrays
	 */
	var _EventType;
	var _Name;
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
	Object.defineProperty(this, 'Name', {
		 get: function(){
			 return _Name;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NotificationEventPropertyNameCodeType){ 
					_Name = value; 
				}else{
					console.log('Name expects type NotificationEventPropertyNameCodeType');
				}
			}
		}
	});
	this.EventType = EventType;
	this.Name = Name;
	this.Value = Value;
}
NotificationEventPropertyType.prototype.toJSON = function(with_null) {
	var json = { 
		EventType: (this.EventType === undefined)? null : this.EventType.toJSON(),
		Name: (this.Name === undefined)? null : this.Name.toJSON(),
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