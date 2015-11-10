function BiddingSummaryType(SummaryDays, TotalBids, BidActivityWithSeller, BidsToUniqueSellers, BidsToUniqueCategories, BidRetractions, ItemBidDetails) {

	/**
	  Documentation
	   Type used by the <b>BiddingSummary</b> container, which is returned in the <b>GetAllBidders</b> response if the <b>IncludeBiddingSummary</b> boolean field is included and set to <code>true</code>
                    in the call request. The <b>BiddingSummary</b> container consists of bidding history information for a specific bidder (specified in the <b>User.UserID</b> field).
	 */

	/**
	 * Arrays
	 *	ItemBidDetails: ItemBidDetailsType
	 */
	this.SummaryDays = SummaryDays;
	this.TotalBids = TotalBids;
	this.BidActivityWithSeller = BidActivityWithSeller;
	this.BidsToUniqueSellers = BidsToUniqueSellers;
	this.BidsToUniqueCategories = BidsToUniqueCategories;
	this.BidRetractions = BidRetractions;
	this.ItemBidDetails = ItemBidDetails;
}
BiddingSummaryType.prototype.toJSON = function(with_null) {
	var json = { 
		SummaryDays: (this.SummaryDays === undefined)? null : this.SummaryDays,
		TotalBids: (this.TotalBids === undefined)? null : this.TotalBids,
		BidActivityWithSeller: (this.BidActivityWithSeller === undefined)? null : this.BidActivityWithSeller,
		BidsToUniqueSellers: (this.BidsToUniqueSellers === undefined)? null : this.BidsToUniqueSellers,
		BidsToUniqueCategories: (this.BidsToUniqueCategories === undefined)? null : this.BidsToUniqueCategories,
		BidRetractions: (this.BidRetractions === undefined)? null : this.BidRetractions,
		ItemBidDetails: (this.ItemBidDetails === undefined)? null : this.ItemBidDetails
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
module.exports = BiddingSummaryType;