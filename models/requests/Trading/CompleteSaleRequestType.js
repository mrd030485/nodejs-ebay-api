var ItemIDType = require('../../Trading/ItemIDType'),
	FeedbackInfoType = require('../../Trading/FeedbackInfoType'),
	ShipmentType = require('../../Trading/ShipmentType');

function CompleteSaleRequestType(ItemID, TransactionID, FeedbackInfo, Shipped, Paid, ListingType, Shipment, OrderID, OrderLineItemID) {

	/**
	  Documentation
	   Enables a seller to do various tasks after the creation of a single line item or multiple line item order. Typically, this call is used after the buyer has paid for the order, but it can be called by the seller beforehand. Typical post-payment
                    tasks available to this call include marking the order as paid, marking the order as shipped, providing shipment tracking details, and leaving feedback for the buyer.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _FeedbackInfo;
	var _Shipment;
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
	Object.defineProperty(this, 'FeedbackInfo', {
		 get: function(){
			 return _FeedbackInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeedbackInfoType){ 
					_FeedbackInfo = value; 
				}else{
					console.log('FeedbackInfo expects type FeedbackInfoType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Shipment', {
		 get: function(){
			 return _Shipment;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShipmentType){ 
					_Shipment = value; 
				}else{
					console.log('Shipment expects type ShipmentType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.FeedbackInfo = FeedbackInfo;
	this.Shipped = Shipped;
	this.Paid = Paid;
	this.ListingType = ListingType;
	this.Shipment = Shipment;
	this.OrderID = OrderID;
	this.OrderLineItemID = OrderLineItemID;
}
CompleteSaleRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		FeedbackInfo: (this.FeedbackInfo === undefined)? null : this.FeedbackInfo.toJSON(),
		Shipped: (this.Shipped === undefined)? null : this.Shipped,
		Paid: (this.Paid === undefined)? null : this.Paid,
		ListingType: (this.ListingType === undefined)? null : this.ListingType,
		Shipment: (this.Shipment === undefined)? null : this.Shipment.toJSON(),
		OrderID: (this.OrderID === undefined)? null : this.OrderID,
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
module.exports = CompleteSaleRequestType;