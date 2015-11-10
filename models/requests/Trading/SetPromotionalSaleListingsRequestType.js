var ItemIDArrayType = require('../../Trading/ItemIDArrayType');

function SetPromotionalSaleListingsRequestType(PromotionalSaleID, Action, PromotionalSaleItemIDArray, StoreCategoryID, CategoryID, AllFixedPriceItems, AllStoreInventoryItems, AllAuctionItems) {

	/**
	  Documentation
	   Enables the seller to change the item listings that are affected by a promotional sale.
	 */

	/**
	 * Arrays
	 */
	var _PromotionalSaleItemIDArray;
	Object.defineProperty(this, 'PromotionalSaleItemIDArray', {
		 get: function(){
			 return _PromotionalSaleItemIDArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDArrayType){ 
					_PromotionalSaleItemIDArray = value; 
				}else{
					console.log('PromotionalSaleItemIDArray expects type ItemIDArrayType');
				}
			}
		}
	});
	this.PromotionalSaleID = PromotionalSaleID;
	this.Action = Action;
	this.PromotionalSaleItemIDArray = PromotionalSaleItemIDArray;
	this.StoreCategoryID = StoreCategoryID;
	this.CategoryID = CategoryID;
	this.AllFixedPriceItems = AllFixedPriceItems;
	this.AllStoreInventoryItems = AllStoreInventoryItems;
	this.AllAuctionItems = AllAuctionItems;
}
SetPromotionalSaleListingsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		PromotionalSaleID: (this.PromotionalSaleID === undefined)? null : this.PromotionalSaleID,
		Action: (this.Action === undefined)? null : this.Action,
		PromotionalSaleItemIDArray: (this.PromotionalSaleItemIDArray === undefined)? null : this.PromotionalSaleItemIDArray.toJSON(),
		StoreCategoryID: (this.StoreCategoryID === undefined)? null : this.StoreCategoryID,
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		AllFixedPriceItems: (this.AllFixedPriceItems === undefined)? null : this.AllFixedPriceItems,
		AllStoreInventoryItems: (this.AllStoreInventoryItems === undefined)? null : this.AllStoreInventoryItems,
		AllAuctionItems: (this.AllAuctionItems === undefined)? null : this.AllAuctionItems
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
module.exports = SetPromotionalSaleListingsRequestType;