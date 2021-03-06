var ItemIDType = require('./ItemIDType');

function CrossPromotionsType(ItemID, PrimaryScheme, PromotionMethod, SellerID, ShippingDiscount, StoreName, PromotedItem) {

	/**
	  Documentation
	   eBay Store Cross Promotions are no longer supported in the Trading API, so the <b>CrossPromotion</b> container will either not be returned, or, if it is returned, the data in the container may not be accurate. Contains one
                    or more items cross-promoted with the display or purchase of a referring item.
	 */

	/**
	 * Arrays
	 *	PromotedItem: PromotedItemType
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
	this.PrimaryScheme = PrimaryScheme;
	this.PromotionMethod = PromotionMethod;
	this.SellerID = SellerID;
	this.ShippingDiscount = ShippingDiscount;
	this.StoreName = StoreName;
	this.PromotedItem = PromotedItem;
}
CrossPromotionsType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		PrimaryScheme: (this.PrimaryScheme === undefined)? null : this.PrimaryScheme,
		PromotionMethod: (this.PromotionMethod === undefined)? null : this.PromotionMethod,
		SellerID: (this.SellerID === undefined)? null : this.SellerID,
		ShippingDiscount: (this.ShippingDiscount === undefined)? null : this.ShippingDiscount,
		StoreName: (this.StoreName === undefined)? null : this.StoreName,
		PromotedItem: (this.PromotedItem === undefined)? null : this.PromotedItem
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
module.exports = CrossPromotionsType;