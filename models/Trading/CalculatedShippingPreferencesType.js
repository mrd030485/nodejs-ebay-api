var AmountType = require('./AmountType');

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
	this.CalculatedShippingAmountForEntireOrder = CalculatedShippingAmountForEntireOrder;
	this.CalculatedShippingChargeOption = CalculatedShippingChargeOption;
	this.CalculatedShippingRateOption = CalculatedShippingRateOption;
	this.InsuranceOption = InsuranceOption;
}
CalculatedShippingPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		CalculatedShippingAmountForEntireOrder: (this.CalculatedShippingAmountForEntireOrder === undefined)? null : this.CalculatedShippingAmountForEntireOrder.toJSON(),
		CalculatedShippingChargeOption: (this.CalculatedShippingChargeOption === undefined)? null : this.CalculatedShippingChargeOption,
		CalculatedShippingRateOption: (this.CalculatedShippingRateOption === undefined)? null : this.CalculatedShippingRateOption,
		InsuranceOption: (this.InsuranceOption === undefined)? null : this.InsuranceOption
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