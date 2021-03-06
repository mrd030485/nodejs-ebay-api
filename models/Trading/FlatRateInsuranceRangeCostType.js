var AmountType = require('./AmountType');

function FlatRateInsuranceRangeCostType(FlatRateInsuranceRange, InsuranceCost) {

	/**
	  Documentation
	   A pairing of range and insurance cost.
	 */

	/**
	 * Arrays
	 */
	var _InsuranceCost;
	Object.defineProperty(this, 'InsuranceCost', {
		 get: function(){
			 return _InsuranceCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_InsuranceCost = value; 
				}else{
					console.log('InsuranceCost expects type AmountType');
				}
			}
		}
	});
	this.FlatRateInsuranceRange = FlatRateInsuranceRange;
	this.InsuranceCost = InsuranceCost;
}
FlatRateInsuranceRangeCostType.prototype.toJSON = function(with_null) {
	var json = { 
		FlatRateInsuranceRange: (this.FlatRateInsuranceRange === undefined)? null : this.FlatRateInsuranceRange,
		InsuranceCost: (this.InsuranceCost === undefined)? null : this.InsuranceCost.toJSON()
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
module.exports = FlatRateInsuranceRangeCostType;