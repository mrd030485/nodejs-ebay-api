function MaximumUnpaidItemStrikesDurationDetailsType(Period, Description) {

	/**
	  Documentation
	   [Selling] Defined time period for maximum unpaid items.
	 */

	/**
	 * Arrays
	 */
	this.Period = Period;
	this.Description = Description;
}
MaximumUnpaidItemStrikesDurationDetailsType.prototype.toJSON = function(with_null) {
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
module.exports = MaximumUnpaidItemStrikesDurationDetailsType;