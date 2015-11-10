function ClassifiedAdContactByEmailEnabledDefintionType() {

	/**
	  Documentation
	   Indicates if Email can be a contact method for the category
	 */

	/**
	 * Arrays
	 */
}
ClassifiedAdContactByEmailEnabledDefintionType.prototype.toJSON = function(with_null) {
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
module.exports = ClassifiedAdContactByEmailEnabledDefintionType;