var ItemType = require('../../Trading/ItemType');

function ReviseSellingManagerTemplateRequestType(SaleTemplateID, ProductID, SaleTemplateName, Item, DeletedField, VerifyOnly) {

	/**
	  Documentation
	   Revises a Selling Manager template. This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	var _Item;
	Object.defineProperty(this, 'Item', {
		 get: function(){
			 return _Item;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemType){ 
					_Item = value; 
				}else{
					console.log('Item expects type ItemType');
				}
			}
		}
	});
	this.SaleTemplateID = SaleTemplateID;
	this.ProductID = ProductID;
	this.SaleTemplateName = SaleTemplateName;
	this.Item = Item;
	this.DeletedField = DeletedField;
	this.VerifyOnly = VerifyOnly;
}
ReviseSellingManagerTemplateRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		SaleTemplateID: (this.SaleTemplateID === undefined)? null : this.SaleTemplateID,
		ProductID: (this.ProductID === undefined)? null : this.ProductID,
		SaleTemplateName: (this.SaleTemplateName === undefined)? null : this.SaleTemplateName,
		Item: (this.Item === undefined)? null : this.Item.toJSON(),
		DeletedField: (this.DeletedField === undefined)? null : this.DeletedField,
		VerifyOnly: (this.VerifyOnly === undefined)? null : this.VerifyOnly
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
module.exports = ReviseSellingManagerTemplateRequestType;