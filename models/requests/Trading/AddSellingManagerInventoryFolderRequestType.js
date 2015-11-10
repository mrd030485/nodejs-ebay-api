function AddSellingManagerInventoryFolderRequestType(FolderName, ParentFolderID, Comment) {

	/**
	  Documentation
	   Adds a new product folder to a user's Selling Manager account.
	 */

	/**
	 * Arrays
	 */
	this.FolderName = FolderName;
	this.ParentFolderID = ParentFolderID;
	this.Comment = Comment;
}
AddSellingManagerInventoryFolderRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		FolderName: (this.FolderName === undefined)? null : this.FolderName,
		ParentFolderID: (this.ParentFolderID === undefined)? null : this.ParentFolderID,
		Comment: (this.Comment === undefined)? null : this.Comment
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
module.exports = AddSellingManagerInventoryFolderRequestType;