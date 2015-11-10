function GetSellingManagerInventoryFolderRequestType(FolderID, MaxDepth, FullRecursion) {

	/**
	  Documentation
	   Retrieves Selling Manager inventory folders. This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	this.FolderID = FolderID;
	this.MaxDepth = MaxDepth;
	this.FullRecursion = FullRecursion;
}
GetSellingManagerInventoryFolderRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		FolderID: (this.FolderID === undefined)? null : this.FolderID,
		MaxDepth: (this.MaxDepth === undefined)? null : this.MaxDepth,
		FullRecursion: (this.FullRecursion === undefined)? null : this.FullRecursion
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
module.exports = GetSellingManagerInventoryFolderRequestType;