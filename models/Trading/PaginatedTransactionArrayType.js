var TransactionArrayType = require('./TransactionArrayType'),
	PaginationResultType = require('./PaginationResultType');

function PaginatedTransactionArrayType(TransactionArray, PaginationResult) {

	/**
	  Documentation
	   Contains a paginated list of order line items.
	 */

	/**
	 * Arrays
	 */
	var _TransactionArray;
	var _PaginationResult;
	Object.defineProperty(this, 'TransactionArray', {
		 get: function(){
			 return _TransactionArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TransactionArrayType){ 
					_TransactionArray = value; 
				}else{
					console.log('TransactionArray expects type TransactionArrayType');
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
	this.TransactionArray = TransactionArray;
	this.PaginationResult = PaginationResult;
}
PaginatedTransactionArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		TransactionArray: (this.TransactionArray === undefined)? null : this.TransactionArray.toJSON(),
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
module.exports = PaginatedTransactionArrayType;