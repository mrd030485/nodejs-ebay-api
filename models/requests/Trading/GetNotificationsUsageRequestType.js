var ItemIDType = require('../../Trading/ItemIDType');

function GetNotificationsUsageRequestType(StartTime, EndTime, ItemID) {

	/**
	  Documentation
	   Retrieves usage information about platform notifications for a given application. You can use this notification information to troubleshoot issues with platform notifications. You can call this up to 50 times per hour for a given application.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	Object.defineProperty(this, 'ItemID', {
		 get: function(){
			 return _ItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_ItemID = value; 
				}else{
					console.log('ItemID expects type ItemIDType');
				}
			}
		}
	});
	this.StartTime = StartTime;
	this.EndTime = EndTime;
	this.ItemID = ItemID;
}
GetNotificationsUsageRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		StartTime: (this.StartTime === undefined)? null : this.StartTime,
		EndTime: (this.EndTime === undefined)? null : this.EndTime,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON()
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
module.exports = GetNotificationsUsageRequestType;