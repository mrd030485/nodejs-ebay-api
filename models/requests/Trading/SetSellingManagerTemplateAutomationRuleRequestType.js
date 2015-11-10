var SellingManagerAutoListType = require('../../Trading/SellingManagerAutoListType'),
	SellingManagerAutoRelistType = require('../../Trading/SellingManagerAutoRelistType'),
	SellingManagerAutoSecondChanceOfferType = require('../../Trading/SellingManagerAutoSecondChanceOfferType');

function SetSellingManagerTemplateAutomationRuleRequestType(SaleTemplateID, AutomatedListingRule, AutomatedRelistingRule, AutomatedSecondChanceOfferRule) {

	/**
	  Documentation
	   Revises, or adds to, the Selling Manager automation rules associated with a template. <br> <br> This call is subject to change without notice; the deprecation process is inapplicable to this call. <br> <br> Using
                    this call, you can add either an autorelist rule or an autolist rule, but not both. You also can add a second chance offer rule (restricted to auction items and auction templates). <br> <br> This call also enables you to
                    specify particular information about automation rules. <br> <br> If a node is not passed in the call, the setting for the corresponding automation rule remains unchanged. <br> <br> Although this call can revise
                    (overwrite) an existing rule, this call cannot delete an automation rule. (Instead, use DeleteSellingManagerTemplateAutomationRule.)
	 */

	/**
	 * Arrays
	 */
	var _AutomatedListingRule;
	var _AutomatedRelistingRule;
	var _AutomatedSecondChanceOfferRule;
	Object.defineProperty(this, 'AutomatedListingRule', {
		 get: function(){
			 return _AutomatedListingRule;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerAutoListType){ 
					_AutomatedListingRule = value; 
				}else{
					console.log('AutomatedListingRule expects type SellingManagerAutoListType');
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
	this.SaleTemplateID = SaleTemplateID;
	this.AutomatedListingRule = AutomatedListingRule;
	this.AutomatedRelistingRule = AutomatedRelistingRule;
	this.AutomatedSecondChanceOfferRule = AutomatedSecondChanceOfferRule;
}
SetSellingManagerTemplateAutomationRuleRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		SaleTemplateID: (this.SaleTemplateID === undefined)? null : this.SaleTemplateID,
		AutomatedListingRule: (this.AutomatedListingRule === undefined)? null : this.AutomatedListingRule.toJSON(),
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
module.exports = SetSellingManagerTemplateAutomationRuleRequestType;