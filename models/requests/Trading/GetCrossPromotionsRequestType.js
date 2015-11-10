var ItemIDType = require('../../Trading/ItemIDType');

function GetCrossPromotionsRequestType(ItemID, PromotionMethod, PromotionViewMode) {

	/**
	  Documentation
	   <b>This call is deprecated.</b>
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
	this.PromotionMethod = PromotionMethod;
	this.PromotionViewMode = PromotionViewMode;
}
GetCrossPromotionsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		PromotionMethod: (this.PromotionMethod === undefined)? null : this.PromotionMethod,
		PromotionViewMode: (this.PromotionViewMode === undefined)? null : this.PromotionViewMode
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
module.exports = GetCrossPromotionsRequestType;