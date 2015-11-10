var ItemIDType = require('./ItemIDType');

function SMSSubscriptionType(SMSPhone, UserStatus, CarrierID, ErrorCode, ItemToUnsubscribe) {

	/**
	  Documentation
	   User data related to notifications. Note that SMS is currently reserved for future use.
	 */

	/**
	 * Arrays
	 */
	var _ItemToUnsubscribe;
	Object.defineProperty(this, 'ItemToUnsubscribe', {
		 get: function(){
			 return _ItemToUnsubscribe;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_ItemToUnsubscribe = value; 
				}else{
					console.log('ItemToUnsubscribe expects type ItemIDType');
				}
			}
		}
	});
	this.SMSPhone = SMSPhone;
	this.UserStatus = UserStatus;
	this.CarrierID = CarrierID;
	this.ErrorCode = ErrorCode;
	this.ItemToUnsubscribe = ItemToUnsubscribe;
}
SMSSubscriptionType.prototype.toJSON = function(with_null) {
	var json = { 
		SMSPhone: (this.SMSPhone === undefined)? null : this.SMSPhone,
		UserStatus: (this.UserStatus === undefined)? null : this.UserStatus,
		CarrierID: (this.CarrierID === undefined)? null : this.CarrierID,
		ErrorCode: (this.ErrorCode === undefined)? null : this.ErrorCode,
		ItemToUnsubscribe: (this.ItemToUnsubscribe === undefined)? null : this.ItemToUnsubscribe.toJSON()
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
module.exports = SMSSubscriptionType;