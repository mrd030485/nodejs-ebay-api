var AmountType = require('./AmountType');

function PromotionalShippingDiscountDetailsType(DiscountName, ShippingCost, OrderAmount, ItemCount) {

	/**
	  Documentation
	   Details of a promotional shipping discount.
	 */

	/**
	 * Arrays
	 */
	var _ShippingCost;
	var _OrderAmount;
	Object.defineProperty(this, 'ShippingCost', {
		 get: function(){
			 return _ShippingCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ShippingCost = value; 
				}else{
					console.log('ShippingCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'OrderAmount', {
		 get: function(){
			 return _OrderAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_OrderAmount = value; 
				}else{
					console.log('OrderAmount expects type AmountType');
				}
			}
		}
	});
	this.DiscountName = DiscountName;
	this.ShippingCost = ShippingCost;
	this.OrderAmount = OrderAmount;
	this.ItemCount = ItemCount;
}
PromotionalShippingDiscountDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		DiscountName: (this.DiscountName === undefined)? null : this.DiscountName,
		ShippingCost: (this.ShippingCost === undefined)? null : this.ShippingCost.toJSON(),
		OrderAmount: (this.OrderAmount === undefined)? null : this.OrderAmount.toJSON(),
		ItemCount: (this.ItemCount === undefined)? null : this.ItemCount
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
module.exports = PromotionalShippingDiscountDetailsType;