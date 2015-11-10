function MyeBaySecondChanceOfferListType(TotalAvailable, SecondChanceOffer) {

	/**
	  Documentation
	   
                A list of possible My eBay Second Chance Offers.
            
	 */

	/**
	 * Arrays
	 *	SecondChanceOffer: ItemType
	 */
	this.TotalAvailable = TotalAvailable;
	this.SecondChanceOffer = SecondChanceOffer;
}
MyeBaySecondChanceOfferListType.prototype.toJSON = function(with_null) {
	var json = { 
		TotalAvailable: (this.TotalAvailable === undefined)? null : this.TotalAvailable,
		SecondChanceOffer: (this.SecondChanceOffer === undefined)? null : this.SecondChanceOffer
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
module.exports = MyeBaySecondChanceOfferListType;