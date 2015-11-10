var ItemIDType = require('../../Trading/ItemIDType'),
	AmountType = require('../../Trading/AmountType');

function RespondToBestOfferRequestType(ItemID, BestOfferID, Action, SellerResponse, CounterOfferPrice, CounterOfferQuantity) {

	/**
	  Documentation
	   Enables the seller of a Best Offer item to accept, decline, or counter offers made by bidders. Best offers can be declined in bulk, using the same message from the seller to the bidders of all rejected offers.
	 */

	/**
	 * Arrays
	 *	BestOfferID: BestOfferIDType
	 */
	var _ItemID;
	var _CounterOfferPrice;
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
	Object.defineProperty(this, 'CounterOfferPrice', {
		 get: function(){
			 return _CounterOfferPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_CounterOfferPrice = value; 
				}else{
					console.log('CounterOfferPrice expects type AmountType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.BestOfferID = BestOfferID;
	this.Action = Action;
	this.SellerResponse = SellerResponse;
	this.CounterOfferPrice = CounterOfferPrice;
	this.CounterOfferQuantity = CounterOfferQuantity;
}
RespondToBestOfferRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		BestOfferID: (this.BestOfferID === undefined)? null : this.BestOfferID,
		Action: (this.Action === undefined)? null : this.Action,
		SellerResponse: (this.SellerResponse === undefined)? null : this.SellerResponse,
		CounterOfferPrice: (this.CounterOfferPrice === undefined)? null : this.CounterOfferPrice.toJSON(),
		CounterOfferQuantity: (this.CounterOfferQuantity === undefined)? null : this.CounterOfferQuantity
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
module.exports = RespondToBestOfferRequestType;