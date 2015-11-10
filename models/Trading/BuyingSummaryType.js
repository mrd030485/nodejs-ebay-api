var AmountType = require('./AmountType');

function BuyingSummaryType(BiddingCount, WinningCount, TotalWinningCost, WonCount, TotalWonCost, WonDurationInDays, BestOfferCount) {

	/**
	  Documentation
	   
                Type defining the <b>BuyingSummary</b> container returned in <b>GetMyeBayBuying</b>. The <b>BuyingSummary</b> container consists of data that summarizes the buyer's recent buying activity, including the number of items
                the user has bid on, the number of items the user is winning, and the number of items the user has won. The <b>BuyingSummary</b> container is only returned if the <b>BuyingSummary.Include</b> field is included in
                the <b>GetMyeBayBuying</b> request and set to <code>true</code>.
            
	 */

	/**
	 * Arrays
	 */
	var _TotalWinningCost;
	var _TotalWonCost;
	Object.defineProperty(this, 'TotalWinningCost', {
		 get: function(){
			 return _TotalWinningCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalWinningCost = value; 
				}else{
					console.log('TotalWinningCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TotalWonCost', {
		 get: function(){
			 return _TotalWonCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalWonCost = value; 
				}else{
					console.log('TotalWonCost expects type AmountType');
				}
			}
		}
	});
	this.BiddingCount = BiddingCount;
	this.WinningCount = WinningCount;
	this.TotalWinningCost = TotalWinningCost;
	this.WonCount = WonCount;
	this.TotalWonCost = TotalWonCost;
	this.WonDurationInDays = WonDurationInDays;
	this.BestOfferCount = BestOfferCount;
}
BuyingSummaryType.prototype.toJSON = function(with_null) {
	var json = { 
		BiddingCount: (this.BiddingCount === undefined)? null : this.BiddingCount,
		WinningCount: (this.WinningCount === undefined)? null : this.WinningCount,
		TotalWinningCost: (this.TotalWinningCost === undefined)? null : this.TotalWinningCost.toJSON(),
		WonCount: (this.WonCount === undefined)? null : this.WonCount,
		TotalWonCost: (this.TotalWonCost === undefined)? null : this.TotalWonCost.toJSON(),
		WonDurationInDays: (this.WonDurationInDays === undefined)? null : this.WonDurationInDays,
		BestOfferCount: (this.BestOfferCount === undefined)? null : this.BestOfferCount
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
module.exports = BuyingSummaryType;