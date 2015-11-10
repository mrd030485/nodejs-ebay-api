function MyMessagesFolderType(FolderID, FolderName) {

	/**
	  Documentation
	   
                Details relating to a My Messages folder.
            
	 */

	/**
	 * Arrays
	 */
	this.FolderID = FolderID;
	this.FolderName = FolderName;
}
MyMessagesFolderType.prototype.toJSON = function(with_null) {
	var json = { 
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
module.exports = MyMessagesFolderType;