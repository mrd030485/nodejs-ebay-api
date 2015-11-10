function LocalListingDistancesNonSubscriptionDefinitionType() {

	/**
	  Documentation
	   Defines the LocalListingDistancesNonSubscription feature. This feature displays all the supported local listing distances for items listed by sellers who have not subscribed to either Local Market for Vehicles or Local Market for Specialty
                    Vehicles.
                
	 */

	/**
	 * Arrays
	 */
}
LocalListingDistancesNonSubscriptionDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalListingDistancesNonSubscriptionDefinitionType;