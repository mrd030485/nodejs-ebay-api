var ItemType = require('./ItemType');

function AddItemRequestContainerType(Item, MessageID) {

	/**
	  Documentation
	   Type defining the <b>AddItemRequestContainer</b> containers that are used in an <b>AddItems</b> call. An <b>AddItemRequestContainer</b> container is required for each item being created through an <b>AddItems</b>
                    call. Each item being created through an <b>AddItems</b> call is identified through a unique <b>AddItemRequestContainer.MessageID</b> value that is defined by the seller.
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
	this.MessageID = MessageID;
}
AddItemRequestContainerType.prototype.toJSON = function(with_null) {
	var json = { 
		Item: (this.Item === undefined)? null : this.Item.toJSON(),
		MessageID: (this.MessageID === undefined)? null : this.MessageID
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
module.exports = AddItemRequestContainerType;