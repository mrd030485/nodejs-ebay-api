var AnnouncementMessageCodeType = require('./AnnouncementMessageCodeType');

function AnnouncementMessageType(AnnouncementStartTime, EventTime, MessageType) {

	/**
	  Documentation
	   
                Type defining the <b>ShippingServiceDetails.DeprecationDetails</b> container that is returned in the <b>GeteBayDetails</b> response. The <b>ShippingServiceDetails.DeprecationDetails</b> container consists of information
                related to a deprecated shipping service.
            
	 */

	/**
	 * Arrays
	 */
	var _MessageType;
	Object.defineProperty(this, 'MessageType', {
		 get: function(){
			 return _MessageType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AnnouncementMessageCodeType){ 
					_MessageType = value; 
				}else{
					console.log('MessageType expects type AnnouncementMessageCodeType');
				}
			}
		}
	});
	this.AnnouncementStartTime = AnnouncementStartTime;
	this.EventTime = EventTime;
	this.MessageType = MessageType;
}
AnnouncementMessageType.prototype.toJSON = function(with_null) {
	var json = { 
		AnnouncementStartTime: (this.AnnouncementStartTime === undefined)? null : this.AnnouncementStartTime,
		EventTime: (this.EventTime === undefined)? null : this.EventTime,
		MessageType: (this.MessageType === undefined)? null : this.MessageType.toJSON()
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
module.exports = AnnouncementMessageType;