function NotificationDetailsType(DeliveryURL, ReferenceID, ExpirationTime, Type, Retries, DeliveryStatus, NextRetryTime, DeliveryTime, ErrorMessage, DeliveryURLName) {

	/**
	  Documentation
	   Information about a single notification. Notification information includes the reference ID, notification type, current status, time delivered, error code, and error message for the notification. If notification details are included in
                    the response, all of the detail fields are returned.
	 */

	/**
	 * Arrays
	 */
	this.DeliveryURL = DeliveryURL;
	this.ReferenceID = ReferenceID;
	this.ExpirationTime = ExpirationTime;
	this.Type = Type;
	this.Retries = Retries;
	this.DeliveryStatus = DeliveryStatus;
	this.NextRetryTime = NextRetryTime;
	this.DeliveryTime = DeliveryTime;
	this.ErrorMessage = ErrorMessage;
	this.DeliveryURLName = DeliveryURLName;
}
NotificationDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		DeliveryURL: (this.DeliveryURL === undefined)? null : this.DeliveryURL,
		ReferenceID: (this.ReferenceID === undefined)? null : this.ReferenceID,
		ExpirationTime: (this.ExpirationTime === undefined)? null : this.ExpirationTime,
		Type: (this.Type === undefined)? null : this.Type,
		Retries: (this.Retries === undefined)? null : this.Retries,
		DeliveryStatus: (this.DeliveryStatus === undefined)? null : this.DeliveryStatus,
		NextRetryTime: (this.NextRetryTime === undefined)? null : this.NextRetryTime,
		DeliveryTime: (this.DeliveryTime === undefined)? null : this.DeliveryTime,
		ErrorMessage: (this.ErrorMessage === undefined)? null : this.ErrorMessage,
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
module.exports = NotificationDetailsType;