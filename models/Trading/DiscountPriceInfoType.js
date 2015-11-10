var AmountType = require('./AmountType'),
	MinimumAdvertisedPriceExposureCodeType = require('./MinimumAdvertisedPriceExposureCodeType'),
	PricingTreatmentCodeType = require('./PricingTreatmentCodeType');

function DiscountPriceInfoType(OriginalRetailPrice, MinimumAdvertisedPrice, MinimumAdvertisedPriceExposure, PricingTreatment, SoldOneBay, SoldOffeBay, MadeForOutletComparisonPrice) {

	/**
	  Documentation
	   
                Using this container, a seller can supply original retail price and discount price for an item to clarify the discount treatment (also known as strike-through pricing). This only applies to fixed-price listings and auction listings with the Buy It Now
                option. This feature is available for large enterprise sellers via white list. A seller can provide discount treatment regardless of whether the listing includes a SKU.
            
	 */

	/**
	 * Arrays
	 */
	var _OriginalRetailPrice;
	var _MinimumAdvertisedPrice;
	var _MinimumAdvertisedPriceExposure;
	var _PricingTreatment;
	var _MadeForOutletComparisonPrice;
	Object.defineProperty(this, 'OriginalRetailPrice', {
		 get: function(){
			 return _OriginalRetailPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_OriginalRetailPrice = value; 
				}else{
					console.log('OriginalRetailPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MinimumAdvertisedPrice', {
		 get: function(){
			 return _MinimumAdvertisedPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_MinimumAdvertisedPrice = value; 
				}else{
					console.log('MinimumAdvertisedPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MinimumAdvertisedPriceExposure', {
		 get: function(){
			 return _MinimumAdvertisedPriceExposure;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MinimumAdvertisedPriceExposureCodeType){ 
					_MinimumAdvertisedPriceExposure = value; 
				}else{
					console.log('MinimumAdvertisedPriceExposure expects type MinimumAdvertisedPriceExposureCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PricingTreatment', {
		 get: function(){
			 return _PricingTreatment;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PricingTreatmentCodeType){ 
					_PricingTreatment = value; 
				}else{
					console.log('PricingTreatment expects type PricingTreatmentCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MadeForOutletComparisonPrice', {
		 get: function(){
			 return _MadeForOutletComparisonPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_MadeForOutletComparisonPrice = value; 
				}else{
					console.log('MadeForOutletComparisonPrice expects type AmountType');
				}
			}
		}
	});
	this.OriginalRetailPrice = OriginalRetailPrice;
	this.MinimumAdvertisedPrice = MinimumAdvertisedPrice;
	this.MinimumAdvertisedPriceExposure = MinimumAdvertisedPriceExposure;
	this.PricingTreatment = PricingTreatment;
	this.SoldOneBay = SoldOneBay;
	this.SoldOffeBay = SoldOffeBay;
	this.MadeForOutletComparisonPrice = MadeForOutletComparisonPrice;
}
DiscountPriceInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		OriginalRetailPrice: (this.OriginalRetailPrice === undefined)? null : this.OriginalRetailPrice.toJSON(),
		MinimumAdvertisedPrice: (this.MinimumAdvertisedPrice === undefined)? null : this.MinimumAdvertisedPrice.toJSON(),
		MinimumAdvertisedPriceExposure: (this.MinimumAdvertisedPriceExposure === undefined)? null : this.MinimumAdvertisedPriceExposure.toJSON(),
		PricingTreatment: (this.PricingTreatment === undefined)? null : this.PricingTreatment.toJSON(),
		SoldOneBay: (this.SoldOneBay === undefined)? null : this.SoldOneBay,
		SoldOffeBay: (this.SoldOffeBay === undefined)? null : this.SoldOffeBay,
		MadeForOutletComparisonPrice: (this.MadeForOutletComparisonPrice === undefined)? null : this.MadeForOutletComparisonPrice.toJSON()
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
module.exports = DiscountPriceInfoType;