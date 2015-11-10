function SkypeMeNonTransactionalEnabledDefinitionType() {

	/**
	  Documentation
	   Defines the feature of adding Skype buttons to listings for nontransactional formats (e.g., the advertisement format). If the field is present, the corresponding feature applies to the category. The field is returned as an empty element
                    (i.e., a boolean value is not returned).
	 */

	/**
	 * Arrays
	 */
}
SkypeMeNonTransactionalEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = SkypeMeNonTransactionalEnabledDefinitionType;