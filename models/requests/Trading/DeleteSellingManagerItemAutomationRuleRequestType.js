var ItemIDType = require('../../Trading/ItemIDType');

function DeleteSellingManagerItemAutomationRuleRequestType(ItemID, DeleteAutomatedRelistingRule, DeleteAutomatedSecondChanceOfferRule) {

	/**
	  Documentation
	   Removes the association of Selling Manager automation rules to an item. Returns the remaining rules in the response. <br><br> This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	Object.defineProperty(this, 'ItemID', {
		 get: function(){
			 return _ItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_ItemID = value; 
				}else{
					console.log('ItemID expects type ItemIDType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.DeleteAutomatedRelistingRule = DeleteAutomatedRelistingRule;
	this.DeleteAutomatedSecondChanceOfferRule = DeleteAutomatedSecondChanceOfferRule;
}
DeleteSellingManagerItemAutomationRuleRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
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
module.exports = DeleteSellingManagerItemAutomationRuleRequestType;