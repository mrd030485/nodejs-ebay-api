function CategoryArrayType(Category) {

	/**
	  Documentation
	   
                Container for a list of categories.
            
	 */

	/**
	 * Arrays
	 *	Category: CategoryType
	 */
	this.Category = Category;
}
CategoryArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		Category: (this.Category === undefined)? null : this.Category
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
module.exports = CategoryArrayType;