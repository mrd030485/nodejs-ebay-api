var ShippingPackageCodeType = require('./ShippingPackageCodeType');

function ShippingServicePackageDetailsType(Name, DimensionsRequired) {

	/**
	  Documentation
	   
                Packages supported by the enclosing shipping service.
            
	 */

	/**
	 * Arrays
	 */
	var _Name;
	Object.defineProperty(this, 'Name', {
		 get: function(){
			 return _Name;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingPackageCodeType){ 
					_Name = value; 
				}else{
					console.log('Name expects type ShippingPackageCodeType');
				}
			}
		}
	});
	this.Name = Name;
	this.DimensionsRequired = DimensionsRequired;
}
ShippingServicePackageDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name.toJSON(),
		DimensionsRequired: (this.DimensionsRequired === undefined)? null : this.DimensionsRequired
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
module.exports = ShippingServicePackageDetailsType;