function ItemIDArrayType(ItemID) {

	/**
	  Documentation
	   
                Type defining the <b>PromotionalSaleItemIDArray</b> container, which consists of an array of listings to which a Promotional Sale applies.
            
	 */

	/**
	 * Arrays
	 *	ItemID: ItemIDType
	 */
	this.ItemID = ItemID;
}
ItemIDArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID
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
module.exports = ItemIDArrayType;