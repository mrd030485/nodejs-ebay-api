function ExpressEnabledDefinitionType() {

	/**
	  Documentation
	   This type is deprecated as the eBay Express is no longer available. 
	 */

	/**
	 * Arrays
	 */
}
ExpressEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = ExpressEnabledDefinitionType;