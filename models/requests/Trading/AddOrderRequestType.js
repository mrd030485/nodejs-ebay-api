var OrderType = require('../../Trading/OrderType');

function AddOrderRequestType(Order) {

	/**
	  Documentation
	   The <b>AddOrder</b> call can be used by a seller to combine two or more unpaid, single line item orders from the same buyer into one 'Combined Invoice' order with multiple line items. Once multiple line items are combined into
                    one order, the buyer can make one single payment for each line item in the order. If possible and agreed to, the seller can then ship multiple line items in the same shipping package, saving on shipping costs, and possibly passing
                    that savings down to the buyer through Combined Shipping Discount rules set up in My eBay.
	 */

	/**
	 * Arrays
	 */
	var _Order;
	Object.defineProperty(this, 'Order', {
		 get: function(){
			 return _Order;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof OrderType){ 
					_Order = value; 
				}else{
					console.log('Order expects type OrderType');
				}
			}
		}
	});
	this.Order = Order;
}
AddOrderRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Order: (this.Order === undefined)? null : this.Order.toJSON()
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
module.exports = AddOrderRequestType;