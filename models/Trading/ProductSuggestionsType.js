function ProductSuggestionsType(ProductSuggestion) {

	/**
	  Documentation
	   
                Provides a list of products recommended by eBay, which match the item information provided by the seller.
            
	 */

	/**
	 * Arrays
	 *	ProductSuggestion: ProductSuggestionType
	 */
	this.ProductSuggestion = ProductSuggestion;
}
ProductSuggestionsType.prototype.toJSON = function(with_null) {
	var json = { 
		ProductSuggestion: (this.ProductSuggestion === undefined)? null : this.ProductSuggestion
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
module.exports = ProductSuggestionsType;