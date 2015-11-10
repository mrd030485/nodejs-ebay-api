var ItemIDType = require('./ItemIDType'),
	SKUType = require('./SKUType');

function ItemTransactionIDType(ItemID, TransactionID, SKU, OrderLineItemID) {

	/**
	  Documentation
	   This container is designed to return all order line items related to specific multiple-item, fixed-price listings. Additionally, a SKU filter can be used to return all order line items related to a specific product or variation of an item.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _SKU;
	Object.defineProperty(this, 'ItemID', {
		 get: function(){
			 return _ItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_ItemID = value; 
				}else{
					console.log('ItemID expects type ItemIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SKU', {
		 get: function(){
			 return _SKU;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SKUType){ 
					_SKU = value; 
				}else{
					console.log('SKU expects type SKUType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.SKU = SKU;
	this.OrderLineItemID = OrderLineItemID;
}
ItemTransactionIDType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		SKU: (this.SKU === undefined)? null : this.SKU.toJSON(),
		OrderLineItemID: (this.OrderLineItemID === undefined)? null : this.OrderLineItemID
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
module.exports = ItemTransactionIDType;