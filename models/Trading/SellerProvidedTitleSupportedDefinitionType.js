function SellerProvidedTitleSupportedDefinitionType() {

	/**
	  Documentation
	   If present, the site defines category settings for whether the seller can provide their own title for a US or CA eBay Motors listing.
	 */

	/**
	 * Arrays
	 */
}
SellerProvidedTitleSupportedDefinitionType.prototype.toJSON = function(with_null) {
	var json = { 
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
module.exports = SellerProvidedTitleSupportedDefinitionType;