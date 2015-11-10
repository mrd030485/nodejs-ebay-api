var AmountType = require('./AmountType');

function SellerFavoriteItemPreferencesType(SearchKeywords, StoreCategoryID, ListingType, SearchSortOrder, MinPrice, MaxPrice, FavoriteItemID) {

	/**
	  Documentation
	   Contains the data for the seller favorite item preferences, i.e. the manual or automatic selection criteria to display items for buyer's favourite seller opt in email marketing.
	 */

	/**
	 * Arrays
	 *	FavoriteItemID: ItemIDType
	 */
	var _MinPrice;
	var _MaxPrice;
	Object.defineProperty(this, 'MinPrice', {
		 get: function(){
			 return _MinPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_MinPrice = value; 
				}else{
					console.log('MinPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MaxPrice', {
		 get: function(){
			 return _MaxPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_MaxPrice = value; 
				}else{
					console.log('MaxPrice expects type AmountType');
				}
			}
		}
	});
	this.SearchKeywords = SearchKeywords;
	this.StoreCategoryID = StoreCategoryID;
	this.ListingType = ListingType;
	this.SearchSortOrder = SearchSortOrder;
	this.MinPrice = MinPrice;
	this.MaxPrice = MaxPrice;
	this.FavoriteItemID = FavoriteItemID;
}
SellerFavoriteItemPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		SearchKeywords: (this.SearchKeywords === undefined)? null : this.SearchKeywords,
		StoreCategoryID: (this.StoreCategoryID === undefined)? null : this.StoreCategoryID,
		ListingType: (this.ListingType === undefined)? null : this.ListingType,
		SearchSortOrder: (this.SearchSortOrder === undefined)? null : this.SearchSortOrder,
		MinPrice: (this.MinPrice === undefined)? null : this.MinPrice.toJSON(),
		MaxPrice: (this.MaxPrice === undefined)? null : this.MaxPrice.toJSON(),
		FavoriteItemID: (this.FavoriteItemID === undefined)? null : this.FavoriteItemID
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
module.exports = SellerFavoriteItemPreferencesType;