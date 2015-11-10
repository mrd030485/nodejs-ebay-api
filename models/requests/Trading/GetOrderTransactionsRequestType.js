var ItemTransactionIDArrayType = require('../../Trading/ItemTransactionIDArrayType'),
	OrderIDArrayType = require('../../Trading/OrderIDArrayType');

function GetOrderTransactionsRequestType(ItemTransactionIDArray, OrderIDArray, Platform, IncludeFinalValueFees) {

	/**
	  Documentation
	   Retrieves information about one or more orders based on OrderIDs, ItemIDs, or SKU values. &nbsp;<b>Also for Half.com</b>.
	 */

	/**
	 * Arrays
	 */
	var _ItemTransactionIDArray;
	var _OrderIDArray;
	Object.defineProperty(this, 'ItemTransactionIDArray', {
		 get: function(){
			 return _ItemTransactionIDArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemTransactionIDArrayType){ 
					_ItemTransactionIDArray = value; 
				}else{
					console.log('ItemTransactionIDArray expects type ItemTransactionIDArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'OrderIDArray', {
		 get: function(){
			 return _OrderIDArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof OrderIDArrayType){ 
					_OrderIDArray = value; 
				}else{
					console.log('OrderIDArray expects type OrderIDArrayType');
				}
			}
		}
	});
	this.ItemTransactionIDArray = ItemTransactionIDArray;
	this.OrderIDArray = OrderIDArray;
	this.Platform = Platform;
	this.IncludeFinalValueFees = IncludeFinalValueFees;
}
GetOrderTransactionsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemTransactionIDArray: (this.ItemTransactionIDArray === undefined)? null : this.ItemTransactionIDArray.toJSON(),
		OrderIDArray: (this.OrderIDArray === undefined)? null : this.OrderIDArray.toJSON(),
		Platform: (this.Platform === undefined)? null : this.Platform,
		IncludeFinalValueFees: (this.IncludeFinalValueFees === undefined)? null : this.IncludeFinalValueFees
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
module.exports = GetOrderTransactionsRequestType;