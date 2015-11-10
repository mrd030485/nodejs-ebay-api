var eBayPaymentMismatchDetailsType = require('./eBayPaymentMismatchDetailsType');

function TransactionStatusType(eBayPaymentStatus, CheckoutStatus, LastTimeModified, PaymentMethodUsed, CompleteStatus, BuyerSelectedShipping, PaymentHoldStatus, IntegratedMerchantCreditCardEnabled, eBayPaymentMismatchDetails, InquiryStatus, ReturnStatus, PaymentInstrument, DigitalStatus) {

	/**
	  Documentation
	   Contains the order status, e.g. the buyer's online payment and whether the checkout process for the order is complete.
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
	this.CheckoutStatus = CheckoutStatus;
	this.LastTimeModified = LastTimeModified;
	this.PaymentMethodUsed = PaymentMethodUsed;
	this.CompleteStatus = CompleteStatus;
	this.BuyerSelectedShipping = BuyerSelectedShipping;
	this.PaymentHoldStatus = PaymentHoldStatus;
	this.IntegratedMerchantCreditCardEnabled = IntegratedMerchantCreditCardEnabled;
	this.eBayPaymentMismatchDetails = eBayPaymentMismatchDetails;
	this.InquiryStatus = InquiryStatus;
	this.ReturnStatus = ReturnStatus;
	this.PaymentInstrument = PaymentInstrument;
	this.DigitalStatus = DigitalStatus;
}
TransactionStatusType.prototype.toJSON = function(with_null) {
	var json = { 
		eBayPaymentStatus: (this.eBayPaymentStatus === undefined)? null : this.eBayPaymentStatus,
		CheckoutStatus: (this.CheckoutStatus === undefined)? null : this.CheckoutStatus,
		LastTimeModified: (this.LastTimeModified === undefined)? null : this.LastTimeModified,
		PaymentMethodUsed: (this.PaymentMethodUsed === undefined)? null : this.PaymentMethodUsed,
		CompleteStatus: (this.CompleteStatus === undefined)? null : this.CompleteStatus,
		BuyerSelectedShipping: (this.BuyerSelectedShipping === undefined)? null : this.BuyerSelectedShipping,
		PaymentHoldStatus: (this.PaymentHoldStatus === undefined)? null : this.PaymentHoldStatus,
		IntegratedMerchantCreditCardEnabled: (this.IntegratedMerchantCreditCardEnabled === undefined)? null : this.IntegratedMerchantCreditCardEnabled,
		eBayPaymentMismatchDetails: (this.eBayPaymentMismatchDetails === undefined)? null : this.eBayPaymentMismatchDetails.toJSON(),
		InquiryStatus: (this.InquiryStatus === undefined)? null : this.InquiryStatus,
		ReturnStatus: (this.ReturnStatus === undefined)? null : this.ReturnStatus,
		PaymentInstrument: (this.PaymentInstrument === undefined)? null : this.PaymentInstrument,
		DigitalStatus: (this.DigitalStatus === undefined)? null : this.DigitalStatus
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
module.exports = TransactionStatusType;