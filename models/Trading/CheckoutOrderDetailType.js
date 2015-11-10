var AmountType = require('./AmountType');

function CheckoutOrderDetailType(TotalCartMerchandiseCost, TotalCartShippingCost, TotalTaxAmount, TotalAmount) {

	/**
	  Documentation
	   Details of the order for a checked out cart.
	 */

	/**
	 * Arrays
	 */
	var _TotalCartMerchandiseCost;
	var _TotalCartShippingCost;
	var _TotalTaxAmount;
	var _TotalAmount;
	Object.defineProperty(this, 'TotalCartMerchandiseCost', {
		 get: function(){
			 return _TotalCartMerchandiseCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalCartMerchandiseCost = value; 
				}else{
					console.log('TotalCartMerchandiseCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TotalCartShippingCost', {
		 get: function(){
			 return _TotalCartShippingCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalCartShippingCost = value; 
				}else{
					console.log('TotalCartShippingCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TotalTaxAmount', {
		 get: function(){
			 return _TotalTaxAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalTaxAmount = value; 
				}else{
					console.log('TotalTaxAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TotalAmount', {
		 get: function(){
			 return _TotalAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalAmount = value; 
				}else{
					console.log('TotalAmount expects type AmountType');
				}
			}
		}
	});
	this.TotalCartMerchandiseCost = TotalCartMerchandiseCost;
	this.TotalCartShippingCost = TotalCartShippingCost;
	this.TotalTaxAmount = TotalTaxAmount;
	this.TotalAmount = TotalAmount;
}
CheckoutOrderDetailType.prototype.toJSON = function(with_null) {
	var json = { 
		TotalCartMerchandiseCost: (this.TotalCartMerchandiseCost === undefined)? null : this.TotalCartMerchandiseCost.toJSON(),
		TotalCartShippingCost: (this.TotalCartShippingCost === undefined)? null : this.TotalCartShippingCost.toJSON(),
		TotalTaxAmount: (this.TotalTaxAmount === undefined)? null : this.TotalTaxAmount.toJSON(),
		TotalAmount: (this.TotalAmount === undefined)? null : this.TotalAmount.toJSON()
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
module.exports = CheckoutOrderDetailType;