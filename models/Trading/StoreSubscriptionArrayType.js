function StoreSubscriptionArrayType(Subscription) {

	/**
	  Documentation
	   
                Set of eBay Store subscription levels.
            
	 */

	/**
	 * Arrays
	 *	Subscription: StoreSubscriptionType
	 */
	this.Subscription = Subscription;
}
StoreSubscriptionArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		Subscription: (this.Subscription === undefined)? null : this.Subscription
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
module.exports = StoreSubscriptionArrayType;