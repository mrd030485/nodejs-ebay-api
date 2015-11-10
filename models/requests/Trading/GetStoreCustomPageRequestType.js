function GetStoreCustomPageRequestType(PageID) {

	/**
	  Documentation
	   Retrieves the custom page or pages for the authenticated user's Store.
	 */

	/**
	 * Arrays
	 */
	this.PageID = PageID;
}
GetStoreCustomPageRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		PageID: (this.PageID === undefined)? null : this.PageID
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
module.exports = GetStoreCustomPageRequestType;