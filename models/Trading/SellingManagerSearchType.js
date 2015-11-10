function SellingManagerSearchType(SearchType, SearchValue) {

	/**
	  Documentation
	   For searches of Selling Manager listings, specifies search type, such as ProductID or BuyerUserID, and search value.
	 */

	/**
	 * Arrays
	 */
	this.SearchType = SearchType;
	this.SearchValue = SearchValue;
}
SellingManagerSearchType.prototype.toJSON = function(with_null) {
	var json = { 
		SearchType: (this.SearchType === undefined)? null : this.SearchType,
		SearchValue: (this.SearchValue === undefined)? null : this.SearchValue
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
module.exports = SellingManagerSearchType;