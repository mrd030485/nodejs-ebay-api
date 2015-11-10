var SMSSubscriptionUserStatusCodeType = require('./SMSSubscriptionUserStatusCodeType'),
	WirelessCarrierIDCodeType = require('./WirelessCarrierIDCodeType'),
	SMSSubscriptionErrorCodeCodeType = require('./SMSSubscriptionErrorCodeCodeType'),
	ItemIDType = require('./ItemIDType');

function SMSSubscriptionType(SMSPhone, UserStatus, CarrierID, ErrorCode, ItemToUnsubscribe) {

	/**
	  Documentation
	   
                User data related to notifications. Note that SMS is currently reserved for future use.
            
	 */

	/**
	 * Arrays
	 */
	var _UserStatus;
	var _CarrierID;
	var _ErrorCode;
	var _ItemToUnsubscribe;
	Object.defineProperty(this, 'UserStatus', {
		 get: function(){
			 return _UserStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SMSSubscriptionUserStatusCodeType){ 
					_UserStatus = value; 
				}else{
					console.log('UserStatus expects type SMSSubscriptionUserStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CarrierID', {
		 get: function(){
			 return _CarrierID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof WirelessCarrierIDCodeType){ 
					_CarrierID = value; 
				}else{
					console.log('CarrierID expects type WirelessCarrierIDCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ErrorCode', {
		 get: function(){
			 return _ErrorCode;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SMSSubscriptionErrorCodeCodeType){ 
					_ErrorCode = value; 
				}else{
					console.log('ErrorCode expects type SMSSubscriptionErrorCodeCodeType');
				}
			}
		}
	});
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
		UserStatus: (this.UserStatus === undefined)? null : this.UserStatus.toJSON(),
		CarrierID: (this.CarrierID === undefined)? null : this.CarrierID.toJSON(),
		ErrorCode: (this.ErrorCode === undefined)? null : this.ErrorCode.toJSON(),
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