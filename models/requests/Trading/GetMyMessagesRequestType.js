var MyMessagesAlertIDArrayType = require('../../Trading/MyMessagesAlertIDArrayType'),
	MyMessagesMessageIDArrayType = require('../../Trading/MyMessagesMessageIDArrayType'),
	MyMessagesExternalMessageIDArrayType = require('../../Trading/MyMessagesExternalMessageIDArrayType'),
	PaginationType = require('../../Trading/PaginationType');

function GetMyMessagesRequestType(AlertIDs, MessageIDs, FolderID, StartTime, EndTime, ExternalMessageIDs, Pagination, IncludeHighPriorityMessageOnly) {

	/**
	  Documentation
	   Retrieves information about the messages sent to a given user.
	 */

	/**
	 * Arrays
	 */
	var _AlertIDs;
	var _MessageIDs;
	var _ExternalMessageIDs;
	var _Pagination;
	Object.defineProperty(this, 'AlertIDs', {
		 get: function(){
			 return _AlertIDs;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyMessagesAlertIDArrayType){ 
					_AlertIDs = value; 
				}else{
					console.log('AlertIDs expects type MyMessagesAlertIDArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MessageIDs', {
		 get: function(){
			 return _MessageIDs;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyMessagesMessageIDArrayType){ 
					_MessageIDs = value; 
				}else{
					console.log('MessageIDs expects type MyMessagesMessageIDArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ExternalMessageIDs', {
		 get: function(){
			 return _ExternalMessageIDs;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyMessagesExternalMessageIDArrayType){ 
					_ExternalMessageIDs = value; 
				}else{
					console.log('ExternalMessageIDs expects type MyMessagesExternalMessageIDArrayType');
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
	this.AlertIDs = AlertIDs;
	this.MessageIDs = MessageIDs;
	this.FolderID = FolderID;
	this.StartTime = StartTime;
	this.EndTime = EndTime;
	this.ExternalMessageIDs = ExternalMessageIDs;
	this.Pagination = Pagination;
	this.IncludeHighPriorityMessageOnly = IncludeHighPriorityMessageOnly;
}
GetMyMessagesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		AlertIDs: (this.AlertIDs === undefined)? null : this.AlertIDs.toJSON(),
		MessageIDs: (this.MessageIDs === undefined)? null : this.MessageIDs.toJSON(),
		FolderID: (this.FolderID === undefined)? null : this.FolderID,
		StartTime: (this.StartTime === undefined)? null : this.StartTime,
		EndTime: (this.EndTime === undefined)? null : this.EndTime,
		ExternalMessageIDs: (this.ExternalMessageIDs === undefined)? null : this.ExternalMessageIDs.toJSON(),
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
		IncludeHighPriorityMessageOnly: (this.IncludeHighPriorityMessageOnly === undefined)? null : this.IncludeHighPriorityMessageOnly
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
module.exports = GetMyMessagesRequestType;