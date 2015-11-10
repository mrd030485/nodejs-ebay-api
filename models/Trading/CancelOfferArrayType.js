function CancelOfferArrayType(CancelOffer) {

	/**
	  Documentation
	   This type is not used by any Trading API call.
	 */

	/**
	 * Arrays
	 *	CancelOffer: CancelOfferType
	 */
	this.CancelOffer = CancelOffer;
}
CancelOfferArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		CancelOffer: (this.CancelOffer === undefined)? null : this.CancelOffer
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
module.exports = CancelOfferArrayType;