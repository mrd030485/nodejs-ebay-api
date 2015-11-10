function GetStoreCategoryUpdateStatusRequestType(TaskID) {

	/**
	  Documentation
	   Returns the status of the processing for category-structure changes specified with a call to SetStoreCategories.
	 */

	/**
	 * Arrays
	 */
	this.TaskID = TaskID;
}
GetStoreCategoryUpdateStatusRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		TaskID: (this.TaskID === undefined)? null : this.TaskID
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
module.exports = GetStoreCategoryUpdateStatusRequestType;