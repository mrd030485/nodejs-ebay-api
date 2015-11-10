var ItemIDType = require('../../Trading/ItemIDType'),
	OrderIDType = require('../../Trading/OrderIDType'),
	SellingManagerSoldOrderType = require('../../Trading/SellingManagerSoldOrderType');

function ReviseSellingManagerSaleRecordRequestType(ItemID, TransactionID, OrderID, SellingManagerSoldOrder, OrderLineItemID) {

	/**
	  Documentation
	   Enables sellers, who subscribe to Selling Manager Pro, to revise a Selling Manager sale record.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _OrderID;
	var _SellingManagerSoldOrder;
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
	Object.defineProperty(this, 'OrderID', {
		 get: function(){
			 return _OrderID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof OrderIDType){ 
					_OrderID = value; 
				}else{
					console.log('OrderID expects type OrderIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellingManagerSoldOrder', {
		 get: function(){
			 return _SellingManagerSoldOrder;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerSoldOrderType){ 
					_SellingManagerSoldOrder = value; 
				}else{
					console.log('SellingManagerSoldOrder expects type SellingManagerSoldOrderType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.OrderID = OrderID;
	this.SellingManagerSoldOrder = SellingManagerSoldOrder;
	this.OrderLineItemID = OrderLineItemID;
}
ReviseSellingManagerSaleRecordRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		OrderID: (this.OrderID === undefined)? null : this.OrderID.toJSON(),
		SellingManagerSoldOrder: (this.SellingManagerSoldOrder === undefined)? null : this.SellingManagerSoldOrder.toJSON(),
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
module.exports = ReviseSellingManagerSaleRecordRequestType;