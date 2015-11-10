function ShippingLocationDetailsType(ShippingLocation, Description, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   
                Details about a region or location to which the seller is willing to ship.
            
	 */

	/**
	 * Arrays
	 */
	this.ShippingLocation = ShippingLocation;
	this.Description = Description;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
ShippingLocationDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingLocation: (this.ShippingLocation === undefined)? null : this.ShippingLocation,
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
module.exports = ShippingLocationDetailsType;