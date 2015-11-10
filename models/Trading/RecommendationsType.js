function RecommendationsType(CategoryID, NameRecommendation, Updated) {

	/**
	  Documentation
	   
                Defines details about recommended names and values for custom Item Specifics.
            
	 */

	/**
	 * Arrays
	 *	NameRecommendation: NameRecommendationType
	 */
	this.CategoryID = CategoryID;
	this.NameRecommendation = NameRecommendation;
	this.Updated = Updated;
}
RecommendationsType.prototype.toJSON = function(with_null) {
	var json = { 
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		NameRecommendation: (this.NameRecommendation === undefined)? null : this.NameRecommendation,
		Updated: (this.Updated === undefined)? null : this.Updated
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
module.exports = RecommendationsType;