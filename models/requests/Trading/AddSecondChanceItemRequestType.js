var UserIDType = require('../../Trading/UserIDType'),
	AmountType = require('../../Trading/AmountType'),
	ItemIDType = require('../../Trading/ItemIDType');

function AddSecondChanceItemRequestType(RecipientBidderUserID, BuyItNowPrice, Duration, ItemID, SellerMessage) {

	/**
	  Documentation
	   This call is used by the seller of an auction listing to provide a Second Chance Offer to one of that auction item's non-winning bidders. A Second Chance Offer is used by sellers whenever the seller was unable to complete the sale with
                    the winning bidder (bidder didn't pay), or if the auction listing ended without the Reserve Price being met, or if that seller has multiple identical items for sale and wants to give other bidders a chance to purchase the item.
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
AddSecondChanceItemRequestType.prototype.toJSON = function(with_null) {
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
module.exports = AddSecondChanceItemRequestType;