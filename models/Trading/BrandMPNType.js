function BrandMPNType(Brand, MPN) {

	/**
	  Documentation
	   
                Type defining the <b>BrandMPN</b> container which is used to identify a product (through unique product brand and Manufacturer Part Number combination), and match that product to a product in the eBay Product Catalog.
            
	 */

	/**
	 * Arrays
	 */
	this.Brand = Brand;
	this.MPN = MPN;
}
BrandMPNType.prototype.toJSON = function(with_null) {
	var json = { 
		Brand: (this.Brand === undefined)? null : this.Brand,
		MPN: (this.MPN === undefined)? null : this.MPN
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
module.exports = BrandMPNType;