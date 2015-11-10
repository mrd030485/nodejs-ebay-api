var ItemIDType = require('./ItemIDType'),
	UserIDType = require('./UserIDType');

function ItemBidDetailsType(ItemID, CategoryID, BidCount, SellerID, LastBidTime) {

	/**
	  Documentation
	   Contains bidding details information of a user on an item.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _SellerID;
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
	Object.defineProperty(this, 'SellerID', {
		 get: function(){
			 return _SellerID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_SellerID = value; 
				}else{
					console.log('SellerID expects type UserIDType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.CategoryID = CategoryID;
	this.BidCount = BidCount;
	this.SellerID = SellerID;
	this.LastBidTime = LastBidTime;
}
ItemBidDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		BidCount: (this.BidCount === undefined)? null : this.BidCount,
		SellerID: (this.SellerID === undefined)? null : this.SellerID.toJSON(),
		LastBidTime: (this.LastBidTime === undefined)? null : this.LastBidTime
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
module.exports = ItemBidDetailsType;