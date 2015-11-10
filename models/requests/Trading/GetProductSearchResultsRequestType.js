function GetProductSearchResultsRequestType(ProductSearch) {

	/**
	  Documentation
	   This type is deprecated as the call is no longer available. 
	 */

	/**
	 * Arrays
	 *	ProductSearch: ProductSearchType
	 */
	this.ProductSearch = ProductSearch;
}
GetProductSearchResultsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ProductSearch: (this.ProductSearch === undefined)? null : this.ProductSearch
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
module.exports = GetProductSearchResultsRequestType;