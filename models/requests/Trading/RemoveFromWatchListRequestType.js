function RemoveFromWatchListRequestType(ItemID, RemoveAllItems, VariationKey) {

	/**
	  Documentation
	   Enables a user to remove one or more items from their My eBay watch list.
	 */

	/**
	 * Arrays
	 *	ItemID: ItemIDType
	 *	VariationKey: VariationKeyType
	 */
	this.ItemID = ItemID;
	this.RemoveAllItems = RemoveAllItems;
	this.VariationKey = VariationKey;
}
RemoveFromWatchListRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID,
		RemoveAllItems: (this.RemoveAllItems === undefined)? null : this.RemoveAllItems,
		VariationKey: (this.VariationKey === undefined)? null : this.VariationKey
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
module.exports = RemoveFromWatchListRequestType;