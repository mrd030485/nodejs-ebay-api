function MaximumUnpaidItemStrikesInfoType(Count, Period) {

	/**
	  Documentation
	   Type defining the <b>MaximumUnpaidItemStrikesInfo</b> container, which is used by the seller as a mechanism to block prospective buyers who have unpaid item strikes on their account exceeding the value set in the <b>Count</b>
                    field during a specified time period (set in the <b>Period</b> field).
	 */

	/**
	 * Arrays
	 */
	this.Count = Count;
	this.Period = Period;
}
MaximumUnpaidItemStrikesInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		Count: (this.Count === undefined)? null : this.Count,
		Period: (this.Period === undefined)? null : this.Period
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
module.exports = MaximumUnpaidItemStrikesInfoType;