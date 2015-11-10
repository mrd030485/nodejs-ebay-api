function ShippingPackageDetailsType(PackageID, Description, ShippingPackage, DefaultValue, DimensionsSupported, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   Details about type of package used to ship an item.
	 */

	/**
	 * Arrays
	 */
	this.PackageID = PackageID;
	this.Description = Description;
	this.ShippingPackage = ShippingPackage;
	this.DefaultValue = DefaultValue;
	this.DimensionsSupported = DimensionsSupported;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
ShippingPackageDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		PackageID: (this.PackageID === undefined)? null : this.PackageID,
		Description: (this.Description === undefined)? null : this.Description,
		ShippingPackage: (this.ShippingPackage === undefined)? null : this.ShippingPackage,
		DefaultValue: (this.DefaultValue === undefined)? null : this.DefaultValue,
		DimensionsSupported: (this.DimensionsSupported === undefined)? null : this.DimensionsSupported,
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
module.exports = ShippingPackageDetailsType;