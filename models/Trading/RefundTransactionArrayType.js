function RefundTransactionArrayType(RefundTransaction) {

	/**
	  Documentation
	   This type is no longer used.
	 */

	/**
	 * Arrays
	 *	RefundTransaction: RefundTransactionType
	 */
	this.RefundTransaction = RefundTransaction;
}
RefundTransactionArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		RefundTransaction: (this.RefundTransaction === undefined)? null : this.RefundTransaction
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
module.exports = RefundTransactionArrayType;