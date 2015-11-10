function GetCategoryFeaturesRequestType(CategoryID, LevelLimit, ViewAllNodes, FeatureID, AllFeaturesForCategory) {

	/**
	  Documentation
	   Returns information about the features that are applicable to different categories, such as listing durations, shipping term requirements, and Best Offer support.
	 */

	/**
	 * Arrays
	 */
	this.CategoryID = CategoryID;
	this.LevelLimit = LevelLimit;
	this.ViewAllNodes = ViewAllNodes;
	this.FeatureID = FeatureID;
	this.AllFeaturesForCategory = AllFeaturesForCategory;
}
GetCategoryFeaturesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		LevelLimit: (this.LevelLimit === undefined)? null : this.LevelLimit,
		ViewAllNodes: (this.ViewAllNodes === undefined)? null : this.ViewAllNodes,
		FeatureID: (this.FeatureID === undefined)? null : this.FeatureID,
		AllFeaturesForCategory: (this.AllFeaturesForCategory === undefined)? null : this.AllFeaturesForCategory
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
module.exports = GetCategoryFeaturesRequestType;