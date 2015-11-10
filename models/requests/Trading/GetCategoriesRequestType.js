function GetCategoriesRequestType(CategorySiteID, CategoryParent, LevelLimit, ViewAllNodes) {

	/**
	  Documentation
	   Retrieves the latest eBay category hierarchy for a given eBay site. Information returned for each category includes the category name and the unique ID for the category (unique within the eBay site for which categories are retrieved).
                    A category ID is a required input when you list most items.
	 */

	/**
	 * Arrays
	 */
	this.CategorySiteID = CategorySiteID;
	this.CategoryParent = CategoryParent;
	this.LevelLimit = LevelLimit;
	this.ViewAllNodes = ViewAllNodes;
}
GetCategoriesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		CategorySiteID: (this.CategorySiteID === undefined)? null : this.CategorySiteID,
		CategoryParent: (this.CategoryParent === undefined)? null : this.CategoryParent,
		LevelLimit: (this.LevelLimit === undefined)? null : this.LevelLimit,
		ViewAllNodes: (this.ViewAllNodes === undefined)? null : this.ViewAllNodes
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
module.exports = GetCategoriesRequestType;