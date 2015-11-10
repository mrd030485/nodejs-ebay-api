function BidGroupType(BidGroupItem, BidGroupID, BidGroupName, BidGroupStatus) {

	/**
	  Documentation
	   This type is deprecated.
	 */

	/**
	 * Arrays
	 *	BidGroupItem: BidGroupItemType
	 */
	this.BidGroupItem = BidGroupItem;
	this.BidGroupID = BidGroupID;
	this.BidGroupName = BidGroupName;
	this.BidGroupStatus = BidGroupStatus;
}
BidGroupType.prototype.toJSON = function(with_null) {
	var json = { 
		BidGroupItem: (this.BidGroupItem === undefined)? null : this.BidGroupItem,
		BidGroupID: (this.BidGroupID === undefined)? null : this.BidGroupID,
		BidGroupName: (this.BidGroupName === undefined)? null : this.BidGroupName,
		BidGroupStatus: (this.BidGroupStatus === undefined)? null : this.BidGroupStatus
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
module.exports = BidGroupType;