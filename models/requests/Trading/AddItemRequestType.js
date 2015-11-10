var ItemType = require('../../Trading/ItemType');

function AddItemRequestType(Item) {

	/**
	  Documentation
	   Base request type for the <b>AddItem</b> call, which is used to create a single fixed-price, auction, classified ad, or Half.com listing.
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
}
AddItemRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Item: (this.Item === undefined)? null : this.Item.toJSON()
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
module.exports = AddItemRequestType;