function TimeRangeType(TimeFrom, TimeTo) {

	/**
	  Documentation
	   
                Specifies the Date range.
            
	 */

	/**
	 * Arrays
	 */
	this.TimeFrom = TimeFrom;
	this.TimeTo = TimeTo;
}
TimeRangeType.prototype.toJSON = function(with_null) {
	var json = { 
		TimeFrom: (this.TimeFrom === undefined)? null : this.TimeFrom,
		TimeTo: (this.TimeTo === undefined)? null : this.TimeTo
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
module.exports = TimeRangeType;