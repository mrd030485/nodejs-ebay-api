function CategoryMappingType() {

	/**
	  Documentation
	   Mapping between an old category ID and an active category ID.
	 */

	/**
	 * Arrays
	 */
}
CategoryMappingType.prototype.toJSON = function(with_null) {
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
module.exports = CategoryMappingType;