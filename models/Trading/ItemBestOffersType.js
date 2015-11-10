var BestOfferArrayType = require('./BestOfferArrayType'),
	ItemType = require('./ItemType');

function ItemBestOffersType(Role, BestOfferArray, Item) {

	/**
	  Documentation
	   All Best Offers for the item according to the filter or Best Offer ID (or both) used in the input. For the notification client usage, this response includes a single Best Offer.
	 */

	/**
	 * Arrays
	 */
	var _BestOfferArray;
	var _Item;
	Object.defineProperty(this, 'BestOfferArray', {
		 get: function(){
			 return _BestOfferArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BestOfferArrayType){ 
					_BestOfferArray = value; 
				}else{
					console.log('BestOfferArray expects type BestOfferArrayType');
				}
			}
		}
	});
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
	this.Role = Role;
	this.BestOfferArray = BestOfferArray;
	this.Item = Item;
}
ItemBestOffersType.prototype.toJSON = function(with_null) {
	var json = { 
		Role: (this.Role === undefined)? null : this.Role,
		BestOfferArray: (this.BestOfferArray === undefined)? null : this.BestOfferArray.toJSON(),
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
module.exports = ItemBestOffersType;