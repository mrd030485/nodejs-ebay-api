function TransactionArrayType(Transaction) {

	/**
	  Documentation
	   
                Type defining the <b>TransactionArray</b> container, which contains an array of <b>Transaction</b> containers. Each <b>Transaction</b> container consists of detailed information on one order line item.
            
	 */

	/**
	 * Arrays
	 *	Transaction: TransactionType
	 */
	this.Transaction = Transaction;
}
TransactionArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		Transaction: (this.Transaction === undefined)? null : this.Transaction
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
module.exports = TransactionArrayType;