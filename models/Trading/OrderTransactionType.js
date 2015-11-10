var OrderType = require('./OrderType'),
	TransactionType = require('./TransactionType');

function OrderTransactionType(Order, Transaction) {

	/**
	  Documentation
	   
                Contains an order or a transaction. A transaction is the sale of one or more items from a seller's listing to a buyer. An order combines two or more transactions into a single payment.
            
	 */

	/**
	 * Arrays
	 */
	var _Order;
	var _Transaction;
	Object.defineProperty(this, 'Order', {
		 get: function(){
			 return _Order;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof OrderType){ 
					_Order = value; 
				}else{
					console.log('Order expects type OrderType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Transaction', {
		 get: function(){
			 return _Transaction;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TransactionType){ 
					_Transaction = value; 
				}else{
					console.log('Transaction expects type TransactionType');
				}
			}
		}
	});
	this.Order = Order;
	this.Transaction = Transaction;
}
OrderTransactionType.prototype.toJSON = function(with_null) {
	var json = { 
		Order: (this.Order === undefined)? null : this.Order.toJSON(),
		Transaction: (this.Transaction === undefined)? null : this.Transaction.toJSON()
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
module.exports = OrderTransactionType;