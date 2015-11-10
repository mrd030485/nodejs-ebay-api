var ItemIDType = require('../../Trading/ItemIDType');

function AddDisputeRequestType(DisputeExplanation, DisputeReason, ItemID, TransactionID, OrderLineItemID) {

	/**
	  Documentation
	   Enables a seller to create an Unpaid Item case against a buyer, or to cancel a single line item order. The seller is eligible to open up an Unpaid Item case two days after the buyer purchases the item or wins the item through an auction.
                    To cancel a multiple line item order programmatically, the seller would have to use the <a href="http://developer.ebay.com/Devzone/post-order/post-order_v2_cancellation__post.html target="_blank">POST /post-order/v2/cancellation</a>
                    call of the <b>Post-Order API</b>.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
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
	this.DisputeExplanation = DisputeExplanation;
	this.DisputeReason = DisputeReason;
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.OrderLineItemID = OrderLineItemID;
}
AddDisputeRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		DisputeExplanation: (this.DisputeExplanation === undefined)? null : this.DisputeExplanation,
		DisputeReason: (this.DisputeReason === undefined)? null : this.DisputeReason,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
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
module.exports = AddDisputeRequestType;