var InsuranceOptionCodeType = require('./InsuranceOptionCodeType');

function ShippingInsuranceType(InsuranceOption, FlatRateInsuranceRangeCost) {

	/**
	  Documentation
	   
                Details about insurance for <a href="http://developer.ebay.com/DevZone/guides/ebayfeatures/Development/Listing-AnItem.html#CombinedInvoice">Combined Invoice</a> orders.
            
	 */

	/**
	 * Arrays
	 *	FlatRateInsuranceRangeCost: FlatRateInsuranceRangeCostType
	 */
	var _InsuranceOption;
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
	this.InsuranceOption = InsuranceOption;
	this.FlatRateInsuranceRangeCost = FlatRateInsuranceRangeCost;
}
ShippingInsuranceType.prototype.toJSON = function(with_null) {
	var json = { 
		InsuranceOption: (this.InsuranceOption === undefined)? null : this.InsuranceOption.toJSON(),
		FlatRateInsuranceRangeCost: (this.FlatRateInsuranceRangeCost === undefined)? null : this.FlatRateInsuranceRangeCost
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
module.exports = ShippingInsuranceType;