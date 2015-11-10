function BidderNoticePreferencesType(UnsuccessfulBidderNoticeIncludeMyItems) {

	/**
	  Documentation
	   
                This type is used by the <b>BidderNoticePreferences</b> container, which consists of the seller's preference for receiving contact information for unsuccessful bidders in auction listings.
            
	 */

	/**
	 * Arrays
	 */
	this.UnsuccessfulBidderNoticeIncludeMyItems = UnsuccessfulBidderNoticeIncludeMyItems;
}
BidderNoticePreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		UnsuccessfulBidderNoticeIncludeMyItems: (this.UnsuccessfulBidderNoticeIncludeMyItems === undefined)? null : this.UnsuccessfulBidderNoticeIncludeMyItems
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
module.exports = BidderNoticePreferencesType;