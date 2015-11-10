function ItemTransactionIDArrayType(ItemTransactionID) {

	/**
	  Documentation
	   
                Container of ItemTransactionIDs.
            
	 */

	/**
	 * Arrays
	 *	ItemTransactionID: ItemTransactionIDType
	 */
	this.ItemTransactionID = ItemTransactionID;
}
ItemTransactionIDArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemTransactionID: (this.ItemTransactionID === undefined)? null : this.ItemTransactionID
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
module.exports = ItemTransactionIDArrayType;