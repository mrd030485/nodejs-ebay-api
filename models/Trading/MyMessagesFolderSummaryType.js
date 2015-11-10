function MyMessagesFolderSummaryType(FolderID, FolderName, NewAlertCount, NewMessageCount, TotalAlertCount, TotalMessageCount, NewHighPriorityCount, TotalHighPriorityCount) {

	/**
	  Documentation
	   Summary details for a specified My Messages folder.
	 */

	/**
	 * Arrays
	 */
	this.FolderID = FolderID;
	this.FolderName = FolderName;
	this.NewAlertCount = NewAlertCount;
	this.NewMessageCount = NewMessageCount;
	this.TotalAlertCount = TotalAlertCount;
	this.TotalMessageCount = TotalMessageCount;
	this.NewHighPriorityCount = NewHighPriorityCount;
	this.TotalHighPriorityCount = TotalHighPriorityCount;
}
MyMessagesFolderSummaryType.prototype.toJSON = function(with_null) {
	var json = { 
		FolderID: (this.FolderID === undefined)? null : this.FolderID,
		FolderName: (this.FolderName === undefined)? null : this.FolderName,
		NewAlertCount: (this.NewAlertCount === undefined)? null : this.NewAlertCount,
		NewMessageCount: (this.NewMessageCount === undefined)? null : this.NewMessageCount,
		TotalAlertCount: (this.TotalAlertCount === undefined)? null : this.TotalAlertCount,
		TotalMessageCount: (this.TotalMessageCount === undefined)? null : this.TotalMessageCount,
		NewHighPriorityCount: (this.NewHighPriorityCount === undefined)? null : this.NewHighPriorityCount,
		TotalHighPriorityCount: (this.TotalHighPriorityCount === undefined)? null : this.TotalHighPriorityCount
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
module.exports = MyMessagesFolderSummaryType;