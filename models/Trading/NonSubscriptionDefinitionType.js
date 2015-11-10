function NonSubscriptionDefinitionType() {

	/**
	  Documentation
	   This is for FSBO. Each of the subscriptions will have following options, which will define "National" vs "Local" ad format listing. "LocalOptional" : This will allow national and local listing. "LocalOnly" : Seller can have Local listings
                    only. "NationalOnly" : Seller can not opt into local only exposure. It has to be national listing.
	 */

	/**
	 * Arrays
	 */
}
NonSubscriptionDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = NonSubscriptionDefinitionType;