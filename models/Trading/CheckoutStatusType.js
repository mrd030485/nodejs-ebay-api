var PaymentStatusCodeType = require('./PaymentStatusCodeType'),
	BuyerPaymentMethodCodeType = require('./BuyerPaymentMethodCodeType'),
	CompleteStatusCodeType = require('./CompleteStatusCodeType'),
	eBayPaymentMismatchDetailsType = require('./eBayPaymentMismatchDetailsType'),
	BuyerPaymentInstrumentCodeType = require('./BuyerPaymentInstrumentCodeType');

function CheckoutStatusType(eBayPaymentStatus, LastModifiedTime, PaymentMethod, Status, IntegratedMerchantCreditCardEnabled, eBayPaymentMismatchDetails, PaymentInstrument) {

	/**
	  Documentation
	   
                Type defining the <b>CheckoutStatus</b> container that is returned in <b>GetOrders</b> and <b>GetOrderTransactions</b> to indicate the current checkout status of the order.
            
	 */

	/**
	 * Arrays
	 */
	var _eBayPaymentStatus;
	var _PaymentMethod;
	var _Status;
	var _eBayPaymentMismatchDetails;
	var _PaymentInstrument;
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
	Object.defineProperty(this, 'PaymentMethod', {
		 get: function(){
			 return _PaymentMethod;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerPaymentMethodCodeType){ 
					_PaymentMethod = value; 
				}else{
					console.log('PaymentMethod expects type BuyerPaymentMethodCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Status', {
		 get: function(){
			 return _Status;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CompleteStatusCodeType){ 
					_Status = value; 
				}else{
					console.log('Status expects type CompleteStatusCodeType');
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
		eBayPaymentStatus: (this.eBayPaymentStatus === undefined)? null : this.eBayPaymentStatus.toJSON(),
		LastModifiedTime: (this.LastModifiedTime === undefined)? null : this.LastModifiedTime,
		PaymentMethod: (this.PaymentMethod === undefined)? null : this.PaymentMethod.toJSON(),
		Status: (this.Status === undefined)? null : this.Status.toJSON(),
		IntegratedMerchantCreditCardEnabled: (this.IntegratedMerchantCreditCardEnabled === undefined)? null : this.IntegratedMerchantCreditCardEnabled,
		eBayPaymentMismatchDetails: (this.eBayPaymentMismatchDetails === undefined)? null : this.eBayPaymentMismatchDetails.toJSON(),
		PaymentInstrument: (this.PaymentInstrument === undefined)? null : this.PaymentInstrument.toJSON()
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