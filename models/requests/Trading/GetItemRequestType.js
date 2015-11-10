var ItemIDType = require('../../Trading/ItemIDType'),
	SKUType = require('../../Trading/SKUType'),
	NameValueListArrayType = require('../../Trading/NameValueListArrayType');

function GetItemRequestType(ItemID, IncludeWatchCount, IncludeCrossPromotion, IncludeItemSpecifics, IncludeTaxTable, SKU, VariationSKU, VariationSpecifics, TransactionID, IncludeItemCompatibilityList) {

	/**
	  Documentation
	   Returns item data such as title, description, price information, seller information, and so on, for the specified <b>ItemID</b>. &nbsp;<b>Also for Half.com</b>.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _SKU;
	var _VariationSKU;
	var _VariationSpecifics;
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
	Object.defineProperty(this, 'VariationSKU', {
		 get: function(){
			 return _VariationSKU;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SKUType){ 
					_VariationSKU = value; 
				}else{
					console.log('VariationSKU expects type SKUType');
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
	this.ItemID = ItemID;
	this.IncludeWatchCount = IncludeWatchCount;
	this.IncludeCrossPromotion = IncludeCrossPromotion;
	this.IncludeItemSpecifics = IncludeItemSpecifics;
	this.IncludeTaxTable = IncludeTaxTable;
	this.SKU = SKU;
	this.VariationSKU = VariationSKU;
	this.VariationSpecifics = VariationSpecifics;
	this.TransactionID = TransactionID;
	this.IncludeItemCompatibilityList = IncludeItemCompatibilityList;
}
GetItemRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		IncludeWatchCount: (this.IncludeWatchCount === undefined)? null : this.IncludeWatchCount,
		IncludeCrossPromotion: (this.IncludeCrossPromotion === undefined)? null : this.IncludeCrossPromotion,
		IncludeItemSpecifics: (this.IncludeItemSpecifics === undefined)? null : this.IncludeItemSpecifics,
		IncludeTaxTable: (this.IncludeTaxTable === undefined)? null : this.IncludeTaxTable,
		SKU: (this.SKU === undefined)? null : this.SKU.toJSON(),
		VariationSKU: (this.VariationSKU === undefined)? null : this.VariationSKU.toJSON(),
		VariationSpecifics: (this.VariationSpecifics === undefined)? null : this.VariationSpecifics.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		IncludeItemCompatibilityList: (this.IncludeItemCompatibilityList === undefined)? null : this.IncludeItemCompatibilityList
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
module.exports = GetItemRequestType;