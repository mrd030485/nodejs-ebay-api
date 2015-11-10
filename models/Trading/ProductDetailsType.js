function ProductDetailsType(ProductIdentifierUnavailableText) {

	/**
	  Documentation
	   
                This type defines the <b>ProductDetails</b> container that is returned in the <b>GeteBayDetails</b> response if product identifiers (EANs, ISBNs, UPCs, MPN/Brand) are not supported for a category.
            
	 */

	/**
	 * Arrays
	 */
	this.ProductIdentifierUnavailableText = ProductIdentifierUnavailableText;
}
ProductDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ProductIdentifierUnavailableText: (this.ProductIdentifierUnavailableText === undefined)? null : this.ProductIdentifierUnavailableText
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
module.exports = ProductDetailsType;