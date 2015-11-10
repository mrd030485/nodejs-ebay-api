function GetSellingManagerTemplatesRequestType(SaleTemplateID) {

	/**
	  Documentation
	   Retrieves Selling Manager templates. This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	this.SaleTemplateID = SaleTemplateID;
}
GetSellingManagerTemplatesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		SaleTemplateID: (this.SaleTemplateID === undefined)? null : this.SaleTemplateID
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
module.exports = GetSellingManagerTemplatesRequestType;