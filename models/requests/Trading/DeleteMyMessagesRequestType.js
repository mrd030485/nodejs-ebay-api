var MyMessagesAlertIDArrayType = require('../../Trading/MyMessagesAlertIDArrayType'),
	MyMessagesMessageIDArrayType = require('../../Trading/MyMessagesMessageIDArrayType');

function DeleteMyMessagesRequestType(AlertIDs, MessageIDs) {

	/**
	  Documentation
	   Removes selected messages for a given user.
	 */

	/**
	 * Arrays
	 */
	var _AlertIDs;
	var _MessageIDs;
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
	this.AlertIDs = AlertIDs;
	this.MessageIDs = MessageIDs;
}
DeleteMyMessagesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		AlertIDs: (this.AlertIDs === undefined)? null : this.AlertIDs.toJSON(),
		MessageIDs: (this.MessageIDs === undefined)? null : this.MessageIDs.toJSON()
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
module.exports = DeleteMyMessagesRequestType;