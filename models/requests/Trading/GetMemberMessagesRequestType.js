var ItemIDType = require('../../Trading/ItemIDType'),
	PaginationType = require('../../Trading/PaginationType'),
	UserIDType = require('../../Trading/UserIDType');

function GetMemberMessagesRequestType(ItemID, MailMessageType, MessageStatus, DisplayToPublic, StartCreationTime, EndCreationTime, Pagination, MemberMessageID, SenderID) {

	/**
	  Documentation
	   Retrieves a list of the messages buyers have posted about your active item listings.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _Pagination;
	var _SenderID;
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
	Object.defineProperty(this, 'Pagination', {
		 get: function(){
			 return _Pagination;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaginationType){ 
					_Pagination = value; 
				}else{
					console.log('Pagination expects type PaginationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SenderID', {
		 get: function(){
			 return _SenderID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_SenderID = value; 
				}else{
					console.log('SenderID expects type UserIDType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.MailMessageType = MailMessageType;
	this.MessageStatus = MessageStatus;
	this.DisplayToPublic = DisplayToPublic;
	this.StartCreationTime = StartCreationTime;
	this.EndCreationTime = EndCreationTime;
	this.Pagination = Pagination;
	this.MemberMessageID = MemberMessageID;
	this.SenderID = SenderID;
}
GetMemberMessagesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		MailMessageType: (this.MailMessageType === undefined)? null : this.MailMessageType,
		MessageStatus: (this.MessageStatus === undefined)? null : this.MessageStatus,
		DisplayToPublic: (this.DisplayToPublic === undefined)? null : this.DisplayToPublic,
		StartCreationTime: (this.StartCreationTime === undefined)? null : this.StartCreationTime,
		EndCreationTime: (this.EndCreationTime === undefined)? null : this.EndCreationTime,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
		MemberMessageID: (this.MemberMessageID === undefined)? null : this.MemberMessageID,
		SenderID: (this.SenderID === undefined)? null : this.SenderID.toJSON()
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
module.exports = GetMemberMessagesRequestType;