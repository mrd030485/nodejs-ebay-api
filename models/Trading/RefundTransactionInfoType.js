var UserIdentityType = require('./UserIdentityType'),
	AmountType = require('./AmountType'),
	TransactionReferenceType = require('./TransactionReferenceType');

function RefundTransactionInfoType(RefundStatus, RefundType, RefundTo, RefundTime, RefundAmount, ReferenceID, FeeOrCreditAmount) {

	/**
	  Documentation
	   Type defining the <strong>Refund</strong> container, which consists of detailed information on an In-Store Pickup item refund. <br/><br/> <span class="tablenote"> <strong>Note:</strong> At this
                    time, the In-Store Pickup feature is generally only available to large retail merchants, and can only be applied to multi-quantity, fixed-price listings. </span>
	 */

	/**
	 * Arrays
	 */
	var _RefundTo;
	var _RefundAmount;
	var _ReferenceID;
	var _FeeOrCreditAmount;
	Object.defineProperty(this, 'RefundTo', {
		 get: function(){
			 return _RefundTo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIdentityType){ 
					_RefundTo = value; 
				}else{
					console.log('RefundTo expects type UserIdentityType');
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
	Object.defineProperty(this, 'ReferenceID', {
		 get: function(){
			 return _ReferenceID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TransactionReferenceType){ 
					_ReferenceID = value; 
				}else{
					console.log('ReferenceID expects type TransactionReferenceType');
				}
			}
		}
	});
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
	this.RefundStatus = RefundStatus;
	this.RefundType = RefundType;
	this.RefundTo = RefundTo;
	this.RefundTime = RefundTime;
	this.RefundAmount = RefundAmount;
	this.ReferenceID = ReferenceID;
	this.FeeOrCreditAmount = FeeOrCreditAmount;
}
RefundTransactionInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		RefundStatus: (this.RefundStatus === undefined)? null : this.RefundStatus,
		RefundType: (this.RefundType === undefined)? null : this.RefundType,
		RefundTo: (this.RefundTo === undefined)? null : this.RefundTo.toJSON(),
		RefundTime: (this.RefundTime === undefined)? null : this.RefundTime,
		RefundAmount: (this.RefundAmount === undefined)? null : this.RefundAmount.toJSON(),
		ReferenceID: (this.ReferenceID === undefined)? null : this.ReferenceID.toJSON(),
		FeeOrCreditAmount: (this.FeeOrCreditAmount === undefined)? null : this.FeeOrCreditAmount.toJSON()
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
module.exports = RefundTransactionInfoType;