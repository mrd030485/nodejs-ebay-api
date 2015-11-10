function RegionDetailsType(RegionID, Description, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   This type is no longer used; replaced by <b>ShippingLocationDetails</b>. 
	 */

	/**
	 * Arrays
	 */
	this.RegionID = RegionID;
	this.Description = Description;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
RegionDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		RegionID: (this.RegionID === undefined)? null : this.RegionID,
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
module.exports = RegionDetailsType;