function NotificationDetailsArrayType(NotificationDetails) {

	/**
	  Documentation
	   
                Returns information about notifications sent to the given application for the given ItemID. It will only be returned if ItemID was specified in the input parameters.
            
	 */

	/**
	 * Arrays
	 *	NotificationDetails: NotificationDetailsType
	 */
	this.NotificationDetails = NotificationDetails;
}
NotificationDetailsArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		NotificationDetails: (this.NotificationDetails === undefined)? null : this.NotificationDetails
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
module.exports = NotificationDetailsArrayType;