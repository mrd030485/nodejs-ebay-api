function BidderIdType(value) {
	this.BidderIdType = value;
}
BidderIdType.prototype.toJSON = function() {
	if(this.BidderIdType !== null) {
		return {
			BidderIdType: this.BidderIdType
		};
	} else {
		return {};
	}
};
module.exports = BidderIdType;