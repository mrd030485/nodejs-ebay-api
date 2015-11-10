var ItemIDType = require('../../Trading/ItemIDType');

function SaveItemToSellingManagerTemplateRequestType(ItemID, ProductID, TemplateName) {

	/**
	  Documentation
	   Creates a Selling Manager listing template that is similar to an item. This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	Object.defineProperty(this, 'ItemID', {
		 get: function(){
			 return _ItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_ItemID = value; 
				}else{
					console.log('ItemID expects type ItemIDType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.ProductID = ProductID;
	this.TemplateName = TemplateName;
}
SaveItemToSellingManagerTemplateRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		ProductID: (this.ProductID === undefined)? null : this.ProductID,
		TemplateName: (this.TemplateName === undefined)? null : this.TemplateName
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
module.exports = SaveItemToSellingManagerTemplateRequestType;