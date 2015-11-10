var AmountType = require('./AmountType');

function SellingSummaryType(ActiveAuctionCount, AuctionSellingCount, AuctionBidCount, TotalAuctionSellingValue, TotalSoldCount, TotalSoldValue, SoldDurationInDays) {

	/**
	  Documentation
	   
                Contains summary information about the items the seller is selling.
            
	 */

	/**
	 * Arrays
	 */
	var _TotalAuctionSellingValue;
	var _TotalSoldValue;
	Object.defineProperty(this, 'TotalAuctionSellingValue', {
		 get: function(){
			 return _TotalAuctionSellingValue;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalAuctionSellingValue = value; 
				}else{
					console.log('TotalAuctionSellingValue expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TotalSoldValue', {
		 get: function(){
			 return _TotalSoldValue;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalSoldValue = value; 
				}else{
					console.log('TotalSoldValue expects type AmountType');
				}
			}
		}
	});
	this.ActiveAuctionCount = ActiveAuctionCount;
	this.AuctionSellingCount = AuctionSellingCount;
	this.AuctionBidCount = AuctionBidCount;
	this.TotalAuctionSellingValue = TotalAuctionSellingValue;
	this.TotalSoldCount = TotalSoldCount;
	this.TotalSoldValue = TotalSoldValue;
	this.SoldDurationInDays = SoldDurationInDays;
}
SellingSummaryType.prototype.toJSON = function(with_null) {
	var json = { 
		ActiveAuctionCount: (this.ActiveAuctionCount === undefined)? null : this.ActiveAuctionCount,
		AuctionSellingCount: (this.AuctionSellingCount === undefined)? null : this.AuctionSellingCount,
		AuctionBidCount: (this.AuctionBidCount === undefined)? null : this.AuctionBidCount,
		TotalAuctionSellingValue: (this.TotalAuctionSellingValue === undefined)? null : this.TotalAuctionSellingValue.toJSON(),
		TotalSoldCount: (this.TotalSoldCount === undefined)? null : this.TotalSoldCount,
		TotalSoldValue: (this.TotalSoldValue === undefined)? null : this.TotalSoldValue.toJSON(),
		SoldDurationInDays: (this.SoldDurationInDays === undefined)? null : this.SoldDurationInDays
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
module.exports = SellingSummaryType;