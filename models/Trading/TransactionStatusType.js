var PaymentStatusCodeType = require('./PaymentStatusCodeType'),
	CheckoutStatusCodeType = require('./CheckoutStatusCodeType'),
	BuyerPaymentMethodCodeType = require('./BuyerPaymentMethodCodeType'),
	CompleteStatusCodeType = require('./CompleteStatusCodeType'),
	PaymentHoldStatusCodeType = require('./PaymentHoldStatusCodeType'),
	eBayPaymentMismatchDetailsType = require('./eBayPaymentMismatchDetailsType'),
	InquiryStatusCodeType = require('./InquiryStatusCodeType'),
	ReturnStatusCodeType = require('./ReturnStatusCodeType'),
	BuyerPaymentInstrumentCodeType = require('./BuyerPaymentInstrumentCodeType'),
	DigitalStatusCodeType = require('./DigitalStatusCodeType');

function TransactionStatusType(eBayPaymentStatus, CheckoutStatus, LastTimeModified, PaymentMethodUsed, CompleteStatus, BuyerSelectedShipping, PaymentHoldStatus, IntegratedMerchantCreditCardEnabled, eBayPaymentMismatchDetails, InquiryStatus, ReturnStatus, PaymentInstrument, DigitalStatus) {

	/**
	  Documentation
	   
                Contains the order status, e.g. the buyer's online payment and whether the checkout process for the order is complete.
            
	 */

	/**
	 * Arrays
	 */
	var _eBayPaymentStatus;
	var _CheckoutStatus;
	var _PaymentMethodUsed;
	var _CompleteStatus;
	var _PaymentHoldStatus;
	var _eBayPaymentMismatchDetails;
	var _InquiryStatus;
	var _ReturnStatus;
	var _PaymentInstrument;
	var _DigitalStatus;
	Object.defineProperty(this, 'eBayPaymentStatus', {
		 get: function(){
			 return _eBayPaymentStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaymentStatusCodeType){ 
					_eBayPaymentStatus = value; 
				}else{
					console.log('eBayPaymentStatus expects type PaymentStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CheckoutStatus', {
		 get: function(){
			 return _CheckoutStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CheckoutStatusCodeType){ 
					_CheckoutStatus = value; 
				}else{
					console.log('CheckoutStatus expects type CheckoutStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentMethodUsed', {
		 get: function(){
			 return _PaymentMethodUsed;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerPaymentMethodCodeType){ 
					_PaymentMethodUsed = value; 
				}else{
					console.log('PaymentMethodUsed expects type BuyerPaymentMethodCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CompleteStatus', {
		 get: function(){
			 return _CompleteStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CompleteStatusCodeType){ 
					_CompleteStatus = value; 
				}else{
					console.log('CompleteStatus expects type CompleteStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentHoldStatus', {
		 get: function(){
			 return _PaymentHoldStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaymentHoldStatusCodeType){ 
					_PaymentHoldStatus = value; 
				}else{
					console.log('PaymentHoldStatus expects type PaymentHoldStatusCodeType');
				}
			}
		}
	});
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
	Object.defineProperty(this, 'InquiryStatus', {
		 get: function(){
			 return _InquiryStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof InquiryStatusCodeType){ 
					_InquiryStatus = value; 
				}else{
					console.log('InquiryStatus expects type InquiryStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ReturnStatus', {
		 get: function(){
			 return _ReturnStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ReturnStatusCodeType){ 
					_ReturnStatus = value; 
				}else{
					console.log('ReturnStatus expects type ReturnStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentInstrument', {
		 get: function(){
			 return _PaymentInstrument;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerPaymentInstrumentCodeType){ 
					_PaymentInstrument = value; 
				}else{
					console.log('PaymentInstrument expects type BuyerPaymentInstrumentCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DigitalStatus', {
		 get: function(){
			 return _DigitalStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DigitalStatusCodeType){ 
					_DigitalStatus = value; 
				}else{
					console.log('DigitalStatus expects type DigitalStatusCodeType');
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
		eBayPaymentStatus: (this.eBayPaymentStatus === undefined)? null : this.eBayPaymentStatus.toJSON(),
		CheckoutStatus: (this.CheckoutStatus === undefined)? null : this.CheckoutStatus.toJSON(),
		LastTimeModified: (this.LastTimeModified === undefined)? null : this.LastTimeModified,
		PaymentMethodUsed: (this.PaymentMethodUsed === undefined)? null : this.PaymentMethodUsed.toJSON(),
		CompleteStatus: (this.CompleteStatus === undefined)? null : this.CompleteStatus.toJSON(),
		BuyerSelectedShipping: (this.BuyerSelectedShipping === undefined)? null : this.BuyerSelectedShipping,
		PaymentHoldStatus: (this.PaymentHoldStatus === undefined)? null : this.PaymentHoldStatus.toJSON(),
		IntegratedMerchantCreditCardEnabled: (this.IntegratedMerchantCreditCardEnabled === undefined)? null : this.IntegratedMerchantCreditCardEnabled,
		eBayPaymentMismatchDetails: (this.eBayPaymentMismatchDetails === undefined)? null : this.eBayPaymentMismatchDetails.toJSON(),
		InquiryStatus: (this.InquiryStatus === undefined)? null : this.InquiryStatus.toJSON(),
		ReturnStatus: (this.ReturnStatus === undefined)? null : this.ReturnStatus.toJSON(),
		PaymentInstrument: (this.PaymentInstrument === undefined)? null : this.PaymentInstrument.toJSON(),
		DigitalStatus: (this.DigitalStatus === undefined)? null : this.DigitalStatus.toJSON()
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