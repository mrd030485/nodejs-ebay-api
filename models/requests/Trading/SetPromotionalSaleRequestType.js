var PromotionalSaleType = require('../../Trading/PromotionalSaleType');

function SetPromotionalSaleRequestType(Action, PromotionalSaleDetails) {

	/**
	  Documentation
	   Creates or modifies a promotional sale. Promotional sales enable sellers to apply discounts and/or free shipping across many listings.
	 */

	/**
	 * Arrays
	 */
	var _PromotionalSaleDetails;
	Object.defineProperty(this, 'PromotionalSaleDetails', {
		 get: function(){
			 return _PromotionalSaleDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PromotionalSaleType){ 
					_PromotionalSaleDetails = value; 
				}else{
					console.log('PromotionalSaleDetails expects type PromotionalSaleType');
				}
			}
		}
	});
	this.Action = Action;
	this.PromotionalSaleDetails = PromotionalSaleDetails;
}
SetPromotionalSaleRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Action: (this.Action === undefined)? null : this.Action,
		PromotionalSaleDetails: (this.PromotionalSaleDetails === undefined)? null : this.PromotionalSaleDetails.toJSON()
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
module.exports = SetPromotionalSaleRequestType;