var PeriodCodeType = require('./PeriodCodeType');

function MaximumBuyerPolicyViolationsType(Count, Period) {

	/**
	  Documentation
	   
                Type defining the <b>MaximumBuyerPolicyViolations</b> container, which is used by the seller as a mechanism to block prospective buyers who have buyer policy violations on their account exceeding the value set in the <b>Count</b>
                field during a specified time period (set in the <b>Period</b> field).
            
	 */

	/**
	 * Arrays
	 */
	var _Period;
	Object.defineProperty(this, 'Period', {
		 get: function(){
			 return _Period;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PeriodCodeType){ 
					_Period = value; 
				}else{
					console.log('Period expects type PeriodCodeType');
				}
			}
		}
	});
	this.Count = Count;
	this.Period = Period;
}
MaximumBuyerPolicyViolationsType.prototype.toJSON = function(with_null) {
	var json = { 
		Count: (this.Count === undefined)? null : this.Count,
		Period: (this.Period === undefined)? null : this.Period.toJSON()
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
module.exports = MaximumBuyerPolicyViolationsType;