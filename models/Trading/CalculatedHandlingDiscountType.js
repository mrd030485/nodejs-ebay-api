var HandlingNameCodeType = require('./HandlingNameCodeType'),
	AmountType = require('./AmountType');

function CalculatedHandlingDiscountType(DiscountName, OrderHandlingAmount, EachAdditionalAmount, EachAdditionalOffAmount, EachAdditionalPercentOff) {

	/**
	  Documentation
	   
                Type defining the <b>CalculatedHandlingDiscount</b> container that is used in the <b>SetShippingDiscountProfiles</b> call to specify the rules used to determine package handling costs for an order in which calculated shipping is
                used.
            
	 */

	/**
	 * Arrays
	 */
	var _DiscountName;
	var _OrderHandlingAmount;
	var _EachAdditionalAmount;
	var _EachAdditionalOffAmount;
	Object.defineProperty(this, 'DiscountName', {
		 get: function(){
			 return _DiscountName;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof HandlingNameCodeType){ 
					_DiscountName = value; 
				}else{
					console.log('DiscountName expects type HandlingNameCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'OrderHandlingAmount', {
		 get: function(){
			 return _OrderHandlingAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_OrderHandlingAmount = value; 
				}else{
					console.log('OrderHandlingAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'EachAdditionalAmount', {
		 get: function(){
			 return _EachAdditionalAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_EachAdditionalAmount = value; 
				}else{
					console.log('EachAdditionalAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'EachAdditionalOffAmount', {
		 get: function(){
			 return _EachAdditionalOffAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_EachAdditionalOffAmount = value; 
				}else{
					console.log('EachAdditionalOffAmount expects type AmountType');
				}
			}
		}
	});
	this.DiscountName = DiscountName;
	this.OrderHandlingAmount = OrderHandlingAmount;
	this.EachAdditionalAmount = EachAdditionalAmount;
	this.EachAdditionalOffAmount = EachAdditionalOffAmount;
	this.EachAdditionalPercentOff = EachAdditionalPercentOff;
}
CalculatedHandlingDiscountType.prototype.toJSON = function(with_null) {
	var json = { 
		DiscountName: (this.DiscountName === undefined)? null : this.DiscountName.toJSON(),
		OrderHandlingAmount: (this.OrderHandlingAmount === undefined)? null : this.OrderHandlingAmount.toJSON(),
		EachAdditionalAmount: (this.EachAdditionalAmount === undefined)? null : this.EachAdditionalAmount.toJSON(),
		EachAdditionalOffAmount: (this.EachAdditionalOffAmount === undefined)? null : this.EachAdditionalOffAmount.toJSON(),
		EachAdditionalPercentOff: (this.EachAdditionalPercentOff === undefined)? null : this.EachAdditionalPercentOff
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
module.exports = CalculatedHandlingDiscountType;