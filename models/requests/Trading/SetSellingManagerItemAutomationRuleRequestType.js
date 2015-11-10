var ItemIDType = require('../../Trading/ItemIDType'),
	SellingManagerAutoRelistType = require('../../Trading/SellingManagerAutoRelistType'),
	SellingManagerAutoSecondChanceOfferType = require('../../Trading/SellingManagerAutoSecondChanceOfferType');

function SetSellingManagerItemAutomationRuleRequestType(ItemID, AutomatedRelistingRule, AutomatedSecondChanceOfferRule) {

	/**
	  Documentation
	   Revises, or adds to, the set of Selling Manager automation rules associated with an item. <br> <br> This call is subject to change without notice; the deprecation process is inapplicable to this call. <br> <br>
                    Using this call, you can add an autolist rule. You also can add a second chance offer rule (restricted to auction items and auction templates). Note that autorelist rules can only be set on templates. An autorelist rule for an item
                    is inherited from a template. <br> <br> This call also enables you to specify particular information about automation rules. <br> <br> If a node is not passed in the call, the setting for the corresponding automation
                    rule remains unchanged. <br> <br> Although this call can revise (overwrite) an existing rule, this call cannot delete an automation rule. (Instead, use DeleteSellingManagerItemAutomationRule.)
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _AutomatedRelistingRule;
	var _AutomatedSecondChanceOfferRule;
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
	Object.defineProperty(this, 'AutomatedRelistingRule', {
		 get: function(){
			 return _AutomatedRelistingRule;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerAutoRelistType){ 
					_AutomatedRelistingRule = value; 
				}else{
					console.log('AutomatedRelistingRule expects type SellingManagerAutoRelistType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AutomatedSecondChanceOfferRule', {
		 get: function(){
			 return _AutomatedSecondChanceOfferRule;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerAutoSecondChanceOfferType){ 
					_AutomatedSecondChanceOfferRule = value; 
				}else{
					console.log('AutomatedSecondChanceOfferRule expects type SellingManagerAutoSecondChanceOfferType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.AutomatedRelistingRule = AutomatedRelistingRule;
	this.AutomatedSecondChanceOfferRule = AutomatedSecondChanceOfferRule;
}
SetSellingManagerItemAutomationRuleRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		AutomatedRelistingRule: (this.AutomatedRelistingRule === undefined)? null : this.AutomatedRelistingRule.toJSON(),
		AutomatedSecondChanceOfferRule: (this.AutomatedSecondChanceOfferRule === undefined)? null : this.AutomatedSecondChanceOfferRule.toJSON()
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
module.exports = SetSellingManagerItemAutomationRuleRequestType;