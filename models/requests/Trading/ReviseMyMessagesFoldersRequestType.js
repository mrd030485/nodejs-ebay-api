function ReviseMyMessagesFoldersRequestType(Operation, FolderID, FolderName) {

	/**
	  Documentation
	   Renames, removes, or restores the specified My Messages folders for a given user.
	 */

	/**
	 * Arrays
	 */
	this.Operation = Operation;
	this.FolderID = FolderID;
	this.FolderName = FolderName;
}
ReviseMyMessagesFoldersRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Operation: (this.Operation === undefined)? null : this.Operation,
		FolderID: (this.FolderID === undefined)? null : this.FolderID,
		FolderName: (this.FolderName === undefined)? null : this.FolderName
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
module.exports = ReviseMyMessagesFoldersRequestType;