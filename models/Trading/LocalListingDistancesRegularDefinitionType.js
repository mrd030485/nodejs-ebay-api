function LocalListingDistancesRegularDefinitionType() {

	/**
	  Documentation
	   
                Defines the LocalListingDistancesRegular feature. This feature displays all the supported local listing distances for items listed by sellers subscribed to Local Market for Vehicles.
            
	 */

	/**
	 * Arrays
	 */
}
LocalListingDistancesRegularDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalListingDistancesRegularDefinitionType;