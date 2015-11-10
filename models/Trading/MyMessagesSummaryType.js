function MyMessagesSummaryType(FolderSummary, NewAlertCount, NewMessageCount, UnresolvedAlertCount, FlaggedMessageCount, TotalAlertCount, TotalMessageCount, NewHighPriorityCount, TotalHighPriorityCount) {

	/**
	  Documentation
	   Summary data for a given user's alerts and messages. This includes the numbers of new alerts and messages, unresolved alerts, flagged messages, and total alerts and messages.
	 */

	/**
	 * Arrays
	 *	FolderSummary: MyMessagesFolderSummaryType
	 */
	this.FolderSummary = FolderSummary;
	this.NewAlertCount = NewAlertCount;
	this.NewMessageCount = NewMessageCount;
	this.UnresolvedAlertCount = UnresolvedAlertCount;
	this.FlaggedMessageCount = FlaggedMessageCount;
	this.TotalAlertCount = TotalAlertCount;
	this.TotalMessageCount = TotalMessageCount;
	this.NewHighPriorityCount = NewHighPriorityCount;
	this.TotalHighPriorityCount = TotalHighPriorityCount;
}
MyMessagesSummaryType.prototype.toJSON = function(with_null) {
	var json = { 
		FolderSummary: (this.FolderSummary === undefined)? null : this.FolderSummary,
		NewAlertCount: (this.NewAlertCount === undefined)? null : this.NewAlertCount,
		NewMessageCount: (this.NewMessageCount === undefined)? null : this.NewMessageCount,
		UnresolvedAlertCount: (this.UnresolvedAlertCount === undefined)? null : this.UnresolvedAlertCount,
		FlaggedMessageCount: (this.FlaggedMessageCount === undefined)? null : this.FlaggedMessageCount,
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
module.exports = MyMessagesSummaryType;