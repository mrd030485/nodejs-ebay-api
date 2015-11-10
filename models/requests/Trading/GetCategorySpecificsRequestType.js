function GetCategorySpecificsRequestType(CategoryID, LastUpdateTime, MaxNames, MaxValuesPerName, Name, CategorySpecific, ExcludeRelationships, IncludeConfidence, CategorySpecificsFileInfo) {

	/**
	  Documentation
	   Returns the most popular custom Item Specific names and values for each category you request.
	 */

	/**
	 * Arrays
	 *	CategorySpecific: CategoryItemSpecificsType
	 */
	this.CategoryID = CategoryID;
	this.LastUpdateTime = LastUpdateTime;
	this.MaxNames = MaxNames;
	this.MaxValuesPerName = MaxValuesPerName;
	this.Name = Name;
	this.CategorySpecific = CategorySpecific;
	this.ExcludeRelationships = ExcludeRelationships;
	this.IncludeConfidence = IncludeConfidence;
	this.CategorySpecificsFileInfo = CategorySpecificsFileInfo;
}
GetCategorySpecificsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		LastUpdateTime: (this.LastUpdateTime === undefined)? null : this.LastUpdateTime,
		MaxNames: (this.MaxNames === undefined)? null : this.MaxNames,
		MaxValuesPerName: (this.MaxValuesPerName === undefined)? null : this.MaxValuesPerName,
		Name: (this.Name === undefined)? null : this.Name,
		CategorySpecific: (this.CategorySpecific === undefined)? null : this.CategorySpecific,
		ExcludeRelationships: (this.ExcludeRelationships === undefined)? null : this.ExcludeRelationships,
		IncludeConfidence: (this.IncludeConfidence === undefined)? null : this.IncludeConfidence,
		CategorySpecificsFileInfo: (this.CategorySpecificsFileInfo === undefined)? null : this.CategorySpecificsFileInfo
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
module.exports = GetCategorySpecificsRequestType;