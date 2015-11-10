function SellingManagerTemplateDetailsArrayType(SellingManagerTemplateDetails) {

	/**
	  Documentation
	   A list of Selling Manager templates.
	 */

	/**
	 * Arrays
	 *	SellingManagerTemplateDetails: SellingManagerTemplateDetailsType
	 */
	this.SellingManagerTemplateDetails = SellingManagerTemplateDetails;
}
SellingManagerTemplateDetailsArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		SellingManagerTemplateDetails: (this.SellingManagerTemplateDetails === undefined)? null : this.SellingManagerTemplateDetails
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
module.exports = SellingManagerTemplateDetailsArrayType;