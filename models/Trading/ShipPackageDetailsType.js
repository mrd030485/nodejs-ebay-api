var MeasurementSystemCodeType = require('./MeasurementSystemCodeType'),
	MeasureType = require('./MeasureType'),
	ShippingPackageCodeType = require('./ShippingPackageCodeType');

function ShipPackageDetailsType(MeasurementUnit, PackageDepth, PackageLength, PackageWidth, ShippingIrregular, ShippingPackage, WeightMajor, WeightMinor) {

	/**
	  Documentation
	   
                Details pertinent to one or more items for which calculated shipping (or flat rate shipping using shipping rate tables with weight surcharges) has been offered by the seller, such as package dimension and weight and packaging/handling costs. Also returned
                with the data for an item's transaction. <br> <span class="tablenote"><strong>Note:</strong> The <strong>ShippingPackageDetails</strong> container should now be used instead of the <strong>CalculatedShippingRate</strong>
                container to specify values for the <strong>MeasurementUnit</strong>, <strong>PackageDepth</strong>, <strong>PackageWidth</strong>, <strong>PackageLength</strong>, <strong>ShippingIrregular</strong>,
                <strong>ShippingPackage</strong>, <strong>WeightMajor</strong>, and/or <strong>WeightMinor</strong> fields. The <strong>CalculatedShippingRate</strong> container should only be used to specify
                values for the <strong>InternationalPackagingHandlingCosts</strong>, <strong>OriginatingPostalCode</strong>, and/or <strong>PackagingHandlingCosts</strong> fields. </span>
            
	 */

	/**
	 * Arrays
	 */
	var _MeasurementUnit;
	var _PackageDepth;
	var _PackageLength;
	var _PackageWidth;
	var _ShippingPackage;
	var _WeightMajor;
	var _WeightMinor;
	Object.defineProperty(this, 'MeasurementUnit', {
		 get: function(){
			 return _MeasurementUnit;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MeasurementSystemCodeType){ 
					_MeasurementUnit = value; 
				}else{
					console.log('MeasurementUnit expects type MeasurementSystemCodeType');
				}
			}
		}
	});
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
	Object.defineProperty(this, 'ShippingPackage', {
		 get: function(){
			 return _ShippingPackage;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingPackageCodeType){ 
					_ShippingPackage = value; 
				}else{
					console.log('ShippingPackage expects type ShippingPackageCodeType');
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
		MeasurementUnit: (this.MeasurementUnit === undefined)? null : this.MeasurementUnit.toJSON(),
		PackageDepth: (this.PackageDepth === undefined)? null : this.PackageDepth.toJSON(),
		PackageLength: (this.PackageLength === undefined)? null : this.PackageLength.toJSON(),
		PackageWidth: (this.PackageWidth === undefined)? null : this.PackageWidth.toJSON(),
		ShippingIrregular: (this.ShippingIrregular === undefined)? null : this.ShippingIrregular,
		ShippingPackage: (this.ShippingPackage === undefined)? null : this.ShippingPackage.toJSON(),
		WeightMajor: (this.WeightMajor === undefined)? null : this.WeightMajor.toJSON(),
		WeightMinor: (this.WeightMinor === undefined)? null : this.WeightMinor.toJSON()
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