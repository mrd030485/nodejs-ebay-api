var ItemIDType = require('../../Trading/ItemIDType');

function GetAllBiddersRequestType(ItemID, CallMode, IncludeBiddingSummary) {

	/**
	  Documentation
	   Provides three modes for retrieving a list of the users that bid on a listing.
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
	this.CallMode = CallMode;
	this.IncludeBiddingSummary = IncludeBiddingSummary;
}
GetAllBiddersRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		CallMode: (this.CallMode === undefined)? null : this.CallMode,
		IncludeBiddingSummary: (this.IncludeBiddingSummary === undefined)? null : this.IncludeBiddingSummary
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
module.exports = GetAllBiddersRequestType;