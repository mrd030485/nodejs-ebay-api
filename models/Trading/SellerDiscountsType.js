var AmountType = require('./AmountType');

function SellerDiscountsType(OriginalItemPrice, OriginalItemShippingCost, OriginalShippingService, SellerDiscount) {

	/**
	  Documentation
	   Type defining the <b>SellerDiscounts</b> container, which consists of one or more <b>SellerDiscount</b> nodes, as well as the original purchase price and shipping cost of the order line item.
	 */

	/**
	 * Arrays
	 *	SellerDiscount: SellerDiscountType
	 */
	var _OriginalItemPrice;
	var _OriginalItemShippingCost;
	Object.defineProperty(this, 'OriginalItemPrice', {
		 get: function(){
			 return _OriginalItemPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_OriginalItemPrice = value; 
				}else{
					console.log('OriginalItemPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'OriginalItemShippingCost', {
		 get: function(){
			 return _OriginalItemShippingCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_OriginalItemShippingCost = value; 
				}else{
					console.log('OriginalItemShippingCost expects type AmountType');
				}
			}
		}
	});
	this.OriginalItemPrice = OriginalItemPrice;
	this.OriginalItemShippingCost = OriginalItemShippingCost;
	this.OriginalShippingService = OriginalShippingService;
	this.SellerDiscount = SellerDiscount;
}
SellerDiscountsType.prototype.toJSON = function(with_null) {
	var json = { 
		OriginalItemPrice: (this.OriginalItemPrice === undefined)? null : this.OriginalItemPrice.toJSON(),
		OriginalItemShippingCost: (this.OriginalItemShippingCost === undefined)? null : this.OriginalItemShippingCost.toJSON(),
		OriginalShippingService: (this.OriginalShippingService === undefined)? null : this.OriginalShippingService,
		SellerDiscount: (this.SellerDiscount === undefined)? null : this.SellerDiscount
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
module.exports = SellerDiscountsType;