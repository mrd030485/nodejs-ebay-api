function PaymentInformationCodeType(Payment) {

	/**
	  Documentation
	   
                Contains details payment information
            
	 */

	/**
	 * Arrays
	 *	Payment: PaymentTransactionCodeType
	 */
	this.Payment = Payment;
}
PaymentInformationCodeType.prototype.toJSON = function(with_null) {
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
module.exports = PaymentInformationCodeType;