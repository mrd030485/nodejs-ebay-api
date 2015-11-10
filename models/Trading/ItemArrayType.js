function ItemArrayType(Item) {

	/**
	  Documentation
	   Container for a list of items. Can contain zero, one, or multiple ItemType objects, each of which conveys the data for one item listing.
	 */

	/**
	 * Arrays
	 *	Item: ItemType
	 */
	this.Item = Item;
}
ItemArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		Item: (this.Item === undefined)? null : this.Item
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
module.exports = ItemArrayType;