function IntegratedMerchantCreditCardInfoType(SupportedSite) {

	/**
	  Documentation
	   Indicates the sites on which a seller is eligible to offer IMCC as a payment method.
	 */

	/**
	 * Arrays
	 */
	this.SupportedSite = SupportedSite;
}
IntegratedMerchantCreditCardInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		SupportedSite: (this.SupportedSite === undefined)? null : this.SupportedSite
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
module.exports = IntegratedMerchantCreditCardInfoType;