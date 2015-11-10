function OrderArrayType(Order) {

	/**
	  Documentation
	   An array of Orders.
	 */

	/**
	 * Arrays
	 *	Order: OrderType
	 */
	this.Order = Order;
}
OrderArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		Order: (this.Order === undefined)? null : this.Order
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
module.exports = OrderArrayType;