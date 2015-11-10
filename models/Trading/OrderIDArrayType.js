function OrderIDArrayType(OrderID) {

	/**
	  Documentation
	   
                Type defining the <b>OrderIDArray</b> container, which consists of an array of order IDs. These order IDs specify the single and multiple line item orders to retrieve.
            
	 */

	/**
	 * Arrays
	 *	OrderID: OrderIDType
	 */
	this.OrderID = OrderID;
}
OrderIDArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		OrderID: (this.OrderID === undefined)? null : this.OrderID
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
module.exports = OrderIDArrayType;