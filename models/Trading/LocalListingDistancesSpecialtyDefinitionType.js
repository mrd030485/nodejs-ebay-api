function LocalListingDistancesSpecialtyDefinitionType() {

	/**
	  Documentation
	   
                Defines the LocalListingDistancesSpecialty feature. This feature displays the supported local listing distances for items listed by sellers subscribed to Local Market for Specialty Vehicles.
            
	 */

	/**
	 * Arrays
	 */
}
LocalListingDistancesSpecialtyDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalListingDistancesSpecialtyDefinitionType;