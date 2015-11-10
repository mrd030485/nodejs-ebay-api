var eBayPaymentMismatchDetailsType = require('./eBayPaymentMismatchDetailsType');

function CheckoutStatusType(eBayPaymentStatus, LastModifiedTime, PaymentMethod, Status, IntegratedMerchantCreditCardEnabled, eBayPaymentMismatchDetails, PaymentInstrument) {

	/**
	  Documentation
	   Type defining the <b>CheckoutStatus</b> container that is returned in <b>GetOrders</b> and <b>GetOrderTransactions</b> to indicate the current checkout status of the order.
	 */

	/**
	 * Arrays
	 */
	var _eBayPaymentMismatchDetails;
	Object.defineProperty(this, 'eBayPaymentMismatchDetails', {
		 get: function(){
			 return _eBayPaymentMismatchDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayPaymentMismatchDetailsType){ 
					_eBayPaymentMismatchDetails = value; 
				}else{
					console.log('eBayPaymentMismatchDetails expects type eBayPaymentMismatchDetailsType');
				}
			}
		}
	});
	this.eBayPaymentStatus = eBayPaymentStatus;
	this.LastModifiedTime = LastModifiedTime;
	this.PaymentMethod = PaymentMethod;
	this.Status = Status;
	this.IntegratedMerchantCreditCardEnabled = IntegratedMerchantCreditCardEnabled;
	this.eBayPaymentMismatchDetails = eBayPaymentMismatchDetails;
	this.PaymentInstrument = PaymentInstrument;
}
CheckoutStatusType.prototype.toJSON = function(with_null) {
	var json = { 
		eBayPaymentStatus: (this.eBayPaymentStatus === undefined)? null : this.eBayPaymentStatus,
		LastModifiedTime: (this.LastModifiedTime === undefined)? null : this.LastModifiedTime,
		PaymentMethod: (this.PaymentMethod === undefined)? null : this.PaymentMethod,
		Status: (this.Status === undefined)? null : this.Status,
		IntegratedMerchantCreditCardEnabled: (this.IntegratedMerchantCreditCardEnabled === undefined)? null : this.IntegratedMerchantCreditCardEnabled,
		eBayPaymentMismatchDetails: (this.eBayPaymentMismatchDetails === undefined)? null : this.eBayPaymentMismatchDetails.toJSON(),
		PaymentInstrument: (this.PaymentInstrument === undefined)? null : this.PaymentInstrument
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
module.exports = CheckoutStatusType;