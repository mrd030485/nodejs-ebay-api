var PeriodCodeType = require('./PeriodCodeType');

function PolicyViolationDurationDetailsType(Period, Description) {

	/**
	  Documentation
	   [Selling] The details about the range used to calculate policy violations.
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
	this.Period = Period;
	this.Description = Description;
}
PolicyViolationDurationDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Period: (this.Period === undefined)? null : this.Period.toJSON(),
		Description: (this.Description === undefined)? null : this.Description
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
module.exports = PolicyViolationDurationDetailsType;