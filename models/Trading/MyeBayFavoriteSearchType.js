var AmountType = require('./AmountType');

function MyeBayFavoriteSearchType(SearchName, SearchQuery, QueryKeywords, CategoryID, ItemSort, SortOrder, EndTimeFrom, EndTimeTo, MaxDistance, PostalCode, ItemType, PriceMax, PriceMin, Currency, BidCountMax, BidCountMin, SearchFlag, PaymentMethod, PreferredLocation, SellerID, SellerIDExclude, ItemsAvailableTo, ItemsLocatedIn, SellerBusinessType, Condition, Quantity, QuantityOperator) {

	/**
	  Documentation
	   Type defining the <b>FavoriteSearch</b> container returned in <b>GetMyeBayBuying</b>. The <b>FavoriteSearch</b> container consists of options and filtering used in a buyer's Saved Search on My eBay,
                    and is only returned in <b>GetMyeBayBuying</b> if the <b>FavoriteSearches</b> container is included the request, and if there is at least one Saved Search for the buyer.
	 */

	/**
	 * Arrays
	 */
	var _PriceMax;
	var _PriceMin;
	Object.defineProperty(this, 'PriceMax', {
		 get: function(){
			 return _PriceMax;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_PriceMax = value; 
				}else{
					console.log('PriceMax expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PriceMin', {
		 get: function(){
			 return _PriceMin;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_PriceMin = value; 
				}else{
					console.log('PriceMin expects type AmountType');
				}
			}
		}
	});
	this.SearchName = SearchName;
	this.SearchQuery = SearchQuery;
	this.QueryKeywords = QueryKeywords;
	this.CategoryID = CategoryID;
	this.ItemSort = ItemSort;
	this.SortOrder = SortOrder;
	this.EndTimeFrom = EndTimeFrom;
	this.EndTimeTo = EndTimeTo;
	this.MaxDistance = MaxDistance;
	this.PostalCode = PostalCode;
	this.ItemType = ItemType;
	this.PriceMax = PriceMax;
	this.PriceMin = PriceMin;
	this.Currency = Currency;
	this.BidCountMax = BidCountMax;
	this.BidCountMin = BidCountMin;
	this.SearchFlag = SearchFlag;
	this.PaymentMethod = PaymentMethod;
	this.PreferredLocation = PreferredLocation;
	this.SellerID = SellerID;
	this.SellerIDExclude = SellerIDExclude;
	this.ItemsAvailableTo = ItemsAvailableTo;
	this.ItemsLocatedIn = ItemsLocatedIn;
	this.SellerBusinessType = SellerBusinessType;
	this.Condition = Condition;
	this.Quantity = Quantity;
	this.QuantityOperator = QuantityOperator;
}
MyeBayFavoriteSearchType.prototype.toJSON = function(with_null) {
	var json = { 
		SearchName: (this.SearchName === undefined)? null : this.SearchName,
		SearchQuery: (this.SearchQuery === undefined)? null : this.SearchQuery,
		QueryKeywords: (this.QueryKeywords === undefined)? null : this.QueryKeywords,
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		ItemSort: (this.ItemSort === undefined)? null : this.ItemSort,
		SortOrder: (this.SortOrder === undefined)? null : this.SortOrder,
		EndTimeFrom: (this.EndTimeFrom === undefined)? null : this.EndTimeFrom,
		EndTimeTo: (this.EndTimeTo === undefined)? null : this.EndTimeTo,
		MaxDistance: (this.MaxDistance === undefined)? null : this.MaxDistance,
		PostalCode: (this.PostalCode === undefined)? null : this.PostalCode,
		ItemType: (this.ItemType === undefined)? null : this.ItemType,
		PriceMax: (this.PriceMax === undefined)? null : this.PriceMax.toJSON(),
		PriceMin: (this.PriceMin === undefined)? null : this.PriceMin.toJSON(),
		Currency: (this.Currency === undefined)? null : this.Currency,
		BidCountMax: (this.BidCountMax === undefined)? null : this.BidCountMax,
		BidCountMin: (this.BidCountMin === undefined)? null : this.BidCountMin,
		SearchFlag: (this.SearchFlag === undefined)? null : this.SearchFlag,
		PaymentMethod: (this.PaymentMethod === undefined)? null : this.PaymentMethod,
		PreferredLocation: (this.PreferredLocation === undefined)? null : this.PreferredLocation,
		SellerID: (this.SellerID === undefined)? null : this.SellerID,
		SellerIDExclude: (this.SellerIDExclude === undefined)? null : this.SellerIDExclude,
		ItemsAvailableTo: (this.ItemsAvailableTo === undefined)? null : this.ItemsAvailableTo,
		ItemsLocatedIn: (this.ItemsLocatedIn === undefined)? null : this.ItemsLocatedIn,
		SellerBusinessType: (this.SellerBusinessType === undefined)? null : this.SellerBusinessType,
		Condition: (this.Condition === undefined)? null : this.Condition,
		Quantity: (this.Quantity === undefined)? null : this.Quantity,
		QuantityOperator: (this.QuantityOperator === undefined)? null : this.QuantityOperator
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
module.exports = MyeBayFavoriteSearchType;