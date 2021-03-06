function CompatibleVehicleTypeDefinitionType() {

	/**
	  Documentation
	   Defines the vehicle type to which parts compatibility applies. If the field is present, the corresponding feature applies to the site. The field is returned as an empty element (e.g., a boolean value is not returned).
	 */

	/**
	 * Arrays
	 */
}
CompatibleVehicleTypeDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = CompatibleVehicleTypeDefinitionType;