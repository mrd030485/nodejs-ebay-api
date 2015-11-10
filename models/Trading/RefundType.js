var AmountType = require('./AmountType'),
	RefundTransactionArrayType = require('./RefundTransactionArrayType'),
	RefundStatusCodeType = require('./RefundStatusCodeType'),
	RefundFailureReasonType = require('./RefundFailureReasonType'),
	RefundFundingSourceArrayType = require('./RefundFundingSourceArrayType');

function RefundType(RefundFromSeller, TotalRefundToBuyer, RefundTime, RefundID, RefundTransactionArray, RefundAmount, RefundStatus, RefundFailureReason, RefundFundingSourceArray, ExternalReferenceID, RefundRequestedTime, RefundCompletionTime, EstimatedRefundCompletionTime, SellerNoteToBuyer) {

	/**
	  Documentation
	   
                Contains information about a single Half.com refund.
            
	 */

	/**
	 * Arrays
	 */
	var _RefundFromSeller;
	var _TotalRefundToBuyer;
	var _RefundTransactionArray;
	var _RefundAmount;
	var _RefundStatus;
	var _RefundFailureReason;
	var _RefundFundingSourceArray;
	Object.defineProperty(this, 'RefundFromSeller', {
		 get: function(){
			 return _RefundFromSeller;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_RefundFromSeller = value; 
				}else{
					console.log('RefundFromSeller expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TotalRefundToBuyer', {
		 get: function(){
			 return _TotalRefundToBuyer;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalRefundToBuyer = value; 
				}else{
					console.log('TotalRefundToBuyer expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RefundTransactionArray', {
		 get: function(){
			 return _RefundTransactionArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RefundTransactionArrayType){ 
					_RefundTransactionArray = value; 
				}else{
					console.log('RefundTransactionArray expects type RefundTransactionArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RefundAmount', {
		 get: function(){
			 return _RefundAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_RefundAmount = value; 
				}else{
					console.log('RefundAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RefundStatus', {
		 get: function(){
			 return _RefundStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RefundStatusCodeType){ 
					_RefundStatus = value; 
				}else{
					console.log('RefundStatus expects type RefundStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RefundFailureReason', {
		 get: function(){
			 return _RefundFailureReason;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RefundFailureReasonType){ 
					_RefundFailureReason = value; 
				}else{
					console.log('RefundFailureReason expects type RefundFailureReasonType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RefundFundingSourceArray', {
		 get: function(){
			 return _RefundFundingSourceArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RefundFundingSourceArrayType){ 
					_RefundFundingSourceArray = value; 
				}else{
					console.log('RefundFundingSourceArray expects type RefundFundingSourceArrayType');
				}
			}
		}
	});
	this.RefundFromSeller = RefundFromSeller;
	this.TotalRefundToBuyer = TotalRefundToBuyer;
	this.RefundTime = RefundTime;
	this.RefundID = RefundID;
	this.RefundTransactionArray = RefundTransactionArray;
	this.RefundAmount = RefundAmount;
	this.RefundStatus = RefundStatus;
	this.RefundFailureReason = RefundFailureReason;
	this.RefundFundingSourceArray = RefundFundingSourceArray;
	this.ExternalReferenceID = ExternalReferenceID;
	this.RefundRequestedTime = RefundRequestedTime;
	this.RefundCompletionTime = RefundCompletionTime;
	this.EstimatedRefundCompletionTime = EstimatedRefundCompletionTime;
	this.SellerNoteToBuyer = SellerNoteToBuyer;
}
RefundType.prototype.toJSON = function(with_null) {
	var json = { 
		RefundFromSeller: (this.RefundFromSeller === undefined)? null : this.RefundFromSeller.toJSON(),
		TotalRefundToBuyer: (this.TotalRefundToBuyer === undefined)? null : this.TotalRefundToBuyer.toJSON(),
		RefundTime: (this.RefundTime === undefined)? null : this.RefundTime,
		RefundID: (this.RefundID === undefined)? null : this.RefundID,
		RefundTransactionArray: (this.RefundTransactionArray === undefined)? null : this.RefundTransactionArray.toJSON(),
		RefundAmount: (this.RefundAmount === undefined)? null : this.RefundAmount.toJSON(),
		RefundStatus: (this.RefundStatus === undefined)? null : this.RefundStatus.toJSON(),
		RefundFailureReason: (this.RefundFailureReason === undefined)? null : this.RefundFailureReason.toJSON(),
		RefundFundingSourceArray: (this.RefundFundingSourceArray === undefined)? null : this.RefundFundingSourceArray.toJSON(),
		ExternalReferenceID: (this.ExternalReferenceID === undefined)? null : this.ExternalReferenceID,
		RefundRequestedTime: (this.RefundRequestedTime === undefined)? null : this.RefundRequestedTime,
		RefundCompletionTime: (this.RefundCompletionTime === undefined)? null : this.RefundCompletionTime,
		EstimatedRefundCompletionTime: (this.EstimatedRefundCompletionTime === undefined)? null : this.EstimatedRefundCompletionTime,
		SellerNoteToBuyer: (this.SellerNoteToBuyer === undefined)? null : this.SellerNoteToBuyer
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
module.exports = RefundType;