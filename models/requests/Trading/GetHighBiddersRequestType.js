var ItemIDType = require('../../Trading/ItemIDType');

function GetHighBiddersRequestType(ItemID) {

	/**
	  Documentation
	   This type is deprecated as the call is no longer available. 
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
}
GetHighBiddersRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON()
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
module.exports = GetHighBiddersRequestType;