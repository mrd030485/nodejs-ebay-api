var MeasureType = require('./MeasureType'),
	AmountType = require('./AmountType');

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
	Object.defineProperty(this, 'PackageDepth', {
		 get: function(){
			 return _PackageDepth;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MeasureType){ 
					_PackageDepth = value; 
				}else{
					console.log('PackageDepth expects type MeasureType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PackageLength', {
		 get: function(){
			 return _PackageLength;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MeasureType){ 
					_PackageLength = value; 
				}else{
					console.log('PackageLength expects type MeasureType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PackageWidth', {
		 get: function(){
			 return _PackageWidth;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MeasureType){ 
					_PackageWidth = value; 
				}else{
					console.log('PackageWidth expects type MeasureType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PackagingHandlingCosts', {
		 get: function(){
			 return _PackagingHandlingCosts;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_PackagingHandlingCosts = value; 
				}else{
					console.log('PackagingHandlingCosts expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'WeightMajor', {
		 get: function(){
			 return _WeightMajor;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MeasureType){ 
					_WeightMajor = value; 
				}else{
					console.log('WeightMajor expects type MeasureType');
				}
			}
		}
	});
	Object.defineProperty(this, 'WeightMinor', {
		 get: function(){
			 return _WeightMinor;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MeasureType){ 
					_WeightMinor = value; 
				}else{
					console.log('WeightMinor expects type MeasureType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InternationalPackagingHandlingCosts', {
		 get: function(){
			 return _InternationalPackagingHandlingCosts;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_InternationalPackagingHandlingCosts = value; 
				}else{
					console.log('InternationalPackagingHandlingCosts expects type AmountType');
				}
			}
		}
	});
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
		PackageDepth: (this.PackageDepth === undefined)? null : this.PackageDepth.toJSON(),
		PackageLength: (this.PackageLength === undefined)? null : this.PackageLength.toJSON(),
		PackageWidth: (this.PackageWidth === undefined)? null : this.PackageWidth.toJSON(),
		PackagingHandlingCosts: (this.PackagingHandlingCosts === undefined)? null : this.PackagingHandlingCosts.toJSON(),
		ShippingIrregular: (this.ShippingIrregular === undefined)? null : this.ShippingIrregular,
		ShippingPackage: (this.ShippingPackage === undefined)? null : this.ShippingPackage,
		WeightMajor: (this.WeightMajor === undefined)? null : this.WeightMajor.toJSON(),
		WeightMinor: (this.WeightMinor === undefined)? null : this.WeightMinor.toJSON(),
		InternationalPackagingHandlingCosts: (this.InternationalPackagingHandlingCosts === undefined)? null : this.InternationalPackagingHandlingCosts.toJSON()
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