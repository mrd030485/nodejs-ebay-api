function DateType(Year, Month, Day) {

	/**
	  Documentation
	   
                Defines year, month, and day as individual components of a date. Only applicable to use cases that support incomplete dates. Otherwise, we use dateTime (or date, as appropriate).
            
	 */

	/**
	 * Arrays
	 */
	this.Year = Year;
	this.Month = Month;
	this.Day = Day;
}
DateType.prototype.toJSON = function(with_null) {
	var json = { 
		Year: (this.Year === undefined)? null : this.Year,
		Month: (this.Month === undefined)? null : this.Month,
		Day: (this.Day === undefined)? null : this.Day
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
module.exports = DateType;