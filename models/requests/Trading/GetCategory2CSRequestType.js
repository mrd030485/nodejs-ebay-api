function GetCategory2CSRequestType(CategoryID, AttributeSystemVersion) {

	/**
	  Documentation
	   No longer recommended in general, although this call may still be used to determine whether a category is catalog-enabled. All other features of this call are no longer functional.
	 */

	/**
	 * Arrays
	 */
	this.CategoryID = CategoryID;
	this.AttributeSystemVersion = AttributeSystemVersion;
}
GetCategory2CSRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		AttributeSystemVersion: (this.AttributeSystemVersion === undefined)? null : this.AttributeSystemVersion
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
module.exports = GetCategory2CSRequestType;