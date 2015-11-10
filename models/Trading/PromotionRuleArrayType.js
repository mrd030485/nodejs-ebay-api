function PromotionRuleArrayType(PromotionRule) {

	/**
	  Documentation
	   
                This type is deprecated as Cross Promotions are no longer supported in the APIs.
                
            
	 */

	/**
	 * Arrays
	 *	PromotionRule: PromotionRuleType
	 */
	this.PromotionRule = PromotionRule;
}
PromotionRuleArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		PromotionRule: (this.PromotionRule === undefined)? null : this.PromotionRule
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
module.exports = PromotionRuleArrayType;