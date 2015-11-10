var RefundLineArrayType = require('./RefundLineArrayType');

function RefundTransactionType(OrderID, ItemID, TransactionID, RefundLineArray) {

	/**
	  Documentation
	   
                This type is no longer used.
            
	 */

	/**
	 * Arrays
	 */
	var _RefundLineArray;
	Object.defineProperty(this, 'RefundLineArray', {
		 get: function(){
			 return _RefundLineArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RefundLineArrayType){ 
					_RefundLineArray = value; 
				}else{
					console.log('RefundLineArray expects type RefundLineArrayType');
				}
			}
		}
	});
	this.OrderID = OrderID;
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.RefundLineArray = RefundLineArray;
}
RefundTransactionType.prototype.toJSON = function(with_null) {
	var json = { 
		OrderID: (this.OrderID === undefined)? null : this.OrderID,
		ItemID: (this.ItemID === undefined)? null : this.ItemID,
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		RefundLineArray: (this.RefundLineArray === undefined)? null : this.RefundLineArray.toJSON()
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
module.exports = RefundTransactionType;