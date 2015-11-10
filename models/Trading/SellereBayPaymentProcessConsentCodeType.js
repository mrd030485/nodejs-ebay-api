var PayoutMethodType = require('./PayoutMethodType');

function SellereBayPaymentProcessConsentCodeType(PayoutMethodSet, PayoutMethod, UserAgreementInfo) {

	/**
	  Documentation
	   This type is no longer used.
	 */

	/**
	 * Arrays
	 *	UserAgreementInfo: UserAgreementInfoType
	 */
	var _PayoutMethod;
	Object.defineProperty(this, 'PayoutMethod', {
		 get: function(){
			 return _PayoutMethod;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PayoutMethodType){ 
					_PayoutMethod = value; 
				}else{
					console.log('PayoutMethod expects type PayoutMethodType');
				}
			}
		}
	});
	this.PayoutMethodSet = PayoutMethodSet;
	this.PayoutMethod = PayoutMethod;
	this.UserAgreementInfo = UserAgreementInfo;
}
SellereBayPaymentProcessConsentCodeType.prototype.toJSON = function(with_null) {
	var json = { 
		PayoutMethodSet: (this.PayoutMethodSet === undefined)? null : this.PayoutMethodSet,
		PayoutMethod: (this.PayoutMethod === undefined)? null : this.PayoutMethod.toJSON(),
		UserAgreementInfo: (this.UserAgreementInfo === undefined)? null : this.UserAgreementInfo
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
module.exports = SellereBayPaymentProcessConsentCodeType;