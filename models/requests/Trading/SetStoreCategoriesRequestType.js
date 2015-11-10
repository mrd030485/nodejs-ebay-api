var StoreCustomCategoryArrayType = require('../../Trading/StoreCustomCategoryArrayType');

function SetStoreCategoriesRequestType(Action, ItemDestinationCategoryID, DestinationParentCategoryID, StoreCategories) {

	/**
	  Documentation
	   Changes the category structure of an eBay store.
	 */

	/**
	 * Arrays
	 */
	var _StoreCategories;
	Object.defineProperty(this, 'StoreCategories', {
		 get: function(){
			 return _StoreCategories;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreCustomCategoryArrayType){ 
					_StoreCategories = value; 
				}else{
					console.log('StoreCategories expects type StoreCustomCategoryArrayType');
				}
			}
		}
	});
	this.Action = Action;
	this.ItemDestinationCategoryID = ItemDestinationCategoryID;
	this.DestinationParentCategoryID = DestinationParentCategoryID;
	this.StoreCategories = StoreCategories;
}
SetStoreCategoriesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Action: (this.Action === undefined)? null : this.Action,
		ItemDestinationCategoryID: (this.ItemDestinationCategoryID === undefined)? null : this.ItemDestinationCategoryID,
		DestinationParentCategoryID: (this.DestinationParentCategoryID === undefined)? null : this.DestinationParentCategoryID,
		StoreCategories: (this.StoreCategories === undefined)? null : this.StoreCategories.toJSON()
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
module.exports = SetStoreCategoriesRequestType;