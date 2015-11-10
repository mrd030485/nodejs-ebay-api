function MaximumUnpaidItemStrikesCountDetailsType(Count) {

	/**
	  Documentation
	   
                Type defining the <b>MaximumUnpaidItemStrikesCount</b> container that is returned in the <b>GeteBayDetails</b> response. The <b>MaximumUnpaidItemStrikesCount</b> container consists of multiple <b>Count</b>
                fields with values that can be used in the <b>BuyerRequirementDetails.MaximumUnpaidItemStrikesInfo.Count</b> field when using the Trading API to add, revise, or relist an item. <br><br> The <b>Item.MaximumUnpaidItemStrikesInfo</b>
                container in Add/Revise/Relist API calls is used to block buyers with unpaid item strikes equal to or exceeding the specified <b>Count</b> value during the specified <b>Period</b> value from buying/bidding on the
                item.
            
	 */

	/**
	 * Arrays
	 */
	this.Count = Count;
}
MaximumUnpaidItemStrikesCountDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Count: (this.Count === undefined)? null : this.Count
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
module.exports = MaximumUnpaidItemStrikesCountDetailsType;