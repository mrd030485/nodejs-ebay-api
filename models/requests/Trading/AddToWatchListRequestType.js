function AddToWatchListRequestType(ItemID, VariationKey) {

	/**
	  Documentation
	   This call allows a user to add one or more order line items to the eBay user's Watch List. An auction item or a single-variation, fixed-price listing is identified with an <b>ItemID</b> value. To add a specific item variation
                    to the Watch List from within a multi-variation, fixed-price listing, the user will use the <b>VariationKey</b> container instead.
	 */

	/**
	 * Arrays
	 *	ItemID: ItemIDType
	 *	VariationKey: VariationKeyType
	 */
	this.ItemID = ItemID;
	this.VariationKey = VariationKey;
}
AddToWatchListRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID,
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
module.exports = AddToWatchListRequestType;