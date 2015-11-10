var SimpleItemSortCodeType = require('./SimpleItemSortCodeType'),
	SortOrderCodeType = require('./SortOrderCodeType'),
	ItemTypeCodeType = require('./ItemTypeCodeType'),
	AmountType = require('./AmountType'),
	CurrencyCodeType = require('./CurrencyCodeType'),
	PaymentMethodSearchCodeType = require('./PaymentMethodSearchCodeType'),
	PreferredLocationCodeType = require('./PreferredLocationCodeType'),
	CountryCodeType = require('./CountryCodeType'),
	SellerBusinessCodeType = require('./SellerBusinessCodeType'),
	ItemConditionCodeType = require('./ItemConditionCodeType'),
	QuantityOperatorCodeType = require('./QuantityOperatorCodeType');

function MyeBayFavoriteSearchType(SearchName, SearchQuery, QueryKeywords, CategoryID, ItemSort, SortOrder, EndTimeFrom, EndTimeTo, MaxDistance, PostalCode, ItemType, PriceMax, PriceMin, Currency, BidCountMax, BidCountMin, SearchFlag, PaymentMethod, PreferredLocation, SellerID, SellerIDExclude, ItemsAvailableTo, ItemsLocatedIn, SellerBusinessType, Condition, Quantity, QuantityOperator) {

	/**
	  Documentation
	   
                Type defining the <b>FavoriteSearch</b> container returned in <b>GetMyeBayBuying</b>. The <b>FavoriteSearch</b> container consists of options and filtering used in a buyer's Saved Search on My eBay, and is only returned
                in <b>GetMyeBayBuying</b> if the <b>FavoriteSearches</b> container is included the request, and if there is at least one Saved Search for the buyer.
            
	 */

	/**
	 * Arrays
	 *	SearchFlag: SearchFlagCodeType
	 */
	var _ItemSort;
	var _SortOrder;
	var _ItemType;
	var _PriceMax;
	var _PriceMin;
	var _Currency;
	var _PaymentMethod;
	var _PreferredLocation;
	var _ItemsAvailableTo;
	var _ItemsLocatedIn;
	var _SellerBusinessType;
	var _Condition;
	var _QuantityOperator;
	Object.defineProperty(this, 'ItemSort', {
		 get: function(){
			 return _ItemSort;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SimpleItemSortCodeType){ 
					_ItemSort = value; 
				}else{
					console.log('ItemSort expects type SimpleItemSortCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SortOrder', {
		 get: function(){
			 return _SortOrder;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SortOrderCodeType){ 
					_SortOrder = value; 
				}else{
					console.log('SortOrder expects type SortOrderCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemType', {
		 get: function(){
			 return _ItemType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemTypeCodeType){ 
					_ItemType = value; 
				}else{
					console.log('ItemType expects type ItemTypeCodeType');
				}
			}
		}
	});
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
	Object.defineProperty(this, 'Currency', {
		 get: function(){
			 return _Currency;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CurrencyCodeType){ 
					_Currency = value; 
				}else{
					console.log('Currency expects type CurrencyCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentMethod', {
		 get: function(){
			 return _PaymentMethod;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaymentMethodSearchCodeType){ 
					_PaymentMethod = value; 
				}else{
					console.log('PaymentMethod expects type PaymentMethodSearchCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PreferredLocation', {
		 get: function(){
			 return _PreferredLocation;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PreferredLocationCodeType){ 
					_PreferredLocation = value; 
				}else{
					console.log('PreferredLocation expects type PreferredLocationCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemsAvailableTo', {
		 get: function(){
			 return _ItemsAvailableTo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CountryCodeType){ 
					_ItemsAvailableTo = value; 
				}else{
					console.log('ItemsAvailableTo expects type CountryCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemsLocatedIn', {
		 get: function(){
			 return _ItemsLocatedIn;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CountryCodeType){ 
					_ItemsLocatedIn = value; 
				}else{
					console.log('ItemsLocatedIn expects type CountryCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerBusinessType', {
		 get: function(){
			 return _SellerBusinessType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerBusinessCodeType){ 
					_SellerBusinessType = value; 
				}else{
					console.log('SellerBusinessType expects type SellerBusinessCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Condition', {
		 get: function(){
			 return _Condition;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemConditionCodeType){ 
					_Condition = value; 
				}else{
					console.log('Condition expects type ItemConditionCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'QuantityOperator', {
		 get: function(){
			 return _QuantityOperator;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof QuantityOperatorCodeType){ 
					_QuantityOperator = value; 
				}else{
					console.log('QuantityOperator expects type QuantityOperatorCodeType');
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
		ItemSort: (this.ItemSort === undefined)? null : this.ItemSort.toJSON(),
		SortOrder: (this.SortOrder === undefined)? null : this.SortOrder.toJSON(),
		EndTimeFrom: (this.EndTimeFrom === undefined)? null : this.EndTimeFrom,
		EndTimeTo: (this.EndTimeTo === undefined)? null : this.EndTimeTo,
		MaxDistance: (this.MaxDistance === undefined)? null : this.MaxDistance,
		PostalCode: (this.PostalCode === undefined)? null : this.PostalCode,
		ItemType: (this.ItemType === undefined)? null : this.ItemType.toJSON(),
		PriceMax: (this.PriceMax === undefined)? null : this.PriceMax.toJSON(),
		PriceMin: (this.PriceMin === undefined)? null : this.PriceMin.toJSON(),
		Currency: (this.Currency === undefined)? null : this.Currency.toJSON(),
		BidCountMax: (this.BidCountMax === undefined)? null : this.BidCountMax,
		BidCountMin: (this.BidCountMin === undefined)? null : this.BidCountMin,
		SearchFlag: (this.SearchFlag === undefined)? null : this.SearchFlag,
		PaymentMethod: (this.PaymentMethod === undefined)? null : this.PaymentMethod.toJSON(),
		PreferredLocation: (this.PreferredLocation === undefined)? null : this.PreferredLocation.toJSON(),
		SellerID: (this.SellerID === undefined)? null : this.SellerID,
		SellerIDExclude: (this.SellerIDExclude === undefined)? null : this.SellerIDExclude,
		ItemsAvailableTo: (this.ItemsAvailableTo === undefined)? null : this.ItemsAvailableTo.toJSON(),
		ItemsLocatedIn: (this.ItemsLocatedIn === undefined)? null : this.ItemsLocatedIn.toJSON(),
		SellerBusinessType: (this.SellerBusinessType === undefined)? null : this.SellerBusinessType.toJSON(),
		Condition: (this.Condition === undefined)? null : this.Condition.toJSON(),
		Quantity: (this.Quantity === undefined)? null : this.Quantity,
		QuantityOperator: (this.QuantityOperator === undefined)? null : this.QuantityOperator.toJSON()
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