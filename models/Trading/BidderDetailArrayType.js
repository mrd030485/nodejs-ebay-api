function BidderDetailArrayType(BidderDetail) {

	/**
	  Documentation
	   This type is deprecated.
	 */

	/**
	 * Arrays
	 *	BidderDetail: BidderDetailType
	 */
	this.BidderDetail = BidderDetail;
}
BidderDetailArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		BidderDetail: (this.BidderDetail === undefined)? null : this.BidderDetail
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
module.exports = BidderDetailArrayType;