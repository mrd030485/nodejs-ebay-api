function GetCategoryMappingsRequestType(CategoryVersion) {

	/**
	  Documentation
	   Retrieves a map of old category IDs and corresponding active category IDs defined for the site to which the request is sent.
	 */

	/**
	 * Arrays
	 */
	this.CategoryVersion = CategoryVersion;
}
GetCategoryMappingsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		CategoryVersion: (this.CategoryVersion === undefined)? null : this.CategoryVersion
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
module.exports = GetCategoryMappingsRequestType;