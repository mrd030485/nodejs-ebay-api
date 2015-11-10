var ItemIDType = require('../../Trading/ItemIDType'),
	DisputeIDType = require('../../Trading/DisputeIDType');

function DisableUnpaidItemAssistanceRequestType(ItemID, TransactionID, DisputeID, OrderLineItemID) {

	/**
	  Documentation
	   Enables a seller who has opted into the automated Unpaid Item Assistant mechanism to disable the Unpaid Item Assistant at the order line item level. This call can be made whether or not a Unpaid Item dispute exists for the order line item.
                    If a dispute has already been created by the Unpaid Item Assistant, it is converted to a "manual" dispute for the seller to manage like any other manually-created dispute.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _DisputeID;
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
	Object.defineProperty(this, 'DisputeID', {
		 get: function(){
			 return _DisputeID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisputeIDType){ 
					_DisputeID = value; 
				}else{
					console.log('DisputeID expects type DisputeIDType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.DisputeID = DisputeID;
	this.OrderLineItemID = OrderLineItemID;
}
DisableUnpaidItemAssistanceRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		DisputeID: (this.DisputeID === undefined)? null : this.DisputeID.toJSON(),
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
module.exports = DisableUnpaidItemAssistanceRequestType;