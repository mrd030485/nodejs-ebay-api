var EnableCodeType = require('./EnableCodeType'),
	NotificationPayloadTypeCodeType = require('./NotificationPayloadTypeCodeType'),
	DeviceTypeCodeType = require('./DeviceTypeCodeType');

function ApplicationDeliveryPreferencesType(ApplicationURL, ApplicationEnable, AlertEmail, AlertEnable, NotificationPayloadType, DeviceType, PayloadVersion, DeliveryURLDetails) {

	/**
	  Documentation
	   
                Type used by the <b>ApplicationDeliveryPreferences</b> container to control/indicate where and how Platform Notifications and/or Client Alerts are delivered to a user application, server, and/or email address.
            
	 */

	/**
	 * Arrays
	 *	DeliveryURLDetails: DeliveryURLDetailType
	 */
	var _ApplicationEnable;
	var _AlertEnable;
	var _NotificationPayloadType;
	var _DeviceType;
	Object.defineProperty(this, 'ApplicationEnable', {
		 get: function(){
			 return _ApplicationEnable;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof EnableCodeType){ 
					_ApplicationEnable = value; 
				}else{
					console.log('ApplicationEnable expects type EnableCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AlertEnable', {
		 get: function(){
			 return _AlertEnable;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof EnableCodeType){ 
					_AlertEnable = value; 
				}else{
					console.log('AlertEnable expects type EnableCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'NotificationPayloadType', {
		 get: function(){
			 return _NotificationPayloadType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NotificationPayloadTypeCodeType){ 
					_NotificationPayloadType = value; 
				}else{
					console.log('NotificationPayloadType expects type NotificationPayloadTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DeviceType', {
		 get: function(){
			 return _DeviceType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DeviceTypeCodeType){ 
					_DeviceType = value; 
				}else{
					console.log('DeviceType expects type DeviceTypeCodeType');
				}
			}
		}
	});
	this.ApplicationURL = ApplicationURL;
	this.ApplicationEnable = ApplicationEnable;
	this.AlertEmail = AlertEmail;
	this.AlertEnable = AlertEnable;
	this.NotificationPayloadType = NotificationPayloadType;
	this.DeviceType = DeviceType;
	this.PayloadVersion = PayloadVersion;
	this.DeliveryURLDetails = DeliveryURLDetails;
}
ApplicationDeliveryPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		ApplicationURL: (this.ApplicationURL === undefined)? null : this.ApplicationURL,
		ApplicationEnable: (this.ApplicationEnable === undefined)? null : this.ApplicationEnable.toJSON(),
		AlertEmail: (this.AlertEmail === undefined)? null : this.AlertEmail,
		AlertEnable: (this.AlertEnable === undefined)? null : this.AlertEnable.toJSON(),
		NotificationPayloadType: (this.NotificationPayloadType === undefined)? null : this.NotificationPayloadType.toJSON(),
		DeviceType: (this.DeviceType === undefined)? null : this.DeviceType.toJSON(),
		PayloadVersion: (this.PayloadVersion === undefined)? null : this.PayloadVersion,
		DeliveryURLDetails: (this.DeliveryURLDetails === undefined)? null : this.DeliveryURLDetails
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
module.exports = ApplicationDeliveryPreferencesType;