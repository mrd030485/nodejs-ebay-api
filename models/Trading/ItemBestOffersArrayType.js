function ItemBestOffersArrayType(ItemBestOffers) {

	/**
	  Documentation
	   
                A collection of details about the best offers received for a specific item. Empty if there are no best offers. Includes the buyer and seller messages only if the ReturnAll detail level is used.
            
	 */

	/**
	 * Arrays
	 *	ItemBestOffers: ItemBestOffersType
	 */
	this.ItemBestOffers = ItemBestOffers;
}
ItemBestOffersArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemBestOffers: (this.ItemBestOffers === undefined)? null : this.ItemBestOffers
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
module.exports = ItemBestOffersArrayType;