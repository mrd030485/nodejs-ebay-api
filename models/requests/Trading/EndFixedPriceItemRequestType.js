var ItemIDType = require('../../Trading/ItemIDType'),
	SKUType = require('../../Trading/SKUType');

function EndFixedPriceItemRequestType(ItemID, EndingReason, SKU) {

	/**
	  Documentation
	   Ends the specified fixed-price listing before the date and time at which it would normally end (per the listing duration).
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
	this.EndingReason = EndingReason;
	this.SKU = SKU;
}
EndFixedPriceItemRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		EndingReason: (this.EndingReason === undefined)? null : this.EndingReason,
		SKU: (this.SKU === undefined)? null : this.SKU.toJSON()
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
module.exports = EndFixedPriceItemRequestType;