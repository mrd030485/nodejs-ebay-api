var AmountType = require('./AmountType');

function BiddingDetailsType(ConvertedMaxBid, MaxBid, QuantityBid, QuantityWon, Winning, BidAssistant) {

	/**
	  Documentation
	   
                Type defining the <b>BiddingDetails</b> container, which consists of information about the buyer's bidding history on a single auction item.
            
	 */

	/**
	 * Arrays
	 */
	var _ConvertedMaxBid;
	var _MaxBid;
	Object.defineProperty(this, 'ConvertedMaxBid', {
		 get: function(){
			 return _ConvertedMaxBid;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ConvertedMaxBid = value; 
				}else{
					console.log('ConvertedMaxBid expects type AmountType');
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
	this.ConvertedMaxBid = ConvertedMaxBid;
	this.MaxBid = MaxBid;
	this.QuantityBid = QuantityBid;
	this.QuantityWon = QuantityWon;
	this.Winning = Winning;
	this.BidAssistant = BidAssistant;
}
BiddingDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ConvertedMaxBid: (this.ConvertedMaxBid === undefined)? null : this.ConvertedMaxBid.toJSON(),
		MaxBid: (this.MaxBid === undefined)? null : this.MaxBid.toJSON(),
		QuantityBid: (this.QuantityBid === undefined)? null : this.QuantityBid,
		QuantityWon: (this.QuantityWon === undefined)? null : this.QuantityWon,
		Winning: (this.Winning === undefined)? null : this.Winning,
		BidAssistant: (this.BidAssistant === undefined)? null : this.BidAssistant
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
module.exports = BiddingDetailsType;