function ClassifiedAdContactByPhoneEnabledDefinitionType() {

	/**
	  Documentation
	   Indicates whether the telephone can be a contact method for the category.
	 */

	/**
	 * Arrays
	 */
}
ClassifiedAdContactByPhoneEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = ClassifiedAdContactByPhoneEnabledDefinitionType;