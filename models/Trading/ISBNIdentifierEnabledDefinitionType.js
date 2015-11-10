function ISBNIdentifierEnabledDefinitionType() {

	/**
	  Documentation
	   This type is deprecated and has been replaced by <b>ISBNEnabledDefinitionType</b>. 
	 */

	/**
	 * Arrays
	 */
}
ISBNIdentifierEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = ISBNIdentifierEnabledDefinitionType;