var CheckoutStatusCodeType = require('./CheckoutStatusCodeType'),
	SellingManagerPaidStatusCodeType = require('./SellingManagerPaidStatusCodeType'),
	SellingManagerShippedStatusCodeType = require('./SellingManagerShippedStatusCodeType'),
	PaymentStatusCodeType = require('./PaymentStatusCodeType'),
	BuyerPaymentMethodCodeType = require('./BuyerPaymentMethodCodeType'),
	CommentTypeCodeType = require('./CommentTypeCodeType'),
	PaymentHoldStatusCodeType = require('./PaymentHoldStatusCodeType');

function SellingManagerOrderStatusType(CheckoutStatus, PaidStatus, ShippedStatus, eBayPaymentStatus, PayPalTransactionID, PaymentMethodUsed, FeedbackReceived, FeedbackSent, TotalEmailsSent, PaymentHoldStatus, SellerInvoiceNumber, ShippedTime, PaidTime, LastEmailSentTime, SellerInvoiceTime, IntegratedMerchantCreditCardEnabled) {

	/**
	  Documentation
	   
                This type contains details on the status of an order.
            
	 */

	/**
	 * Arrays
	 */
	var _CheckoutStatus;
	var _PaidStatus;
	var _ShippedStatus;
	var _eBayPaymentStatus;
	var _PaymentMethodUsed;
	var _FeedbackReceived;
	var _PaymentHoldStatus;
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
	Object.defineProperty(this, 'PaidStatus', {
		 get: function(){
			 return _PaidStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerPaidStatusCodeType){ 
					_PaidStatus = value; 
				}else{
					console.log('PaidStatus expects type SellingManagerPaidStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippedStatus', {
		 get: function(){
			 return _ShippedStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerShippedStatusCodeType){ 
					_ShippedStatus = value; 
				}else{
					console.log('ShippedStatus expects type SellingManagerShippedStatusCodeType');
				}
			}
		}
	});
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
	Object.defineProperty(this, 'FeedbackReceived', {
		 get: function(){
			 return _FeedbackReceived;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CommentTypeCodeType){ 
					_FeedbackReceived = value; 
				}else{
					console.log('FeedbackReceived expects type CommentTypeCodeType');
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
	this.CheckoutStatus = CheckoutStatus;
	this.PaidStatus = PaidStatus;
	this.ShippedStatus = ShippedStatus;
	this.eBayPaymentStatus = eBayPaymentStatus;
	this.PayPalTransactionID = PayPalTransactionID;
	this.PaymentMethodUsed = PaymentMethodUsed;
	this.FeedbackReceived = FeedbackReceived;
	this.FeedbackSent = FeedbackSent;
	this.TotalEmailsSent = TotalEmailsSent;
	this.PaymentHoldStatus = PaymentHoldStatus;
	this.SellerInvoiceNumber = SellerInvoiceNumber;
	this.ShippedTime = ShippedTime;
	this.PaidTime = PaidTime;
	this.LastEmailSentTime = LastEmailSentTime;
	this.SellerInvoiceTime = SellerInvoiceTime;
	this.IntegratedMerchantCreditCardEnabled = IntegratedMerchantCreditCardEnabled;
}
SellingManagerOrderStatusType.prototype.toJSON = function(with_null) {
	var json = { 
		CheckoutStatus: (this.CheckoutStatus === undefined)? null : this.CheckoutStatus.toJSON(),
		PaidStatus: (this.PaidStatus === undefined)? null : this.PaidStatus.toJSON(),
		ShippedStatus: (this.ShippedStatus === undefined)? null : this.ShippedStatus.toJSON(),
		eBayPaymentStatus: (this.eBayPaymentStatus === undefined)? null : this.eBayPaymentStatus.toJSON(),
		PayPalTransactionID: (this.PayPalTransactionID === undefined)? null : this.PayPalTransactionID,
		PaymentMethodUsed: (this.PaymentMethodUsed === undefined)? null : this.PaymentMethodUsed.toJSON(),
		FeedbackReceived: (this.FeedbackReceived === undefined)? null : this.FeedbackReceived.toJSON(),
		FeedbackSent: (this.FeedbackSent === undefined)? null : this.FeedbackSent,
		TotalEmailsSent: (this.TotalEmailsSent === undefined)? null : this.TotalEmailsSent,
		PaymentHoldStatus: (this.PaymentHoldStatus === undefined)? null : this.PaymentHoldStatus.toJSON(),
		SellerInvoiceNumber: (this.SellerInvoiceNumber === undefined)? null : this.SellerInvoiceNumber,
		ShippedTime: (this.ShippedTime === undefined)? null : this.ShippedTime,
		PaidTime: (this.PaidTime === undefined)? null : this.PaidTime,
		LastEmailSentTime: (this.LastEmailSentTime === undefined)? null : this.LastEmailSentTime,
		SellerInvoiceTime: (this.SellerInvoiceTime === undefined)? null : this.SellerInvoiceTime,
		IntegratedMerchantCreditCardEnabled: (this.IntegratedMerchantCreditCardEnabled === undefined)? null : this.IntegratedMerchantCreditCardEnabled
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
module.exports = SellingManagerOrderStatusType;