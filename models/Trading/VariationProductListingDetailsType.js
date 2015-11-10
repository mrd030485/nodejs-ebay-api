function VariationProductListingDetailsType(ISBN, UPC, EAN) {

	/**
	  Documentation
	   This type defines the <b>VariationProductListingDetails</b> container that is used to specify an EAN, an ISBN, or a UPC value to identify a specific product variation in a multi-variation listing. For multi-variation listings,
                    the same product identifier type must be used for all product variations within the listing. For instance, if one product variation uses ISBNs, all product variations must use ISBN values.
	 */

	/**
	 * Arrays
	 */
	this.ISBN = ISBN;
	this.UPC = UPC;
	this.EAN = EAN;
}
VariationProductListingDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ISBN: (this.ISBN === undefined)? null : this.ISBN,
		UPC: (this.UPC === undefined)? null : this.UPC,
		EAN: (this.EAN === undefined)? null : this.EAN
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
module.exports = VariationProductListingDetailsType;