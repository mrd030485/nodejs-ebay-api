function PaymentsInformationCodeType(Payments) {

	/**
	  Documentation
	   Type defining the Contains details payment information
	 */

	/**
	 * Arrays
	 */
	this.Payments = Payments;
}
PaymentsInformationCodeType.prototype.toJSON = function(with_null) {
	var json = { 
		Payments: (this.Payments === undefined)? null : this.Payments
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
module.exports = PaymentsInformationCodeType;