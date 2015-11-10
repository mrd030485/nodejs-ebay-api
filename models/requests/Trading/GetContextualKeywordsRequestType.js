function GetContextualKeywordsRequestType(URL, Encoding, CategoryID) {

	/**
	  Documentation
	   Retrieves top-ranked contextual eBay keywords and categories for a specified web page.
	 */

	/**
	 * Arrays
	 */
	this.URL = URL;
	this.Encoding = Encoding;
	this.CategoryID = CategoryID;
}
GetContextualKeywordsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		URL: (this.URL === undefined)? null : this.URL,
		Encoding: (this.Encoding === undefined)? null : this.Encoding,
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID
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
module.exports = GetContextualKeywordsRequestType;