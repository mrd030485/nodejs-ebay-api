function ApplicationDeliveryPreferencesType(ApplicationURL, ApplicationEnable, AlertEmail, AlertEnable, NotificationPayloadType, DeviceType, PayloadVersion, DeliveryURLDetails) {

	/**
	  Documentation
	   Type used by the <b>ApplicationDeliveryPreferences</b> container to control/indicate where and how Platform Notifications and/or Client Alerts are delivered to a user application, server, and/or email address.
	 */

	/**
	 * Arrays
	 *	DeliveryURLDetails: DeliveryURLDetailType
	 */
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
		ApplicationEnable: (this.ApplicationEnable === undefined)? null : this.ApplicationEnable,
		AlertEmail: (this.AlertEmail === undefined)? null : this.AlertEmail,
		AlertEnable: (this.AlertEnable === undefined)? null : this.AlertEnable,
		NotificationPayloadType: (this.NotificationPayloadType === undefined)? null : this.NotificationPayloadType,
		DeviceType: (this.DeviceType === undefined)? null : this.DeviceType,
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