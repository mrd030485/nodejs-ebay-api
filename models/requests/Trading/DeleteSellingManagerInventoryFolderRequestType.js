function DeleteSellingManagerInventoryFolderRequestType(FolderID) {

	/**
	  Documentation
	   Removes an inventory folder when a user deletes it in My eBay. This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	this.FolderID = FolderID;
}
DeleteSellingManagerInventoryFolderRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		FolderID: (this.FolderID === undefined)? null : this.FolderID
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
module.exports = DeleteSellingManagerInventoryFolderRequestType;