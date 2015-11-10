function DeleteSellingManagerTemplateAutomationRuleRequestType(SaleTemplateID, DeleteAutomatedListingRule, DeleteAutomatedRelistingRule, DeleteAutomatedSecondChanceOfferRule) {

	/**
	  Documentation
	   Removes the association of Selling Manager automation rules to a template. Returns the remaining rules in the response. This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	this.SaleTemplateID = SaleTemplateID;
	this.DeleteAutomatedListingRule = DeleteAutomatedListingRule;
	this.DeleteAutomatedRelistingRule = DeleteAutomatedRelistingRule;
	this.DeleteAutomatedSecondChanceOfferRule = DeleteAutomatedSecondChanceOfferRule;
}
DeleteSellingManagerTemplateAutomationRuleRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		SaleTemplateID: (this.SaleTemplateID === undefined)? null : this.SaleTemplateID,
		DeleteAutomatedListingRule: (this.DeleteAutomatedListingRule === undefined)? null : this.DeleteAutomatedListingRule,
		DeleteAutomatedRelistingRule: (this.DeleteAutomatedRelistingRule === undefined)? null : this.DeleteAutomatedRelistingRule,
		DeleteAutomatedSecondChanceOfferRule: (this.DeleteAutomatedSecondChanceOfferRule === undefined)? null : this.DeleteAutomatedSecondChanceOfferRule
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
module.exports = DeleteSellingManagerTemplateAutomationRuleRequestType;