function SuggestedBidValueType(BidValue) {

	/**
	  Documentation
	   
                Container for next bid suggestion values for auction items.
            
	 */

	/**
	 * Arrays
	 *	BidValue: AmountType
	 */
	this.BidValue = BidValue;
}
SuggestedBidValueType.prototype.toJSON = function(with_null) {
	var json = { 
		BidValue: (this.BidValue === undefined)? null : this.BidValue
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
module.exports = SuggestedBidValueType;