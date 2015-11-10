function PictureManagerFolderType(FolderID, Name, Picture) {

	/**
	  Documentation
	   This type is deprecated as Pictures Manager was retired. 
	 */

	/**
	 * Arrays
	 *	Picture: PictureManagerPictureType
	 */
	this.FolderID = FolderID;
	this.Name = Name;
	this.Picture = Picture;
}
PictureManagerFolderType.prototype.toJSON = function(with_null) {
	var json = { 
		FolderID: (this.FolderID === undefined)? null : this.FolderID,
		Name: (this.Name === undefined)? null : this.Name,
		Picture: (this.Picture === undefined)? null : this.Picture
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
module.exports = PictureManagerFolderType;