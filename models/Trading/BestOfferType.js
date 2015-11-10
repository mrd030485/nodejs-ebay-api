var BestOfferIDType = require('./BestOfferIDType'),
	UserType = require('./UserType'),
	AmountType = require('./AmountType');

function BestOfferType(BestOfferID, ExpirationTime, Buyer, Price, Status, Quantity, BuyerMessage, SellerMessage, BestOfferCodeType, CallStatus, NewBestOffer, ImmediatePayEligible) {

	/**
	  Documentation
	   Type defining the <b>BestOffer</b> container, which consists of information on one Best Offer or counter offer. This information includes the price of the offer, the expiration of the offer, and any messaging provided by the
                    prospective buyer or seller.
	 */

	/**
	 * Arrays
	 */
	var _BestOfferID;
	var _Buyer;
	var _Price;
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
	Object.defineProperty(this, 'Buyer', {
		 get: function(){
			 return _Buyer;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserType){ 
					_Buyer = value; 
				}else{
					console.log('Buyer expects type UserType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Price', {
		 get: function(){
			 return _Price;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_Price = value; 
				}else{
					console.log('Price expects type AmountType');
				}
			}
		}
	});
	this.BestOfferID = BestOfferID;
	this.ExpirationTime = ExpirationTime;
	this.Buyer = Buyer;
	this.Price = Price;
	this.Status = Status;
	this.Quantity = Quantity;
	this.BuyerMessage = BuyerMessage;
	this.SellerMessage = SellerMessage;
	this.BestOfferCodeType = BestOfferCodeType;
	this.CallStatus = CallStatus;
	this.NewBestOffer = NewBestOffer;
	this.ImmediatePayEligible = ImmediatePayEligible;
}
BestOfferType.prototype.toJSON = function(with_null) {
	var json = { 
		BestOfferID: (this.BestOfferID === undefined)? null : this.BestOfferID.toJSON(),
		ExpirationTime: (this.ExpirationTime === undefined)? null : this.ExpirationTime,
		Buyer: (this.Buyer === undefined)? null : this.Buyer.toJSON(),
		Price: (this.Price === undefined)? null : this.Price.toJSON(),
		Status: (this.Status === undefined)? null : this.Status,
		Quantity: (this.Quantity === undefined)? null : this.Quantity,
		BuyerMessage: (this.BuyerMessage === undefined)? null : this.BuyerMessage,
		SellerMessage: (this.SellerMessage === undefined)? null : this.SellerMessage,
		BestOfferCodeType: (this.BestOfferCodeType === undefined)? null : this.BestOfferCodeType,
		CallStatus: (this.CallStatus === undefined)? null : this.CallStatus,
		NewBestOffer: (this.NewBestOffer === undefined)? null : this.NewBestOffer,
		ImmediatePayEligible: (this.ImmediatePayEligible === undefined)? null : this.ImmediatePayEligible
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
module.exports = BestOfferType;