function DeliveryStatusType(Email) {

	/**
	  Documentation
	   <span class="tablenote"><strong>Note:</strong> This type will be enabled with version 935. For those using versions older than 935, the <b>DeliveryStatus</b> container will not be returned. </span> This
                    type is used by the <b>DeliveryStatus</b> container, which will list the current status of whatever delivery method is being used (indicated in the <b>DigitalDeliverySelected.DeliveryMethod</b> field). Currently,
                    the only supported delivery method is by email.
	 */

	/**
	 * Arrays
	 */
	this.Email = Email;
}
DeliveryStatusType.prototype.toJSON = function(with_null) {
	var json = { 
		Email: (this.Email === undefined)? null : this.Email
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
module.exports = DeliveryStatusType;