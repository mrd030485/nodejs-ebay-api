function StoreCustomCategoryArrayType(CustomCategory) {

	/**
	  Documentation
	   Set of custom categories for the Store.
	 */

	/**
	 * Arrays
	 *	CustomCategory: StoreCustomCategoryType
	 */
	this.CustomCategory = CustomCategory;
}
StoreCustomCategoryArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		CustomCategory: (this.CustomCategory === undefined)? null : this.CustomCategory
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
module.exports = StoreCustomCategoryArrayType;