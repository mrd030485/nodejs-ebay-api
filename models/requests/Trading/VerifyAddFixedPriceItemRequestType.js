var ItemType = require('../../Trading/ItemType');

function VerifyAddFixedPriceItemRequestType(Item) {

	/**
	  Documentation
	   Enables a seller to test the definition of a new fixed-price listing by submitting the definition to eBay without creating a actual listing.
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
VerifyAddFixedPriceItemRequestType.prototype.toJSON = function(with_null) {
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
module.exports = VerifyAddFixedPriceItemRequestType;