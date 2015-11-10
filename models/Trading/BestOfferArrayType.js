function BestOfferArrayType(BestOffer) {

	/**
	  Documentation
	   
                An array of one or more Best Offers. This type is used in the responses of the <b>GetBestOffers</b> and <b>RespondToBestOffer</b> calls.
            
	 */

	/**
	 * Arrays
	 *	BestOffer: BestOfferType
	 */
	this.BestOffer = BestOffer;
}
BestOfferArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		BestOffer: (this.BestOffer === undefined)? null : this.BestOffer
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
module.exports = BestOfferArrayType;