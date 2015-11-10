function MoveSellingManagerInventoryFolderRequestType(FolderID, NewParentFolderID) {

	/**
	  Documentation
	   Enables a seller to move a Selling Manager inventory folder. <br><br> This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	this.FolderID = FolderID;
	this.NewParentFolderID = NewParentFolderID;
}
MoveSellingManagerInventoryFolderRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		FolderID: (this.FolderID === undefined)? null : this.FolderID,
		NewParentFolderID: (this.NewParentFolderID === undefined)? null : this.NewParentFolderID
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
module.exports = MoveSellingManagerInventoryFolderRequestType;