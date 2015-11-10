var ItemIDType = require('../../Trading/ItemIDType');

function GetAdFormatLeadsRequestType(ItemID, Status, IncludeMemberMessages, StartCreationTime, EndCreationTime) {

	/**
	  Documentation
	   Retrieves sales lead information for a lead generation listing.
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
	this.Status = Status;
	this.IncludeMemberMessages = IncludeMemberMessages;
	this.StartCreationTime = StartCreationTime;
	this.EndCreationTime = EndCreationTime;
}
GetAdFormatLeadsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		Status: (this.Status === undefined)? null : this.Status,
		IncludeMemberMessages: (this.IncludeMemberMessages === undefined)? null : this.IncludeMemberMessages,
		StartCreationTime: (this.StartCreationTime === undefined)? null : this.StartCreationTime,
		EndCreationTime: (this.EndCreationTime === undefined)? null : this.EndCreationTime
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
module.exports = GetAdFormatLeadsRequestType;