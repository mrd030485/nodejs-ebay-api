function DeleteSellingManagerProductRequestType(ProductID) {

	/**
	  Documentation
	   Deletes a Selling Manager product. This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	this.ProductID = ProductID;
}
DeleteSellingManagerProductRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ProductID: (this.ProductID === undefined)? null : this.ProductID
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
module.exports = DeleteSellingManagerProductRequestType;