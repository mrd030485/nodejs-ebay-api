function DutchBINEnabledDefinitionType() {

	/**
	  Documentation
	   
                This type is deprecated as Dutch auctions are deprecated.
            
	 */

	/**
	 * Arrays
	 */
}
DutchBINEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = DutchBINEnabledDefinitionType;