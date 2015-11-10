function PaymentInformationType(Payment) {

	/**
	  Documentation
	   This type contains information about the way a buyer payment is allocated for a specified order.
	 */

	/**
	 * Arrays
	 *	Payment: PaymentTransactionType
	 */
	this.Payment = Payment;
}
PaymentInformationType.prototype.toJSON = function(with_null) {
	var json = { 
		Payment: (this.Payment === undefined)? null : this.Payment
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
module.exports = PaymentInformationType;