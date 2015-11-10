function CountryDetailsType(Country, Description, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   Details about a specific country.
	 */

	/**
	 * Arrays
	 */
	this.Country = Country;
	this.Description = Description;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
CountryDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Country: (this.Country === undefined)? null : this.Country,
		Description: (this.Description === undefined)? null : this.Description,
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime
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
module.exports = CountryDetailsType;