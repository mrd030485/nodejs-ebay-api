function StoreCustomCategoryType(CategoryID, Name, Order, ChildCategory) {

	/**
	  Documentation
	   Configuration of a store custom category.
	 */

	/**
	 * Arrays
	 *	ChildCategory: StoreCustomCategoryType
	 */
	this.CategoryID = CategoryID;
	this.Name = Name;
	this.Order = Order;
	this.ChildCategory = ChildCategory;
}
StoreCustomCategoryType.prototype.toJSON = function(with_null) {
	var json = { 
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		Name: (this.Name === undefined)? null : this.Name,
		Order: (this.Order === undefined)? null : this.Order,
		ChildCategory: (this.ChildCategory === undefined)? null : this.ChildCategory
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
module.exports = StoreCustomCategoryType;