function HandlingTimeEnabledDefinitionType() {

	/**
	  Documentation
	   Defines the feature that specifies whether a handling time (dispatch time) could be enabled on the site.
	 */

	/**
	 * Arrays
	 */
}
HandlingTimeEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = HandlingTimeEnabledDefinitionType;