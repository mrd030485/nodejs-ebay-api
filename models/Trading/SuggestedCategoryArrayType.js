function SuggestedCategoryArrayType(SuggestedCategory) {

	/**
	  Documentation
	   
                Contains an array of categories that contain listings with specified keywords in their titles or descriptions. The array can contain up to 10 categories.
            
	 */

	/**
	 * Arrays
	 *	SuggestedCategory: SuggestedCategoryType
	 */
	this.SuggestedCategory = SuggestedCategory;
}
SuggestedCategoryArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		SuggestedCategory: (this.SuggestedCategory === undefined)? null : this.SuggestedCategory
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
module.exports = SuggestedCategoryArrayType;