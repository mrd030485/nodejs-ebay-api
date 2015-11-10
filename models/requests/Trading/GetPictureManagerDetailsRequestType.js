function GetPictureManagerDetailsRequestType(FolderID, PictureURL, PictureManagerDetailLevel) {

	/**
	  Documentation
	   Requests information about folders or pictures in a Picture Manager account or the account settings.
	 */

	/**
	 * Arrays
	 */
	this.FolderID = FolderID;
	this.PictureURL = PictureURL;
	this.PictureManagerDetailLevel = PictureManagerDetailLevel;
}
GetPictureManagerDetailsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		FolderID: (this.FolderID === undefined)? null : this.FolderID,
		PictureURL: (this.PictureURL === undefined)? null : this.PictureURL,
		PictureManagerDetailLevel: (this.PictureManagerDetailLevel === undefined)? null : this.PictureManagerDetailLevel
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
module.exports = GetPictureManagerDetailsRequestType;