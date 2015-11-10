var ApplicationDeliveryPreferencesType = require('../../Trading/ApplicationDeliveryPreferencesType'),
	NotificationEnableArrayType = require('../../Trading/NotificationEnableArrayType'),
	NotificationUserDataType = require('../../Trading/NotificationUserDataType');

function SetNotificationPreferencesRequestType(ApplicationDeliveryPreferences, UserDeliveryPreferenceArray, UserData, EventProperty, DeliveryURLName) {

	/**
	  Documentation
	   Manages notification and alert preferences for applications and users.
	 */

	/**
	 * Arrays
	 *	EventProperty: NotificationEventPropertyType
	 */
	var _ApplicationDeliveryPreferences;
	var _UserDeliveryPreferenceArray;
	var _UserData;
	Object.defineProperty(this, 'ApplicationDeliveryPreferences', {
		 get: function(){
			 return _ApplicationDeliveryPreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ApplicationDeliveryPreferencesType){ 
					_ApplicationDeliveryPreferences = value; 
				}else{
					console.log('ApplicationDeliveryPreferences expects type ApplicationDeliveryPreferencesType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UserDeliveryPreferenceArray', {
		 get: function(){
			 return _UserDeliveryPreferenceArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NotificationEnableArrayType){ 
					_UserDeliveryPreferenceArray = value; 
				}else{
					console.log('UserDeliveryPreferenceArray expects type NotificationEnableArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UserData', {
		 get: function(){
			 return _UserData;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NotificationUserDataType){ 
					_UserData = value; 
				}else{
					console.log('UserData expects type NotificationUserDataType');
				}
			}
		}
	});
	this.ApplicationDeliveryPreferences = ApplicationDeliveryPreferences;
	this.UserDeliveryPreferenceArray = UserDeliveryPreferenceArray;
	this.UserData = UserData;
	this.EventProperty = EventProperty;
	this.DeliveryURLName = DeliveryURLName;
}
SetNotificationPreferencesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ApplicationDeliveryPreferences: (this.ApplicationDeliveryPreferences === undefined)? null : this.ApplicationDeliveryPreferences.toJSON(),
		UserDeliveryPreferenceArray: (this.UserDeliveryPreferenceArray === undefined)? null : this.UserDeliveryPreferenceArray.toJSON(),
		UserData: (this.UserData === undefined)? null : this.UserData.toJSON(),
		EventProperty: (this.EventProperty === undefined)? null : this.EventProperty,
		DeliveryURLName: (this.DeliveryURLName === undefined)? null : this.DeliveryURLName
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
module.exports = SetNotificationPreferencesRequestType;