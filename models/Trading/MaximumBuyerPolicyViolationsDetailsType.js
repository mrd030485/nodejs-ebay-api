var NumberOfPolicyViolationsDetailsType = require('./NumberOfPolicyViolationsDetailsType');

function MaximumBuyerPolicyViolationsDetailsType(NumberOfPolicyViolations, PolicyViolationDuration) {

	/**
	  Documentation
	   The maximum number of policy violations and the durations that can be designated by sellers at this site. This is applicable only to sellers.
	 */

	/**
	 * Arrays
	 *	PolicyViolationDuration: PolicyViolationDurationDetailsType
	 */
	var _NumberOfPolicyViolations;
	Object.defineProperty(this, 'NumberOfPolicyViolations', {
		 get: function(){
			 return _NumberOfPolicyViolations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NumberOfPolicyViolationsDetailsType){ 
					_NumberOfPolicyViolations = value; 
				}else{
					console.log('NumberOfPolicyViolations expects type NumberOfPolicyViolationsDetailsType');
				}
			}
		}
	});
	this.NumberOfPolicyViolations = NumberOfPolicyViolations;
	this.PolicyViolationDuration = PolicyViolationDuration;
}
MaximumBuyerPolicyViolationsDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		NumberOfPolicyViolations: (this.NumberOfPolicyViolations === undefined)? null : this.NumberOfPolicyViolations.toJSON(),
		PolicyViolationDuration: (this.PolicyViolationDuration === undefined)? null : this.PolicyViolationDuration
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
module.exports = MaximumBuyerPolicyViolationsDetailsType;