function ProductSuggestionType(Title, EPID, StockPhoto, Recommended) {

	/**
	  Documentation
	   
                Identifies an individual product suggestion. The product details include the EPID, Title, Stock photo url and if it is an exact match.
            
	 */

	/**
	 * Arrays
	 */
	this.Title = Title;
	this.EPID = EPID;
	this.StockPhoto = StockPhoto;
	this.Recommended = Recommended;
}
ProductSuggestionType.prototype.toJSON = function(with_null) {
	var json = { 
		Title: (this.Title === undefined)? null : this.Title,
		EPID: (this.EPID === undefined)? null : this.EPID,
		StockPhoto: (this.StockPhoto === undefined)? null : this.StockPhoto,
		Recommended: (this.Recommended === undefined)? null : this.Recommended
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
module.exports = ProductSuggestionType;