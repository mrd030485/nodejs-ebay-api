var CategoryType = require('./CategoryType');

function SuggestedCategoryType(Category, PercentItemFound) {

	/**
	  Documentation
	   Defines a suggested category, returned in response to a search for categories that contain listings with certain keywords in their titles and descriptions.
	 */

	/**
	 * Arrays
	 */
	var _Category;
	Object.defineProperty(this, 'Category', {
		 get: function(){
			 return _Category;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CategoryType){ 
					_Category = value; 
				}else{
					console.log('Category expects type CategoryType');
				}
			}
		}
	});
	this.Category = Category;
	this.PercentItemFound = PercentItemFound;
}
SuggestedCategoryType.prototype.toJSON = function(with_null) {
	var json = { 
		Category: (this.Category === undefined)? null : this.Category.toJSON(),
		PercentItemFound: (this.PercentItemFound === undefined)? null : this.PercentItemFound
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
module.exports = SuggestedCategoryType;