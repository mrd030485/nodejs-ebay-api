function ClassifiedAdStreetCountDefinitionType() {

	/**
	  Documentation
	   
                Indicates which address option the category supports for Classified Ad format listings. Added for the For Sale By Owner format.
            
	 */

	/**
	 * Arrays
	 */
}
ClassifiedAdStreetCountDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = ClassifiedAdStreetCountDefinitionType;