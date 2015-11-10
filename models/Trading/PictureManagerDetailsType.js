function PictureManagerDetailsType(SubscriptionLevel, StorageUsed, TotalStorageAvailable, KeepOriginal, WatermarkEPS, WatermarkUserID, Folder) {
	/**
	 * Arrays
	 *	Folder: PictureManagerFolderType
	 */
	this.SubscriptionLevel = SubscriptionLevel;
	this.StorageUsed = StorageUsed;
	this.TotalStorageAvailable = TotalStorageAvailable;
	this.KeepOriginal = KeepOriginal;
	this.WatermarkEPS = WatermarkEPS;
	this.WatermarkUserID = WatermarkUserID;
	this.Folder = Folder;
}
PictureManagerDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		SubscriptionLevel: (this.SubscriptionLevel === undefined)? null : this.SubscriptionLevel,
		StorageUsed: (this.StorageUsed === undefined)? null : this.StorageUsed,
		TotalStorageAvailable: (this.TotalStorageAvailable === undefined)? null : this.TotalStorageAvailable,
		KeepOriginal: (this.KeepOriginal === undefined)? null : this.KeepOriginal,
		WatermarkEPS: (this.WatermarkEPS === undefined)? null : this.WatermarkEPS,
		WatermarkUserID: (this.WatermarkUserID === undefined)? null : this.WatermarkUserID,
		Folder: (this.Folder === undefined)? null : this.Folder
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
module.exports = PictureManagerDetailsType;