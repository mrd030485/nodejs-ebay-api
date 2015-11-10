var OrderTransactionArrayType = require('./OrderTransactionArrayType'),
	PaginationResultType = require('./PaginationResultType');

function PaginatedOrderTransactionArrayType(OrderTransactionArray, PaginationResult) {

	/**
	  Documentation
	   
                Contains a paginated list of orders.
            
	 */

	/**
	 * Arrays
	 */
	var _OrderTransactionArray;
	var _PaginationResult;
	Object.defineProperty(this, 'OrderTransactionArray', {
		 get: function(){
			 return _OrderTransactionArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof OrderTransactionArrayType){ 
					_OrderTransactionArray = value; 
				}else{
					console.log('OrderTransactionArray expects type OrderTransactionArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaginationResult', {
		 get: function(){
			 return _PaginationResult;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaginationResultType){ 
					_PaginationResult = value; 
				}else{
					console.log('PaginationResult expects type PaginationResultType');
				}
			}
		}
	});
	this.OrderTransactionArray = OrderTransactionArray;
	this.PaginationResult = PaginationResult;
}
PaginatedOrderTransactionArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		OrderTransactionArray: (this.OrderTransactionArray === undefined)? null : this.OrderTransactionArray.toJSON(),
		PaginationResult: (this.PaginationResult === undefined)? null : this.PaginationResult.toJSON()
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
module.exports = PaginatedOrderTransactionArrayType;