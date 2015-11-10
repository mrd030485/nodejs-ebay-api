var ItemType = require('../../Trading/ItemType');

function RelistFixedPriceItemRequestType(Item, DeletedField) {

	/**
	  Documentation
	   Enables a seller to relist a single fixed-price listing that has ended on a specified eBay site. If the item was being watched when the listing ended, it will continue to be watched when the item is relisted.
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
	this.DeletedField = DeletedField;
}
RelistFixedPriceItemRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Item: (this.Item === undefined)? null : this.Item.toJSON(),
		DeletedField: (this.DeletedField === undefined)? null : this.DeletedField
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
module.exports = RelistFixedPriceItemRequestType;