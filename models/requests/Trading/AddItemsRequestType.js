function AddItemsRequestType(AddItemRequestContainer) {

	/**
	  Documentation
	   Defines from one to five items and lists them on a specified eBay site.
	 */

	/**
	 * Arrays
	 *	AddItemRequestContainer: AddItemRequestContainerType
	 */
	this.AddItemRequestContainer = AddItemRequestContainer;
}
AddItemsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		AddItemRequestContainer: (this.AddItemRequestContainer === undefined)? null : this.AddItemRequestContainer
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
module.exports = AddItemsRequestType;