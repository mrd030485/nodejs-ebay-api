function ShipmentLineItemType(LineItem) {

	/**
	  Documentation
	   
                This type provides information about one or more order line items in a Global Shipping Program package.
            
	 */

	/**
	 * Arrays
	 *	LineItem: LineItemType
	 */
	this.LineItem = LineItem;
}
ShipmentLineItemType.prototype.toJSON = function(with_null) {
	var json = { 
		LineItem: (this.LineItem === undefined)? null : this.LineItem
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
module.exports = ShipmentLineItemType;