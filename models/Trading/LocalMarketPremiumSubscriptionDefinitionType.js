function LocalMarketPremiumSubscriptionDefinitionType() {

	/**
	  Documentation
	   Defines the LocalMarketPremiumSubscription feature. If this field is present, the corresponding feature applies to the category. The field is returned as an empty element (i.e., a boolean value is not returned).
	 */

	/**
	 * Arrays
	 */
}
LocalMarketPremiumSubscriptionDefinitionType.prototype.toJSON = function(with_null) {
	var json = { 
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
module.exports = LocalMarketPremiumSubscriptionDefinitionType;