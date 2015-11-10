var AmountType = require('./AmountType'),
	UserType = require('./UserType'),
	PromotionalSaleDetailsType = require('./PromotionalSaleDetailsType'),
	SuggestedBidValueType = require('./SuggestedBidValueType');

function SellingStatusType(BidCount, BidIncrement, ConvertedCurrentPrice, CurrentPrice, HighBidder, LeadCount, MinimumToBid, QuantitySold, ReserveMet, SecondChanceEligible, BidderCount, ListingStatus, FinalValueFee, PromotionalSaleDetails, AdminEnded, SoldAsBin, QuantitySoldByPickupInStore, SuggestedBidValues) {

	/**
	  Documentation
	   Contains various details about the current status of a listing. These values are computed by eBay and cannot be specified at listing time.
	 */

	/**
	 * Arrays
	 */
	var _BidIncrement;
	var _ConvertedCurrentPrice;
	var _CurrentPrice;
	var _HighBidder;
	var _MinimumToBid;
	var _FinalValueFee;
	var _PromotionalSaleDetails;
	var _SuggestedBidValues;
	Object.defineProperty(this, 'BidIncrement', {
		 get: function(){
			 return _BidIncrement;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_BidIncrement = value; 
				}else{
					console.log('BidIncrement expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ConvertedCurrentPrice', {
		 get: function(){
			 return _ConvertedCurrentPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ConvertedCurrentPrice = value; 
				}else{
					console.log('ConvertedCurrentPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CurrentPrice', {
		 get: function(){
			 return _CurrentPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_CurrentPrice = value; 
				}else{
					console.log('CurrentPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'HighBidder', {
		 get: function(){
			 return _HighBidder;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserType){ 
					_HighBidder = value; 
				}else{
					console.log('HighBidder expects type UserType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MinimumToBid', {
		 get: function(){
			 return _MinimumToBid;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_MinimumToBid = value; 
				}else{
					console.log('MinimumToBid expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FinalValueFee', {
		 get: function(){
			 return _FinalValueFee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_FinalValueFee = value; 
				}else{
					console.log('FinalValueFee expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PromotionalSaleDetails', {
		 get: function(){
			 return _PromotionalSaleDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PromotionalSaleDetailsType){ 
					_PromotionalSaleDetails = value; 
				}else{
					console.log('PromotionalSaleDetails expects type PromotionalSaleDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SuggestedBidValues', {
		 get: function(){
			 return _SuggestedBidValues;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SuggestedBidValueType){ 
					_SuggestedBidValues = value; 
				}else{
					console.log('SuggestedBidValues expects type SuggestedBidValueType');
				}
			}
		}
	});
	this.BidCount = BidCount;
	this.BidIncrement = BidIncrement;
	this.ConvertedCurrentPrice = ConvertedCurrentPrice;
	this.CurrentPrice = CurrentPrice;
	this.HighBidder = HighBidder;
	this.LeadCount = LeadCount;
	this.MinimumToBid = MinimumToBid;
	this.QuantitySold = QuantitySold;
	this.ReserveMet = ReserveMet;
	this.SecondChanceEligible = SecondChanceEligible;
	this.BidderCount = BidderCount;
	this.ListingStatus = ListingStatus;
	this.FinalValueFee = FinalValueFee;
	this.PromotionalSaleDetails = PromotionalSaleDetails;
	this.AdminEnded = AdminEnded;
	this.SoldAsBin = SoldAsBin;
	this.QuantitySoldByPickupInStore = QuantitySoldByPickupInStore;
	this.SuggestedBidValues = SuggestedBidValues;
}
SellingStatusType.prototype.toJSON = function(with_null) {
	var json = { 
		BidCount: (this.BidCount === undefined)? null : this.BidCount,
		BidIncrement: (this.BidIncrement === undefined)? null : this.BidIncrement.toJSON(),
		ConvertedCurrentPrice: (this.ConvertedCurrentPrice === undefined)? null : this.ConvertedCurrentPrice.toJSON(),
		CurrentPrice: (this.CurrentPrice === undefined)? null : this.CurrentPrice.toJSON(),
		HighBidder: (this.HighBidder === undefined)? null : this.HighBidder.toJSON(),
		LeadCount: (this.LeadCount === undefined)? null : this.LeadCount,
		MinimumToBid: (this.MinimumToBid === undefined)? null : this.MinimumToBid.toJSON(),
		QuantitySold: (this.QuantitySold === undefined)? null : this.QuantitySold,
		ReserveMet: (this.ReserveMet === undefined)? null : this.ReserveMet,
		SecondChanceEligible: (this.SecondChanceEligible === undefined)? null : this.SecondChanceEligible,
		BidderCount: (this.BidderCount === undefined)? null : this.BidderCount,
		ListingStatus: (this.ListingStatus === undefined)? null : this.ListingStatus,
		FinalValueFee: (this.FinalValueFee === undefined)? null : this.FinalValueFee.toJSON(),
		PromotionalSaleDetails: (this.PromotionalSaleDetails === undefined)? null : this.PromotionalSaleDetails.toJSON(),
		AdminEnded: (this.AdminEnded === undefined)? null : this.AdminEnded,
		SoldAsBin: (this.SoldAsBin === undefined)? null : this.SoldAsBin,
		QuantitySoldByPickupInStore: (this.QuantitySoldByPickupInStore === undefined)? null : this.QuantitySoldByPickupInStore,
		SuggestedBidValues: (this.SuggestedBidValues === undefined)? null : this.SuggestedBidValues.toJSON()
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
module.exports = SellingStatusType;