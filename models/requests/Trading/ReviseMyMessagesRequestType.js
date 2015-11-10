var MyMessagesMessageIDArrayType = require('../../Trading/MyMessagesMessageIDArrayType'),
	MyMessagesAlertIDArrayType = require('../../Trading/MyMessagesAlertIDArrayType');

function ReviseMyMessagesRequestType(MessageIDs, AlertIDs, Read, Flagged, FolderID) {

	/**
	  Documentation
	   Sets the read state for messages, sets the flagged state of messages, and moves messages into and out of folders.
	 */

	/**
	 * Arrays
	 */
	var _MessageIDs;
	var _AlertIDs;
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
	this.MessageIDs = MessageIDs;
	this.AlertIDs = AlertIDs;
	this.Read = Read;
	this.Flagged = Flagged;
	this.FolderID = FolderID;
}
ReviseMyMessagesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		MessageIDs: (this.MessageIDs === undefined)? null : this.MessageIDs.toJSON(),
		AlertIDs: (this.AlertIDs === undefined)? null : this.AlertIDs.toJSON(),
		Read: (this.Read === undefined)? null : this.Read,
		Flagged: (this.Flagged === undefined)? null : this.Flagged,
		FolderID: (this.FolderID === undefined)? null : this.FolderID
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
module.exports = ReviseMyMessagesRequestType;