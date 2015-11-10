function OrderTransactionArrayType(OrderTransaction) {

	/**
	  Documentation
	   Contains a list of orders, transactions, or both, each of OrderTransactionType.
	 */

	/**
	 * Arrays
	 *	OrderTransaction: OrderTransactionType
	 */
	this.OrderTransaction = OrderTransaction;
}
OrderTransactionArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		OrderTransaction: (this.OrderTransaction === undefined)? null : this.OrderTransaction
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
module.exports = OrderTransactionArrayType;