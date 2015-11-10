var AmountType = require('./AmountType'),
	ItemIDType = require('./ItemIDType');

function ListingDetailsType(Adult, BindingAuction, CheckoutEnabled, ConvertedBuyItNowPrice, ConvertedStartPrice, ConvertedReservePrice, HasReservePrice, RelistedItemID, SecondChanceOriginalItemID, StartTime, EndTime, ViewItemURL, HasUnansweredQuestions, HasPublicMessages, BuyItNowAvailable, SellerBusinessType, MinimumBestOfferPrice, MinimumBestOfferMessage, LocalListingDistance, TCROriginalItemID, ViewItemURLForNaturalSearch, PayPerLeadEnabled, BestOfferAutoAcceptPrice, EndingReason) {

	/**
	  Documentation
	   Various details about a listing. Some of the details are calculated or derived after an item is listed. The details in this type include the start and end time and the converted (localized) prices. The details in this type also include
                    input values applicable to the Best Offer feature. Additional details in this type include flags indicating if a seller specified fields whose values are not visible to the requesting user.
	 */

	/**
	 * Arrays
	 */
	var _ConvertedBuyItNowPrice;
	var _ConvertedStartPrice;
	var _ConvertedReservePrice;
	var _RelistedItemID;
	var _SecondChanceOriginalItemID;
	var _MinimumBestOfferPrice;
	var _TCROriginalItemID;
	var _BestOfferAutoAcceptPrice;
	Object.defineProperty(this, 'ConvertedBuyItNowPrice', {
		 get: function(){
			 return _ConvertedBuyItNowPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ConvertedBuyItNowPrice = value; 
				}else{
					console.log('ConvertedBuyItNowPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ConvertedStartPrice', {
		 get: function(){
			 return _ConvertedStartPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ConvertedStartPrice = value; 
				}else{
					console.log('ConvertedStartPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ConvertedReservePrice', {
		 get: function(){
			 return _ConvertedReservePrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ConvertedReservePrice = value; 
				}else{
					console.log('ConvertedReservePrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RelistedItemID', {
		 get: function(){
			 return _RelistedItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_RelistedItemID = value; 
				}else{
					console.log('RelistedItemID expects type ItemIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SecondChanceOriginalItemID', {
		 get: function(){
			 return _SecondChanceOriginalItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_SecondChanceOriginalItemID = value; 
				}else{
					console.log('SecondChanceOriginalItemID expects type ItemIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MinimumBestOfferPrice', {
		 get: function(){
			 return _MinimumBestOfferPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_MinimumBestOfferPrice = value; 
				}else{
					console.log('MinimumBestOfferPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TCROriginalItemID', {
		 get: function(){
			 return _TCROriginalItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_TCROriginalItemID = value; 
				}else{
					console.log('TCROriginalItemID expects type ItemIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BestOfferAutoAcceptPrice', {
		 get: function(){
			 return _BestOfferAutoAcceptPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_BestOfferAutoAcceptPrice = value; 
				}else{
					console.log('BestOfferAutoAcceptPrice expects type AmountType');
				}
			}
		}
	});
	this.Adult = Adult;
	this.BindingAuction = BindingAuction;
	this.CheckoutEnabled = CheckoutEnabled;
	this.ConvertedBuyItNowPrice = ConvertedBuyItNowPrice;
	this.ConvertedStartPrice = ConvertedStartPrice;
	this.ConvertedReservePrice = ConvertedReservePrice;
	this.HasReservePrice = HasReservePrice;
	this.RelistedItemID = RelistedItemID;
	this.SecondChanceOriginalItemID = SecondChanceOriginalItemID;
	this.StartTime = StartTime;
	this.EndTime = EndTime;
	this.ViewItemURL = ViewItemURL;
	this.HasUnansweredQuestions = HasUnansweredQuestions;
	this.HasPublicMessages = HasPublicMessages;
	this.BuyItNowAvailable = BuyItNowAvailable;
	this.SellerBusinessType = SellerBusinessType;
	this.MinimumBestOfferPrice = MinimumBestOfferPrice;
	this.MinimumBestOfferMessage = MinimumBestOfferMessage;
	this.LocalListingDistance = LocalListingDistance;
	this.TCROriginalItemID = TCROriginalItemID;
	this.ViewItemURLForNaturalSearch = ViewItemURLForNaturalSearch;
	this.PayPerLeadEnabled = PayPerLeadEnabled;
	this.BestOfferAutoAcceptPrice = BestOfferAutoAcceptPrice;
	this.EndingReason = EndingReason;
}
ListingDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Adult: (this.Adult === undefined)? null : this.Adult,
		BindingAuction: (this.BindingAuction === undefined)? null : this.BindingAuction,
		CheckoutEnabled: (this.CheckoutEnabled === undefined)? null : this.CheckoutEnabled,
		ConvertedBuyItNowPrice: (this.ConvertedBuyItNowPrice === undefined)? null : this.ConvertedBuyItNowPrice.toJSON(),
		ConvertedStartPrice: (this.ConvertedStartPrice === undefined)? null : this.ConvertedStartPrice.toJSON(),
		ConvertedReservePrice: (this.ConvertedReservePrice === undefined)? null : this.ConvertedReservePrice.toJSON(),
		HasReservePrice: (this.HasReservePrice === undefined)? null : this.HasReservePrice,
		RelistedItemID: (this.RelistedItemID === undefined)? null : this.RelistedItemID.toJSON(),
		SecondChanceOriginalItemID: (this.SecondChanceOriginalItemID === undefined)? null : this.SecondChanceOriginalItemID.toJSON(),
		StartTime: (this.StartTime === undefined)? null : this.StartTime,
		EndTime: (this.EndTime === undefined)? null : this.EndTime,
		ViewItemURL: (this.ViewItemURL === undefined)? null : this.ViewItemURL,
		HasUnansweredQuestions: (this.HasUnansweredQuestions === undefined)? null : this.HasUnansweredQuestions,
		HasPublicMessages: (this.HasPublicMessages === undefined)? null : this.HasPublicMessages,
		BuyItNowAvailable: (this.BuyItNowAvailable === undefined)? null : this.BuyItNowAvailable,
		SellerBusinessType: (this.SellerBusinessType === undefined)? null : this.SellerBusinessType,
		MinimumBestOfferPrice: (this.MinimumBestOfferPrice === undefined)? null : this.MinimumBestOfferPrice.toJSON(),
		MinimumBestOfferMessage: (this.MinimumBestOfferMessage === undefined)? null : this.MinimumBestOfferMessage,
		LocalListingDistance: (this.LocalListingDistance === undefined)? null : this.LocalListingDistance,
		TCROriginalItemID: (this.TCROriginalItemID === undefined)? null : this.TCROriginalItemID.toJSON(),
		ViewItemURLForNaturalSearch: (this.ViewItemURLForNaturalSearch === undefined)? null : this.ViewItemURLForNaturalSearch,
		PayPerLeadEnabled: (this.PayPerLeadEnabled === undefined)? null : this.PayPerLeadEnabled,
		BestOfferAutoAcceptPrice: (this.BestOfferAutoAcceptPrice === undefined)? null : this.BestOfferAutoAcceptPrice.toJSON(),
		EndingReason: (this.EndingReason === undefined)? null : this.EndingReason
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
module.exports = ListingDetailsType;