var MeasureType = require('./MeasureType');

function ShipPackageDetailsType(MeasurementUnit, PackageDepth, PackageLength, PackageWidth, ShippingIrregular, ShippingPackage, WeightMajor, WeightMinor) {

	/**
	  Documentation
	   Details pertinent to one or more items for which calculated shipping (or flat rate shipping using shipping rate tables with weight surcharges) has been offered by the seller, such as package dimension and weight and packaging/handling
                    costs. Also returned with the data for an item's transaction. <br> <span class="tablenote"><strong>Note:</strong> The <strong>ShippingPackageDetails</strong> container should now be used instead
                    of the <strong>CalculatedShippingRate</strong> container to specify values for the <strong>MeasurementUnit</strong>, <strong>PackageDepth</strong>, <strong>PackageWidth</strong>, <strong>PackageLength</strong>,
                    <strong>ShippingIrregular</strong>, <strong>ShippingPackage</strong>, <strong>WeightMajor</strong>, and/or <strong>WeightMinor</strong> fields. The <strong>CalculatedShippingRate</strong>
                    container should only be used to specify values for the <strong>InternationalPackagingHandlingCosts</strong>, <strong>OriginatingPostalCode</strong>, and/or <strong>PackagingHandlingCosts</strong>
                    fields. </span>
	 */

	/**
	 * Arrays
	 */
	this.MeasurementUnit = MeasurementUnit;
	this.PackageDepth = PackageDepth;
	this.PackageLength = PackageLength;
	this.PackageWidth = PackageWidth;
	this.ShippingIrregular = ShippingIrregular;
	this.ShippingPackage = ShippingPackage;
	this.WeightMajor = WeightMajor;
	this.WeightMinor = WeightMinor;
}
ShipPackageDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		MeasurementUnit: (this.MeasurementUnit === undefined)? null : this.MeasurementUnit,
		PackageDepth: (this.PackageDepth === undefined)? null : this.PackageDepth,
		PackageLength: (this.PackageLength === undefined)? null : this.PackageLength,
		PackageWidth: (this.PackageWidth === undefined)? null : this.PackageWidth,
		ShippingIrregular: (this.ShippingIrregular === undefined)? null : this.ShippingIrregular,
		ShippingPackage: (this.ShippingPackage === undefined)? null : this.ShippingPackage,
		WeightMajor: (this.WeightMajor === undefined)? null : this.WeightMajor,
		WeightMinor: (this.WeightMinor === undefined)? null : this.WeightMinor
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
module.exports = ShipPackageDetailsType;
