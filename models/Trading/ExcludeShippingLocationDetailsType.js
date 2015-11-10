function ExcludeShippingLocationDetailsType(Description, Location, Region, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   
                Container for the list of site-specific locations supported by the Exclude Ship To Locations feature.
            
	 */

	/**
	 * Arrays
	 */
	this.Description = Description;
	this.Location = Location;
	this.Region = Region;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
ExcludeShippingLocationDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Description: (this.Description === undefined)? null : this.Description,
		Location: (this.Location === undefined)? null : this.Location,
		Region: (this.Region === undefined)? null : this.Region,
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
module.exports = ExcludeShippingLocationDetailsType;