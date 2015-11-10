var ItemType = require('../../Trading/ItemType');

function AddSellingManagerTemplateRequestType(Item, SaleTemplateName, ProductID) {

	/**
	  Documentation
	   The base request for the <b>AddSellingManagerTemplate</b> call, which is used to create a Selling Manager listing template. Each Selling Manager listing template must be associated with an existing Selling Manager product,
                    and each product can have up to 20 listing templates associated with it.
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
	this.Item = Item;
	this.SaleTemplateName = SaleTemplateName;
	this.ProductID = ProductID;
}
AddSellingManagerTemplateRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Item: (this.Item === undefined)? null : this.Item.toJSON(),
		SaleTemplateName: (this.SaleTemplateName === undefined)? null : this.SaleTemplateName,
		ProductID: (this.ProductID === undefined)? null : this.ProductID
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
module.exports = AddSellingManagerTemplateRequestType;