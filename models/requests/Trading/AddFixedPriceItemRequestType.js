var ItemType = require('../../Trading/ItemType');

function AddFixedPriceItemRequestType(Item) {

	/**
	  Documentation
	   Defines and lists a new fixed-price listing. The main difference between <b>AddFixedPriceItem</b> and <b>AddItem</b> is that <b>AddFixedPriceItem</b> supports the creation of fixed-price listings only,
                    whereas <b>AddItem</b> supports all listing formats.<br> <br> Also, only <b>AddFixedPriceItem</b> supports multi-variation listings and tracking inventory by SKU. <b>AddItem</b> does
                    not support Variations or the <b>InventoryTrackingMethod</b> field.
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
AddFixedPriceItemRequestType.prototype.toJSON = function(with_null) {
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
module.exports = AddFixedPriceItemRequestType;