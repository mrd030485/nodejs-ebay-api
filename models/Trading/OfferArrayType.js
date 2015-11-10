function OfferArrayType(Offer) {

	/**
	  Documentation
	   Container for a list of offers. May contain zero, one, or multiple OfferType objects, each of which represents one offer extended by a user on a listing.
	 */

	/**
	 * Arrays
	 *	Offer: OfferType
	 */
	this.Offer = Offer;
}
OfferArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		Offer: (this.Offer === undefined)? null : this.Offer
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
module.exports = OfferArrayType;