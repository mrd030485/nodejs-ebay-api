var SKUType = require('./SKUType'),
	ItemIDType = require('./ItemIDType'),
	AmountType = require('./AmountType');

function InventoryStatusType(SKU, ItemID, StartPrice, Quantity) {

	/**
	  Documentation
	   
                Lightweight type for updating basic inventory status details. Primarily intended for bulk use cases.
            
	 */

	/**
	 * Arrays
	 */
	var _SKU;
	var _ItemID;
	var _StartPrice;
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
	Object.defineProperty(this, 'StartPrice', {
		 get: function(){
			 return _StartPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_StartPrice = value; 
				}else{
					console.log('StartPrice expects type AmountType');
				}
			}
		}
	});
	this.SKU = SKU;
	this.ItemID = ItemID;
	this.StartPrice = StartPrice;
	this.Quantity = Quantity;
}
InventoryStatusType.prototype.toJSON = function(with_null) {
	var json = { 
		SKU: (this.SKU === undefined)? null : this.SKU.toJSON(),
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		StartPrice: (this.StartPrice === undefined)? null : this.StartPrice.toJSON(),
		Quantity: (this.Quantity === undefined)? null : this.Quantity
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
module.exports = InventoryStatusType;