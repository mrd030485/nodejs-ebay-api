var ItemIDType = require('../../Trading/ItemIDType');

function EndItemRequestType(ItemID, EndingReason, SellerInventoryID) {

	/**
	  Documentation
	   Ends the specified item listing before the date and time at which it would normally end per the listing duration.&nbsp;<b>Also for Half.com</b>.
	 */

	/**
	 * Arrays
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
	this.EndingReason = EndingReason;
	this.SellerInventoryID = SellerInventoryID;
}
EndItemRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		EndingReason: (this.EndingReason === undefined)? null : this.EndingReason,
		SellerInventoryID: (this.SellerInventoryID === undefined)? null : this.SellerInventoryID
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
module.exports = EndItemRequestType;