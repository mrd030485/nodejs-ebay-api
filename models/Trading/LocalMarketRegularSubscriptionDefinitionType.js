function LocalMarketRegularSubscriptionDefinitionType() {

	/**
	  Documentation
	   
                Defines the LocalMarketRegularSubscription feature. If this field is present, the corresponding feature applies to the category. The field is returned as an empty element (i.e., a boolean value is not returned). A subscription for Local Market for Vehicles
                will be returned by GetUser if a dealer has subscribed to any of the following Local Market Regular sub-types: Vehicles Regular Six Months, Vehicles Regular Special Promotion, Vehicles Regular Multistore Level S, Vehicles Regular Multistore
                Level M, or Vehicles Regular Multistore Level L. Each of these sub-types has a separate discount and billing cycle.
            
	 */

	/**
	 * Arrays
	 */
}
LocalMarketRegularSubscriptionDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalMarketRegularSubscriptionDefinitionType;