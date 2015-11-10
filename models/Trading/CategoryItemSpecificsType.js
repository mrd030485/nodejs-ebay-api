var NameValueListArrayType = require('./NameValueListArrayType');

function CategoryItemSpecificsType(CategoryID, ItemSpecifics) {

	/**
	  Documentation
	   Defines details about recommended names and values for custom Item Specifics.
	 */

	/**
	 * Arrays
	 */
	var _ItemSpecifics;
	Object.defineProperty(this, 'ItemSpecifics', {
		 get: function(){
			 return _ItemSpecifics;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NameValueListArrayType){ 
					_ItemSpecifics = value; 
				}else{
					console.log('ItemSpecifics expects type NameValueListArrayType');
				}
			}
		}
	});
	this.CategoryID = CategoryID;
	this.ItemSpecifics = ItemSpecifics;
}
CategoryItemSpecificsType.prototype.toJSON = function(with_null) {
	var json = { 
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		ItemSpecifics: (this.ItemSpecifics === undefined)? null : this.ItemSpecifics.toJSON()
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
module.exports = CategoryItemSpecificsType;