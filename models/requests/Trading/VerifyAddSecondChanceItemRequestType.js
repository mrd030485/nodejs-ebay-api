var UserIDType = require('../../Trading/UserIDType'),
	AmountType = require('../../Trading/AmountType'),
	ItemIDType = require('../../Trading/ItemIDType');

function VerifyAddSecondChanceItemRequestType(RecipientBidderUserID, BuyItNowPrice, Duration, ItemID, SellerMessage) {

	/**
	  Documentation
	   Simulates the creation of a new Second Chance Offer listing of an item without actually creating a listing.
	 */

	/**
	 * Arrays
	 */
	var _RecipientBidderUserID;
	var _BuyItNowPrice;
	var _ItemID;
	Object.defineProperty(this, 'RecipientBidderUserID', {
		 get: function(){
			 return _RecipientBidderUserID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_RecipientBidderUserID = value; 
				}else{
					console.log('RecipientBidderUserID expects type UserIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BuyItNowPrice', {
		 get: function(){
			 return _BuyItNowPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_BuyItNowPrice = value; 
				}else{
					console.log('BuyItNowPrice expects type AmountType');
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
	this.RecipientBidderUserID = RecipientBidderUserID;
	this.BuyItNowPrice = BuyItNowPrice;
	this.Duration = Duration;
	this.ItemID = ItemID;
	this.SellerMessage = SellerMessage;
}
VerifyAddSecondChanceItemRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		RecipientBidderUserID: (this.RecipientBidderUserID === undefined)? null : this.RecipientBidderUserID.toJSON(),
		BuyItNowPrice: (this.BuyItNowPrice === undefined)? null : this.BuyItNowPrice.toJSON(),
		Duration: (this.Duration === undefined)? null : this.Duration,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		SellerMessage: (this.SellerMessage === undefined)? null : this.SellerMessage
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
module.exports = VerifyAddSecondChanceItemRequestType;