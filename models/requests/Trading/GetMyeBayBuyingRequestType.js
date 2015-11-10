var ItemListCustomizationType = require('../../Trading/ItemListCustomizationType'),
	MyeBaySelectionType = require('../../Trading/MyeBaySelectionType'),
	BidAssistantListType = require('../../Trading/BidAssistantListType');

function GetMyeBayBuyingRequestType(WatchList, BidList, BestOfferList, WonList, LostList, FavoriteSearches, FavoriteSellers, SecondChanceOffer, BidAssistantList, DeletedFromWonList, DeletedFromLostList, BuyingSummary, UserDefinedLists, HideVariations) {

	/**
	  Documentation
	   Returns items from the Buying section of the user's My eBay account, including items that the user is watching, bidding on, has won, has not won, and has made best offers on.
	 */

	/**
	 * Arrays
	 */
	var _WatchList;
	var _BidList;
	var _BestOfferList;
	var _WonList;
	var _LostList;
	var _FavoriteSearches;
	var _FavoriteSellers;
	var _SecondChanceOffer;
	var _BidAssistantList;
	var _DeletedFromWonList;
	var _DeletedFromLostList;
	var _BuyingSummary;
	var _UserDefinedLists;
	Object.defineProperty(this, 'WatchList', {
		 get: function(){
			 return _WatchList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_WatchList = value; 
				}else{
					console.log('WatchList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BidList', {
		 get: function(){
			 return _BidList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_BidList = value; 
				}else{
					console.log('BidList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BestOfferList', {
		 get: function(){
			 return _BestOfferList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_BestOfferList = value; 
				}else{
					console.log('BestOfferList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'WonList', {
		 get: function(){
			 return _WonList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_WonList = value; 
				}else{
					console.log('WonList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LostList', {
		 get: function(){
			 return _LostList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_LostList = value; 
				}else{
					console.log('LostList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FavoriteSearches', {
		 get: function(){
			 return _FavoriteSearches;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyeBaySelectionType){ 
					_FavoriteSearches = value; 
				}else{
					console.log('FavoriteSearches expects type MyeBaySelectionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FavoriteSellers', {
		 get: function(){
			 return _FavoriteSellers;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyeBaySelectionType){ 
					_FavoriteSellers = value; 
				}else{
					console.log('FavoriteSellers expects type MyeBaySelectionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SecondChanceOffer', {
		 get: function(){
			 return _SecondChanceOffer;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyeBaySelectionType){ 
					_SecondChanceOffer = value; 
				}else{
					console.log('SecondChanceOffer expects type MyeBaySelectionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BidAssistantList', {
		 get: function(){
			 return _BidAssistantList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BidAssistantListType){ 
					_BidAssistantList = value; 
				}else{
					console.log('BidAssistantList expects type BidAssistantListType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DeletedFromWonList', {
		 get: function(){
			 return _DeletedFromWonList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_DeletedFromWonList = value; 
				}else{
					console.log('DeletedFromWonList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DeletedFromLostList', {
		 get: function(){
			 return _DeletedFromLostList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_DeletedFromLostList = value; 
				}else{
					console.log('DeletedFromLostList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BuyingSummary', {
		 get: function(){
			 return _BuyingSummary;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_BuyingSummary = value; 
				}else{
					console.log('BuyingSummary expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UserDefinedLists', {
		 get: function(){
			 return _UserDefinedLists;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyeBaySelectionType){ 
					_UserDefinedLists = value; 
				}else{
					console.log('UserDefinedLists expects type MyeBaySelectionType');
				}
			}
		}
	});
	this.WatchList = WatchList;
	this.BidList = BidList;
	this.BestOfferList = BestOfferList;
	this.WonList = WonList;
	this.LostList = LostList;
	this.FavoriteSearches = FavoriteSearches;
	this.FavoriteSellers = FavoriteSellers;
	this.SecondChanceOffer = SecondChanceOffer;
	this.BidAssistantList = BidAssistantList;
	this.DeletedFromWonList = DeletedFromWonList;
	this.DeletedFromLostList = DeletedFromLostList;
	this.BuyingSummary = BuyingSummary;
	this.UserDefinedLists = UserDefinedLists;
	this.HideVariations = HideVariations;
}
GetMyeBayBuyingRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		WatchList: (this.WatchList === undefined)? null : this.WatchList.toJSON(),
		BidList: (this.BidList === undefined)? null : this.BidList.toJSON(),
		BestOfferList: (this.BestOfferList === undefined)? null : this.BestOfferList.toJSON(),
		WonList: (this.WonList === undefined)? null : this.WonList.toJSON(),
		LostList: (this.LostList === undefined)? null : this.LostList.toJSON(),
		FavoriteSearches: (this.FavoriteSearches === undefined)? null : this.FavoriteSearches.toJSON(),
		FavoriteSellers: (this.FavoriteSellers === undefined)? null : this.FavoriteSellers.toJSON(),
		SecondChanceOffer: (this.SecondChanceOffer === undefined)? null : this.SecondChanceOffer.toJSON(),
		BidAssistantList: (this.BidAssistantList === undefined)? null : this.BidAssistantList.toJSON(),
		DeletedFromWonList: (this.DeletedFromWonList === undefined)? null : this.DeletedFromWonList.toJSON(),
		DeletedFromLostList: (this.DeletedFromLostList === undefined)? null : this.DeletedFromLostList.toJSON(),
		BuyingSummary: (this.BuyingSummary === undefined)? null : this.BuyingSummary.toJSON(),
		UserDefinedLists: (this.UserDefinedLists === undefined)? null : this.UserDefinedLists.toJSON(),
		HideVariations: (this.HideVariations === undefined)? null : this.HideVariations
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
module.exports = GetMyeBayBuyingRequestType;