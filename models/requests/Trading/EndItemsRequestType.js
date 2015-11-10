function EndItemsRequestType(EndItemRequestContainer) {

	/**
	  Documentation
	   Ends up to 10 specified item listings before the date and time at which it would normally end per the listing duration.&nbsp;<b>Also for Half.com</b>.
	 */

	/**
	 * Arrays
	 *	EndItemRequestContainer: EndItemRequestContainerType
	 */
	this.EndItemRequestContainer = EndItemRequestContainer;
}
EndItemsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		EndItemRequestContainer: (this.EndItemRequestContainer === undefined)? null : this.EndItemRequestContainer
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
module.exports = EndItemsRequestType;