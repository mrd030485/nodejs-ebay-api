var ItemIDType = require('../../Trading/ItemIDType'),
	NameValueListArrayType = require('../../Trading/NameValueListArrayType'),
	SKUType = require('../../Trading/SKUType');

function SetUserNotesRequestType(ItemID, Action, NoteText, TransactionID, VariationSpecifics, SKU, OrderLineItemID) {

	/**
	  Documentation
	   Enables users to add, replace, and delete My eBay notes for items that are being tracked in the My eBay All Selling and All Buying areas.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _VariationSpecifics;
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
	Object.defineProperty(this, 'VariationSpecifics', {
		 get: function(){
			 return _VariationSpecifics;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NameValueListArrayType){ 
					_VariationSpecifics = value; 
				}else{
					console.log('VariationSpecifics expects type NameValueListArrayType');
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
	this.Action = Action;
	this.NoteText = NoteText;
	this.TransactionID = TransactionID;
	this.VariationSpecifics = VariationSpecifics;
	this.SKU = SKU;
	this.OrderLineItemID = OrderLineItemID;
}
SetUserNotesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		Action: (this.Action === undefined)? null : this.Action,
		NoteText: (this.NoteText === undefined)? null : this.NoteText,
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		VariationSpecifics: (this.VariationSpecifics === undefined)? null : this.VariationSpecifics.toJSON(),
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
module.exports = SetUserNotesRequestType;