function ShippingServicePackageDetailsType(Name, DimensionsRequired) {

	/**
	  Documentation
	   Packages supported by the enclosing shipping service.
	 */

	/**
	 * Arrays
	 */
	this.Name = Name;
	this.DimensionsRequired = DimensionsRequired;
}
ShippingServicePackageDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
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