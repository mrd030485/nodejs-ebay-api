var FlatShippingDiscountType = require('../../Trading/FlatShippingDiscountType'),
	CalculatedShippingDiscountType = require('../../Trading/CalculatedShippingDiscountType'),
	CalculatedHandlingDiscountType = require('../../Trading/CalculatedHandlingDiscountType'),
	PromotionalShippingDiscountDetailsType = require('../../Trading/PromotionalShippingDiscountDetailsType'),
	ShippingInsuranceType = require('../../Trading/ShippingInsuranceType');

function SetShippingDiscountProfilesRequestType(CurrencyID, CombinedDuration, ModifyActionCode, FlatShippingDiscount, CalculatedShippingDiscount, CalculatedHandlingDiscount, PromotionalShippingDiscountDetails, ShippingInsurance, InternationalShippingInsurance) {

	/**
	  Documentation
	   Enables a seller to define shipping cost discount profiles for things such as combined payments for shipping and handling costs.
	 */

	/**
	 * Arrays
	 */
	var _FlatShippingDiscount;
	var _CalculatedShippingDiscount;
	var _CalculatedHandlingDiscount;
	var _PromotionalShippingDiscountDetails;
	var _ShippingInsurance;
	var _InternationalShippingInsurance;
	Object.defineProperty(this, 'FlatShippingDiscount', {
		 get: function(){
			 return _FlatShippingDiscount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FlatShippingDiscountType){ 
					_FlatShippingDiscount = value; 
				}else{
					console.log('FlatShippingDiscount expects type FlatShippingDiscountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CalculatedShippingDiscount', {
		 get: function(){
			 return _CalculatedShippingDiscount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CalculatedShippingDiscountType){ 
					_CalculatedShippingDiscount = value; 
				}else{
					console.log('CalculatedShippingDiscount expects type CalculatedShippingDiscountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CalculatedHandlingDiscount', {
		 get: function(){
			 return _CalculatedHandlingDiscount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CalculatedHandlingDiscountType){ 
					_CalculatedHandlingDiscount = value; 
				}else{
					console.log('CalculatedHandlingDiscount expects type CalculatedHandlingDiscountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PromotionalShippingDiscountDetails', {
		 get: function(){
			 return _PromotionalShippingDiscountDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PromotionalShippingDiscountDetailsType){ 
					_PromotionalShippingDiscountDetails = value; 
				}else{
					console.log('PromotionalShippingDiscountDetails expects type PromotionalShippingDiscountDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingInsurance', {
		 get: function(){
			 return _ShippingInsurance;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingInsuranceType){ 
					_ShippingInsurance = value; 
				}else{
					console.log('ShippingInsurance expects type ShippingInsuranceType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InternationalShippingInsurance', {
		 get: function(){
			 return _InternationalShippingInsurance;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingInsuranceType){ 
					_InternationalShippingInsurance = value; 
				}else{
					console.log('InternationalShippingInsurance expects type ShippingInsuranceType');
				}
			}
		}
	});
	this.CurrencyID = CurrencyID;
	this.CombinedDuration = CombinedDuration;
	this.ModifyActionCode = ModifyActionCode;
	this.FlatShippingDiscount = FlatShippingDiscount;
	this.CalculatedShippingDiscount = CalculatedShippingDiscount;
	this.CalculatedHandlingDiscount = CalculatedHandlingDiscount;
	this.PromotionalShippingDiscountDetails = PromotionalShippingDiscountDetails;
	this.ShippingInsurance = ShippingInsurance;
	this.InternationalShippingInsurance = InternationalShippingInsurance;
}
SetShippingDiscountProfilesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		CurrencyID: (this.CurrencyID === undefined)? null : this.CurrencyID,
		CombinedDuration: (this.CombinedDuration === undefined)? null : this.CombinedDuration,
		ModifyActionCode: (this.ModifyActionCode === undefined)? null : this.ModifyActionCode,
		FlatShippingDiscount: (this.FlatShippingDiscount === undefined)? null : this.FlatShippingDiscount.toJSON(),
		CalculatedShippingDiscount: (this.CalculatedShippingDiscount === undefined)? null : this.CalculatedShippingDiscount.toJSON(),
		CalculatedHandlingDiscount: (this.CalculatedHandlingDiscount === undefined)? null : this.CalculatedHandlingDiscount.toJSON(),
		PromotionalShippingDiscountDetails: (this.PromotionalShippingDiscountDetails === undefined)? null : this.PromotionalShippingDiscountDetails.toJSON(),
		ShippingInsurance: (this.ShippingInsurance === undefined)? null : this.ShippingInsurance.toJSON(),
		InternationalShippingInsurance: (this.InternationalShippingInsurance === undefined)? null : this.InternationalShippingInsurance.toJSON()
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
module.exports = SetShippingDiscountProfilesRequestType;