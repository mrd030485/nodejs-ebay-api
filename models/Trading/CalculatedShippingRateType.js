function CalculatedShippingRateType(OriginatingPostalCode, MeasurementUnit, PackageDepth, PackageLength, PackageWidth, PackagingHandlingCosts, ShippingIrregular, ShippingPackage, WeightMajor, WeightMinor, InternationalPackagingHandlingCosts) {

	/**
	  Documentation
	   Details pertinent to one or more items for which calculated shipping (or flat rate shipping using shipping rate tables with weight surcharges) has been offered by the seller, such as package dimension and weight and packaging/handling
                    costs. Also returned with the data for an item's transaction. <br><br> <span class="tablenote"><strong>Note:</strong> The <strong>CalculatedShippingRate</strong> container should only be used
                    to specify values for the <strong>InternationalPackagingHandlingCosts</strong>, <strong>OriginatingPostalCode</strong>, and/or <strong>PackagingHandlingCosts</strong> fields. The rest of the fields
                    in the <strong>CalculatedShippingRate</strong> container are used to specify package dimensions and package weight, and these values should now be specified in the <strong>ShippingPackageDetails</strong> container
                    instead. </span>
	 */

	/**
	 * Arrays
	 */
	var _PackageDepth;
	var _PackageLength;
	var _PackageWidth;
	var _PackagingHandlingCosts;
	var _WeightMajor;
	var _WeightMinor;
	var _InternationalPackagingHandlingCosts;
	this.OriginatingPostalCode = OriginatingPostalCode;
	this.MeasurementUnit = MeasurementUnit;
	this.PackageDepth = PackageDepth;
	this.PackageLength = PackageLength;
	this.PackageWidth = PackageWidth;
	this.PackagingHandlingCosts = PackagingHandlingCosts;
	this.ShippingIrregular = ShippingIrregular;
	this.ShippingPackage = ShippingPackage;
	this.WeightMajor = WeightMajor;
	this.WeightMinor = WeightMinor;
	this.InternationalPackagingHandlingCosts = InternationalPackagingHandlingCosts;
}
CalculatedShippingRateType.prototype.toJSON = function(with_null) {
	var json = { 
		OriginatingPostalCode: (this.OriginatingPostalCode === undefined)? null : this.OriginatingPostalCode,
		MeasurementUnit: (this.MeasurementUnit === undefined)? null : this.MeasurementUnit,
		PackageDepth: (this.PackageDepth === undefined)? null : this.PackageDepth,
		PackageLength: (this.PackageLength === undefined)? null : this.PackageLength,
		PackageWidth: (this.PackageWidth === undefined)? null : this.PackageWidth,
		PackagingHandlingCosts: (this.PackagingHandlingCosts === undefined)? null : this.PackagingHandlingCosts,
		ShippingIrregular: (this.ShippingIrregular === undefined)? null : this.ShippingIrregular,
		ShippingPackage: (this.ShippingPackage === undefined)? null : this.ShippingPackage,
		WeightMajor: (this.WeightMajor === undefined)? null : this.WeightMajor,
		WeightMinor: (this.WeightMinor === undefined)? null : this.WeightMinor,
		InternationalPackagingHandlingCosts: (this.InternationalPackagingHandlingCosts === undefined)? null : this.InternationalPackagingHandlingCosts
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
module.exports = CalculatedShippingRateType;
