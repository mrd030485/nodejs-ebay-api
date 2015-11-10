var ItemIDType = require('../../Trading/ItemIDType'),
	OrderIDType = require('../../Trading/OrderIDType'),
	TimeRangeType = require('../../Trading/TimeRangeType');

function GetSellingManagerEmailLogRequestType(ItemID, TransactionID, OrderID, EmailDateRange, OrderLineItemID) {

	/**
	  Documentation
	   Retrieves a log of emails sent, or scheduled to be sent, to buyers. <br><br> The standard Trading API deprecation process is not applicable to this call.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _OrderID;
	var _EmailDateRange;
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
	Object.defineProperty(this, 'EmailDateRange', {
		 get: function(){
			 return _EmailDateRange;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TimeRangeType){ 
					_EmailDateRange = value; 
				}else{
					console.log('EmailDateRange expects type TimeRangeType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.OrderID = OrderID;
	this.EmailDateRange = EmailDateRange;
	this.OrderLineItemID = OrderLineItemID;
}
GetSellingManagerEmailLogRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		OrderID: (this.OrderID === undefined)? null : this.OrderID.toJSON(),
		EmailDateRange: (this.EmailDateRange === undefined)? null : this.EmailDateRange.toJSON(),
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
module.exports = GetSellingManagerEmailLogRequestType;