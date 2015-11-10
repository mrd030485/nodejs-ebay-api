function ItemRatingDetailArrayType(ItemRatingDetails) {

	/**
	  Documentation
	   
                Container for a set of detailed seller ratings about an order line item. If a seller has detailed ratings, they are displayed in the Feedback Profile of the seller.
            
	 */

	/**
	 * Arrays
	 *	ItemRatingDetails: ItemRatingDetailsType
	 */
	this.ItemRatingDetails = ItemRatingDetails;
}
ItemRatingDetailArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemRatingDetails: (this.ItemRatingDetails === undefined)? null : this.ItemRatingDetails
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
module.exports = ItemRatingDetailArrayType;