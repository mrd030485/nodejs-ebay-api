var BidActionCodeType = require('./BidActionCodeType'),
	CurrencyCodeType = require('./CurrencyCodeType'),
	ItemIDType = require('./ItemIDType'),
	AmountType = require('./AmountType'),
	UserType = require('./UserType'),
	BestOfferIDType = require('./BestOfferIDType');

function OfferType(Action, Currency, ItemID, MaxBid, Quantity, SecondChanceEnabled, SiteCurrency, TimeBid, HighestBid, ConvertedPrice, TransactionID, User, UserConsent, BidCount, Message, BestOfferID, MyMaxBid) {

	/**
	  Documentation
	   
                Contains information pertaining to an offer made on an item listing and the current bidding or purchase state of the listing.
            
	 */

	/**
	 * Arrays
	 */
	var _Action;
	var _Currency;
	var _ItemID;
	var _MaxBid;
	var _SiteCurrency;
	var _HighestBid;
	var _ConvertedPrice;
	var _User;
	var _BestOfferID;
	var _MyMaxBid;
	Object.defineProperty(this, 'Action', {
		 get: function(){
			 return _Action;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BidActionCodeType){ 
					_Action = value; 
				}else{
					console.log('Action expects type BidActionCodeType');
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
	Object.defineProperty(this, 'MaxBid', {
		 get: function(){
			 return _MaxBid;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_MaxBid = value; 
				}else{
					console.log('MaxBid expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SiteCurrency', {
		 get: function(){
			 return _SiteCurrency;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CurrencyCodeType){ 
					_SiteCurrency = value; 
				}else{
					console.log('SiteCurrency expects type CurrencyCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'HighestBid', {
		 get: function(){
			 return _HighestBid;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_HighestBid = value; 
				}else{
					console.log('HighestBid expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ConvertedPrice', {
		 get: function(){
			 return _ConvertedPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ConvertedPrice = value; 
				}else{
					console.log('ConvertedPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'User', {
		 get: function(){
			 return _User;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserType){ 
					_User = value; 
				}else{
					console.log('User expects type UserType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BestOfferID', {
		 get: function(){
			 return _BestOfferID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BestOfferIDType){ 
					_BestOfferID = value; 
				}else{
					console.log('BestOfferID expects type BestOfferIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MyMaxBid', {
		 get: function(){
			 return _MyMaxBid;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_MyMaxBid = value; 
				}else{
					console.log('MyMaxBid expects type AmountType');
				}
			}
		}
	});
	this.Action = Action;
	this.Currency = Currency;
	this.ItemID = ItemID;
	this.MaxBid = MaxBid;
	this.Quantity = Quantity;
	this.SecondChanceEnabled = SecondChanceEnabled;
	this.SiteCurrency = SiteCurrency;
	this.TimeBid = TimeBid;
	this.HighestBid = HighestBid;
	this.ConvertedPrice = ConvertedPrice;
	this.TransactionID = TransactionID;
	this.User = User;
	this.UserConsent = UserConsent;
	this.BidCount = BidCount;
	this.Message = Message;
	this.BestOfferID = BestOfferID;
	this.MyMaxBid = MyMaxBid;
}
OfferType.prototype.toJSON = function(with_null) {
	var json = { 
		Action: (this.Action === undefined)? null : this.Action.toJSON(),
		Currency: (this.Currency === undefined)? null : this.Currency.toJSON(),
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		MaxBid: (this.MaxBid === undefined)? null : this.MaxBid.toJSON(),
		Quantity: (this.Quantity === undefined)? null : this.Quantity,
		SecondChanceEnabled: (this.SecondChanceEnabled === undefined)? null : this.SecondChanceEnabled,
		SiteCurrency: (this.SiteCurrency === undefined)? null : this.SiteCurrency.toJSON(),
		TimeBid: (this.TimeBid === undefined)? null : this.TimeBid,
		HighestBid: (this.HighestBid === undefined)? null : this.HighestBid.toJSON(),
		ConvertedPrice: (this.ConvertedPrice === undefined)? null : this.ConvertedPrice.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		User: (this.User === undefined)? null : this.User.toJSON(),
		UserConsent: (this.UserConsent === undefined)? null : this.UserConsent,
		BidCount: (this.BidCount === undefined)? null : this.BidCount,
		Message: (this.Message === undefined)? null : this.Message,
		BestOfferID: (this.BestOfferID === undefined)? null : this.BestOfferID.toJSON(),
		MyMaxBid: (this.MyMaxBid === undefined)? null : this.MyMaxBid.toJSON()
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
module.exports = OfferType;