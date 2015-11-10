function SellingManagerFolderDetailsType(FolderID, ParentFolderID, FolderLevel, FolderName, FolderComment, ChildFolder, CreationTime) {

	/**
	  Documentation
	   
                Contains information about a Selling Manager folder.
            
	 */

	/**
	 * Arrays
	 *	ChildFolder: SellingManagerFolderDetailsType
	 */
	this.FolderID = FolderID;
	this.ParentFolderID = ParentFolderID;
	this.FolderLevel = FolderLevel;
	this.FolderName = FolderName;
	this.FolderComment = FolderComment;
	this.ChildFolder = ChildFolder;
	this.CreationTime = CreationTime;
}
SellingManagerFolderDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		FolderID: (this.FolderID === undefined)? null : this.FolderID,
		ParentFolderID: (this.ParentFolderID === undefined)? null : this.ParentFolderID,
		FolderLevel: (this.FolderLevel === undefined)? null : this.FolderLevel,
		FolderName: (this.FolderName === undefined)? null : this.FolderName,
		FolderComment: (this.FolderComment === undefined)? null : this.FolderComment,
		ChildFolder: (this.ChildFolder === undefined)? null : this.ChildFolder,
		CreationTime: (this.CreationTime === undefined)? null : this.CreationTime
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
module.exports = SellingManagerFolderDetailsType;