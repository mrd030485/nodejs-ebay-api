var AmountType = require('./AmountType');

function ExternalTransactionType(ExternalTransactionID, ExternalTransactionTime, FeeOrCreditAmount, PaymentOrRefundAmount, ExternalTransactionStatus) {

	/**
	  Documentation
	   Container consisting of details related to payment of an eBay order on an external system such as PayPal. This container is only returned if payment has been made on an order. For GetSellerTransaactions and GetItemTransactions, this container
                    is not returned for multiple line item orders.
	 */

	/**
	 * Arrays
	 */
	var _FeeOrCreditAmount;
	var _PaymentOrRefundAmount;
	Object.defineProperty(this, 'FeeOrCreditAmount', {
		 get: function(){
			 return _FeeOrCreditAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_FeeOrCreditAmount = value; 
				}else{
					console.log('FeeOrCreditAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentOrRefundAmount', {
		 get: function(){
			 return _PaymentOrRefundAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_PaymentOrRefundAmount = value; 
				}else{
					console.log('PaymentOrRefundAmount expects type AmountType');
				}
			}
		}
	});
	this.ExternalTransactionID = ExternalTransactionID;
	this.ExternalTransactionTime = ExternalTransactionTime;
	this.FeeOrCreditAmount = FeeOrCreditAmount;
	this.PaymentOrRefundAmount = PaymentOrRefundAmount;
	this.ExternalTransactionStatus = ExternalTransactionStatus;
}
ExternalTransactionType.prototype.toJSON = function(with_null) {
	var json = { 
		ExternalTransactionID: (this.ExternalTransactionID === undefined)? null : this.ExternalTransactionID,
		ExternalTransactionTime: (this.ExternalTransactionTime === undefined)? null : this.ExternalTransactionTime,
		FeeOrCreditAmount: (this.FeeOrCreditAmount === undefined)? null : this.FeeOrCreditAmount.toJSON(),
		PaymentOrRefundAmount: (this.PaymentOrRefundAmount === undefined)? null : this.PaymentOrRefundAmount.toJSON(),
		ExternalTransactionStatus: (this.ExternalTransactionStatus === undefined)? null : this.ExternalTransactionStatus
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
module.exports = ExternalTransactionType;