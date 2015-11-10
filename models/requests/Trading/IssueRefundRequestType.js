var ItemIDType = require('../../Trading/ItemIDType'),
	AmountType = require('../../Trading/AmountType');

function IssueRefundRequestType(ItemID, TransactionID, RefundReason, RefundType, RefundAmount, RefundMessage, OrderLineItemID) {

	/**
	  Documentation
	   <b>Half.com only.</b>&nbsp;Issues a refund for a specific Half.com order line item. This can only be called by a seller. Sellers do not have the ability to issue a general refund (a refund not tied to an order line item)
                    to a buyer.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _RefundAmount;
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
	Object.defineProperty(this, 'RefundAmount', {
		 get: function(){
			 return _RefundAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_RefundAmount = value; 
				}else{
					console.log('RefundAmount expects type AmountType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.RefundReason = RefundReason;
	this.RefundType = RefundType;
	this.RefundAmount = RefundAmount;
	this.RefundMessage = RefundMessage;
	this.OrderLineItemID = OrderLineItemID;
}
IssueRefundRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		RefundReason: (this.RefundReason === undefined)? null : this.RefundReason,
		RefundType: (this.RefundType === undefined)? null : this.RefundType,
		RefundAmount: (this.RefundAmount === undefined)? null : this.RefundAmount.toJSON(),
		RefundMessage: (this.RefundMessage === undefined)? null : this.RefundMessage,
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
module.exports = IssueRefundRequestType;