function StoreCustomListingHeaderLinkType(LinkID, Order, LinkType) {

	/**
	  Documentation
	   Custom listing header link.
	 */

	/**
	 * Arrays
	 */
	this.LinkID = LinkID;
	this.Order = Order;
	this.LinkType = LinkType;
}
StoreCustomListingHeaderLinkType.prototype.toJSON = function(with_null) {
	var json = { 
		LinkID: (this.LinkID === undefined)? null : this.LinkID,
		Order: (this.Order === undefined)? null : this.Order,
		LinkType: (this.LinkType === undefined)? null : this.LinkType
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
module.exports = StoreCustomListingHeaderLinkType;