var AmountType = require('./AmountType'),
	FlatRateInsuranceRangeCostType = require('./FlatRateInsuranceRangeCostType'),
	FlatShippingRateOptionCodeType = require('./FlatShippingRateOptionCodeType'),
	InsuranceOptionCodeType = require('./InsuranceOptionCodeType');

function FlatShippingPreferencesType(AmountPerAdditionalItem, DeductionAmountPerAdditionalItem, FlatRateInsuranceRangeCost, FlatShippingRateOption, InsuranceOption) {

	/**
	  Documentation
	   
                This type is deprecated; use <b>SetShippingDiscountProfiles</b> to set Flat Shipping preferences.
                
            
	 */

	/**
	 * Arrays
	 */
	var _AmountPerAdditionalItem;
	var _DeductionAmountPerAdditionalItem;
	var _FlatRateInsuranceRangeCost;
	var _FlatShippingRateOption;
	var _InsuranceOption;
	Object.defineProperty(this, 'AmountPerAdditionalItem', {
		 get: function(){
			 return _AmountPerAdditionalItem;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_AmountPerAdditionalItem = value; 
				}else{
					console.log('AmountPerAdditionalItem expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DeductionAmountPerAdditionalItem', {
		 get: function(){
			 return _DeductionAmountPerAdditionalItem;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_DeductionAmountPerAdditionalItem = value; 
				}else{
					console.log('DeductionAmountPerAdditionalItem expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FlatRateInsuranceRangeCost', {
		 get: function(){
			 return _FlatRateInsuranceRangeCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FlatRateInsuranceRangeCostType){ 
					_FlatRateInsuranceRangeCost = value; 
				}else{
					console.log('FlatRateInsuranceRangeCost expects type FlatRateInsuranceRangeCostType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FlatShippingRateOption', {
		 get: function(){
			 return _FlatShippingRateOption;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FlatShippingRateOptionCodeType){ 
					_FlatShippingRateOption = value; 
				}else{
					console.log('FlatShippingRateOption expects type FlatShippingRateOptionCodeType');
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
	this.AmountPerAdditionalItem = AmountPerAdditionalItem;
	this.DeductionAmountPerAdditionalItem = DeductionAmountPerAdditionalItem;
	this.FlatRateInsuranceRangeCost = FlatRateInsuranceRangeCost;
	this.FlatShippingRateOption = FlatShippingRateOption;
	this.InsuranceOption = InsuranceOption;
}
FlatShippingPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		AmountPerAdditionalItem: (this.AmountPerAdditionalItem === undefined)? null : this.AmountPerAdditionalItem.toJSON(),
		DeductionAmountPerAdditionalItem: (this.DeductionAmountPerAdditionalItem === undefined)? null : this.DeductionAmountPerAdditionalItem.toJSON(),
		FlatRateInsuranceRangeCost: (this.FlatRateInsuranceRangeCost === undefined)? null : this.FlatRateInsuranceRangeCost.toJSON(),
		FlatShippingRateOption: (this.FlatShippingRateOption === undefined)? null : this.FlatShippingRateOption.toJSON(),
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
module.exports = FlatShippingPreferencesType;