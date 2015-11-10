function LocalMarketStreetCountDefinitionType() {

	/**
	  Documentation
	   
                Indicates which address option the category supports for Classified Ad format listings. Added for Local Market users.
            
	 */

	/**
	 * Arrays
	 */
}
LocalMarketStreetCountDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = LocalMarketStreetCountDefinitionType;