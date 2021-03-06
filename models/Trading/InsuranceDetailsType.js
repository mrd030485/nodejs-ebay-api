var AmountType = require('./AmountType');

function InsuranceDetailsType(InsuranceFee, InsuranceOption) {

	/**
	  Documentation
	   Contains the cost of shipping insurance and other insurance-related information.
	 */

	/**
	 * Arrays
	 */
	var _InsuranceFee;
	Object.defineProperty(this, 'InsuranceFee', {
		 get: function(){
			 return _InsuranceFee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_InsuranceFee = value; 
				}else{
					console.log('InsuranceFee expects type AmountType');
				}
			}
		}
	});
	this.InsuranceFee = InsuranceFee;
	this.InsuranceOption = InsuranceOption;
}
InsuranceDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		InsuranceFee: (this.InsuranceFee === undefined)? null : this.InsuranceFee.toJSON(),
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
module.exports = InsuranceDetailsType;