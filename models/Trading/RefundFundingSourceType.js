var AmountType = require('./AmountType');

function RefundFundingSourceType(RefundingSourceType, AccountNumber, RefundAmount, SellerExternalTransactionID, BuyerExternalTransactionID) {

	/**
	  Documentation
	   This type is no longer used.
	 */

	/**
	 * Arrays
	 */
	var _RefundAmount;
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
	this.RefundingSourceType = RefundingSourceType;
	this.AccountNumber = AccountNumber;
	this.RefundAmount = RefundAmount;
	this.SellerExternalTransactionID = SellerExternalTransactionID;
	this.BuyerExternalTransactionID = BuyerExternalTransactionID;
}
RefundFundingSourceType.prototype.toJSON = function(with_null) {
	var json = { 
		RefundingSourceType: (this.RefundingSourceType === undefined)? null : this.RefundingSourceType,
		AccountNumber: (this.AccountNumber === undefined)? null : this.AccountNumber,
		RefundAmount: (this.RefundAmount === undefined)? null : this.RefundAmount.toJSON(),
		SellerExternalTransactionID: (this.SellerExternalTransactionID === undefined)? null : this.SellerExternalTransactionID,
		BuyerExternalTransactionID: (this.BuyerExternalTransactionID === undefined)? null : this.BuyerExternalTransactionID
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
module.exports = RefundFundingSourceType;