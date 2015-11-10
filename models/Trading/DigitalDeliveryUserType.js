function DigitalDeliveryUserType(Name, Email) {

	/**
	  Documentation
	   <span class="tablenote"><strong>Note:</strong> This type will be enabled with version 935. For those using versions older than 935, this type is not applicable. </span> <br> This type is used to provide the
                    name and email of both the purchaser of a digital gift card, and the recipient of the digital gift card.
	 */

	/**
	 * Arrays
	 */
	this.Name = Name;
	this.Email = Email;
}
DigitalDeliveryUserType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
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
module.exports = DigitalDeliveryUserType;