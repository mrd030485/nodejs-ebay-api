function ProductRecommendationsType(Product) {

	/**
	  Documentation
	   
                A list of products returned from the Suggested Attributes engine.
            
	 */

	/**
	 * Arrays
	 *	Product: ProductInfoType
	 */
	this.Product = Product;
}
ProductRecommendationsType.prototype.toJSON = function(with_null) {
	var json = { 
		Product: (this.Product === undefined)? null : this.Product
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
module.exports = ProductRecommendationsType;