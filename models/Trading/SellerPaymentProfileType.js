function SellerPaymentProfileType(PaymentProfileID, PaymentProfileName) {

	/**
	  Documentation
	   Type defining the <b>SellerPaymentProfile</b> container, which is used in an Add/Revise/Relist Trading API call to reference a Business Policies payment profile.
	 */

	/**
	 * Arrays
	 */
	this.PaymentProfileID = PaymentProfileID;
	this.PaymentProfileName = PaymentProfileName;
}
SellerPaymentProfileType.prototype.toJSON = function(with_null) {
	var json = { 
		PaymentProfileID: (this.PaymentProfileID === undefined)? null : this.PaymentProfileID,
		PaymentProfileName: (this.PaymentProfileName === undefined)? null : this.PaymentProfileName
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
module.exports = SellerPaymentProfileType;