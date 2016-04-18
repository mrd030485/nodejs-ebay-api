function ShippingPackageDetailsType(MeasurementUnit, PackageDepth, PackageLength, PackageWidth, WeightMajor, WeightMinor, ShippingIrregular) {

	/**
	  Documentation
	   Details about type of package used to ship an item.
	 */

	/**
	 * Arrays
	 */
	this.MeasurementUnit = MeasurementUnit;
	this.PackageDepth = PackageDepth;
	this.PackageLength = PackageLength;
	this.PackageWidth = PackageWidth;
	this.WeightMajor = WeightMajor;
	this.WeightMinor = WeightMinor;
	this.ShippingIrregular = ShippingIrregular;
	this.ShippingPackage = ShippingPackage;
}
ShippingPackageDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		MeasurementUnit: (this.MeasurementUnit === undefined)? null : this.MeasurementUnit,
		PackageDepth: (this.PackageDepth === undefined)? null : this.PackageDepth,
		PackageLength: (this.PackageLength === undefined)? null : this.PackageLength,
		PackageWidth: (this.PackageWidth === undefined)? null : this.PackageWidth,
		WeightMajor: (this.WeightMajor === undefined)? null : this.WeightMajor,
		WeightMinor: (this.WeightMinor === undefined)? null : this.WeightMinor,
		ShippingIrregular: (this.ShippingIrregular === undefined)? null : this.ShippingIrregular,
    ShippingPackage: (this.ShippingPackage === undefined)? null : this.ShippingPackage
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
