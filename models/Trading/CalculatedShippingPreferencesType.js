var AmountType = require('./AmountType'),
	CalculatedShippingChargeOptionCodeType = require('./CalculatedShippingChargeOptionCodeType'),
	CalculatedShippingRateOptionCodeType = require('./CalculatedShippingRateOptionCodeType'),
	InsuranceOptionCodeType = require('./InsuranceOptionCodeType');

function CalculatedShippingPreferencesType(CalculatedShippingAmountForEntireOrder, CalculatedShippingChargeOption, CalculatedShippingRateOption, InsuranceOption) {

	/**
	  Documentation
	   
                This type is deprecated since <b>CalculatedShippingPreferences</b> are no longer maintained through the <b>CombinedPaymentPreferences</b> container in the <b>GetUserPreferences</b> and <b>SetUserPreferences</b>
                calls.
            
	 */

	/**
	 * Arrays
	 */
	var _CalculatedShippingAmountForEntireOrder;
	var _CalculatedShippingChargeOption;
	var _CalculatedShippingRateOption;
	var _InsuranceOption;
	Object.defineProperty(this, 'CalculatedShippingAmountForEntireOrder', {
		 get: function(){
			 return _CalculatedShippingAmountForEntireOrder;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_CalculatedShippingAmountForEntireOrder = value; 
				}else{
					console.log('CalculatedShippingAmountForEntireOrder expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CalculatedShippingChargeOption', {
		 get: function(){
			 return _CalculatedShippingChargeOption;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CalculatedShippingChargeOptionCodeType){ 
					_CalculatedShippingChargeOption = value; 
				}else{
					console.log('CalculatedShippingChargeOption expects type CalculatedShippingChargeOptionCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CalculatedShippingRateOption', {
		 get: function(){
			 return _CalculatedShippingRateOption;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CalculatedShippingRateOptionCodeType){ 
					_CalculatedShippingRateOption = value; 
				}else{
					console.log('CalculatedShippingRateOption expects type CalculatedShippingRateOptionCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InsuranceOption', {
		 get: function(){
			 return _InsuranceOption;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof InsuranceOptionCodeType){ 
					_InsuranceOption = value; 
				}else{
					console.log('InsuranceOption expects type InsuranceOptionCodeType');
				}
			}
		}
	});
	this.CalculatedShippingAmountForEntireOrder = CalculatedShippingAmountForEntireOrder;
	this.CalculatedShippingChargeOption = CalculatedShippingChargeOption;
	this.CalculatedShippingRateOption = CalculatedShippingRateOption;
	this.InsuranceOption = InsuranceOption;
}
CalculatedShippingPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		CalculatedShippingAmountForEntireOrder: (this.CalculatedShippingAmountForEntireOrder === undefined)? null : this.CalculatedShippingAmountForEntireOrder.toJSON(),
		CalculatedShippingChargeOption: (this.CalculatedShippingChargeOption === undefined)? null : this.CalculatedShippingChargeOption.toJSON(),
		CalculatedShippingRateOption: (this.CalculatedShippingRateOption === undefined)? null : this.CalculatedShippingRateOption.toJSON(),
		InsuranceOption: (this.InsuranceOption === undefined)? null : this.InsuranceOption.toJSON()
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
module.exports = CalculatedShippingPreferencesType;