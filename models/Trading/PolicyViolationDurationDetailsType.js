function PolicyViolationDurationDetailsType(Period, Description) {

	/**
	  Documentation
	   [Selling] The details about the range used to calculate policy violations.
	 */

	/**
	 * Arrays
	 */
	this.Period = Period;
	this.Description = Description;
}
PolicyViolationDurationDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Period: (this.Period === undefined)? null : this.Period,
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