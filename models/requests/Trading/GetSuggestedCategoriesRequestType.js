function GetSuggestedCategoriesRequestType(Query) {

	/**
	  Documentation
	   Returns a list of up to 10 categories that have the highest percentage of listings whose titles or descriptions contain the keywords you specify.
	 */

	/**
	 * Arrays
	 */
	this.Query = Query;
}
GetSuggestedCategoriesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Query: (this.Query === undefined)? null : this.Query
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
module.exports = GetSuggestedCategoriesRequestType;