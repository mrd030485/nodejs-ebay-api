function RegionOfOriginDetailsType(RegionOfOrigin, Description, Status, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   This type is no longer used; replaced by <b>ShippingLocationDetails</b>. 
	 */

	/**
	 * Arrays
	 */
	this.RegionOfOrigin = RegionOfOrigin;
	this.Description = Description;
	this.Status = Status;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
RegionOfOriginDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		RegionOfOrigin: (this.RegionOfOrigin === undefined)? null : this.RegionOfOrigin,
		Description: (this.Description === undefined)? null : this.Description,
		Status: (this.Status === undefined)? null : this.Status,
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
module.exports = RegionOfOriginDetailsType;