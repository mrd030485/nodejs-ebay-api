function GetSellingManagerTemplateAutomationRuleRequestType(SaleTemplateID) {

	/**
	  Documentation
	   Retrieves the set of Selling Manager automation rules associated with a Selling Manager template. This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	this.SaleTemplateID = SaleTemplateID;
}
GetSellingManagerTemplateAutomationRuleRequestType.prototype.toJSON = function(with_null) {
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
module.exports = GetSellingManagerTemplateAutomationRuleRequestType;