function ReviseInventoryStatusRequestType(InventoryStatus) {

	/**
	  Documentation
	   Enables a seller to change the price and quantity of a currently- active, fixed-price listing. Using ReviseInventoryStatus to modify data qualifies as revising the listing. <br><br> Inputs are the item IDs or SKUs of the listings
                    being revised, and the price and quantity that are being changed for each revision. Only applicable to fixed-price listings.<br> <br><br> Changing the price or quantity of a currently- active, fixed-price listing
                    does not reset the Best Match performance score. For Best Match information related to multi-variation listings, see the Best Match information at the following topic: <a href="http://pages.ebay.com/sell/variation/">Multi-quantity
                    Fixed Price listings with variations</a>.<br> <br><br> As with all listing calls, the site you specify in the request URL (for SOAP) or the X-EBAY-API-SITEID HTTP header (for XML) should match the original listing's
                    <b>Item.Site</b> value. In particular, this is a best practice when you submit new and revised listings.<br> <br><b> For Large Merchant Services users:</b> When you use ReviseInventoryStatus within
                    a Merchant Data file, it must be enclosed within two BulkDataExchangeRequest tags. A namespace is returned in the BulkDataExchangeResponseType (top level) of the response. The BulkDataExchange tags are not shown in the call input/output
                    descriptions.
	 */

	/**
	 * Arrays
	 *	InventoryStatus: InventoryStatusType
	 */
	this.InventoryStatus = InventoryStatus;
}
ReviseInventoryStatusRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		InventoryStatus: (this.InventoryStatus === undefined)? null : this.InventoryStatus
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
module.exports = ReviseInventoryStatusRequestType;