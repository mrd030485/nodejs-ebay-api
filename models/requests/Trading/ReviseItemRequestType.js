var ItemType = require('../../Trading/ItemType');

function ReviseItemRequestType(Item, DeletedField, VerifyOnly) {

	/**
	  Documentation
	   Enables a seller to change the properties of a currently active listing.&nbsp;<b>Also for Half.com</b>. <br> <br> After one item in a multi-quantity fixed-price listing has been sold, you can not the values
                    in the Title, Primary Category, Secondary Category, Listing Duration, and Listing Type fields for that listing. However, all other fields in the multi-quantity, fixed-price listing are editable. <br> <br> Inputs are the
                    Item ID of the listing you are revising, and the field or fields that you are updating.
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
	this.VerifyOnly = VerifyOnly;
}
ReviseItemRequestType.prototype.toJSON = function(with_null) {
	var json = { 
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
module.exports = ReviseItemRequestType;