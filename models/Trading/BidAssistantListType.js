function BidAssistantListType(BidGroupID, IncludeNotes) {

	/**
	  Documentation
	   This type is deprecated.
	 */

	/**
	 * Arrays
	 */
	this.BidGroupID = BidGroupID;
	this.IncludeNotes = IncludeNotes;
}
BidAssistantListType.prototype.toJSON = function(with_null) {
	var json = { 
		BidGroupID: (this.BidGroupID === undefined)? null : this.BidGroupID,
		IncludeNotes: (this.IncludeNotes === undefined)? null : this.IncludeNotes
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
module.exports = BidAssistantListType;