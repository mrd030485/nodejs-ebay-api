function ExtendedProductFinderIDType(ProductFinderID, ProductFinderBuySide) {

	/**
	  Documentation
	   
                This type is deprecated as the call is no longer available.
            
	 */

	/**
	 * Arrays
	 */
	this.ProductFinderID = ProductFinderID;
	this.ProductFinderBuySide = ProductFinderBuySide;
}
ExtendedProductFinderIDType.prototype.toJSON = function(with_null) {
	var json = { 
		ProductFinderID: (this.ProductFinderID === undefined)? null : this.ProductFinderID,
		ProductFinderBuySide: (this.ProductFinderBuySide === undefined)? null : this.ProductFinderBuySide
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
module.exports = ExtendedProductFinderIDType;