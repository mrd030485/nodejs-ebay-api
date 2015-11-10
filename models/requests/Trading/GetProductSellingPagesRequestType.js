function GetProductSellingPagesRequestType(UseCase, Product) {

	/**
	  Documentation
	   his type is deprecated as the call is no longer available. 
	 */

	/**
	 * Arrays
	 *	Product: ProductType
	 */
	this.UseCase = UseCase;
	this.Product = Product;
}
GetProductSellingPagesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		UseCase: (this.UseCase === undefined)? null : this.UseCase,
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
module.exports = GetProductSellingPagesRequestType;