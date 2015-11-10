var MyMessagesMessageIDType = require('./MyMessagesMessageIDType'),
	ItemIDType = require('./ItemIDType'),
	MyMessagesResponseDetailsType = require('./MyMessagesResponseDetailsType'),
	MyMessagesForwardDetailsType = require('./MyMessagesForwardDetailsType'),
	MyMessagesFolderType = require('./MyMessagesFolderType');

function MyMessagesMessageType(Sender, RecipientUserID, SendToName, Subject, MessageID, ExternalMessageID, ContentType, Text, Flagged, Read, CreationDate, ReceiveDate, ExpirationDate, ItemID, ResponseDetails, ForwardDetails, Folder, Content, MessageType, ListingStatus, QuestionType, Replied, HighPriority, ItemEndTime, ItemTitle, MessageMedia) {

	/**
	  Documentation
	   Container for the message information for each message specified in MessageIDs. The amount and type of information returned varies based on the requested detail level.
	 */

	/**
	 * Arrays
	 *	MessageMedia: MessageMediaType
	 */
	var _MessageID;
	var _ItemID;
	var _ResponseDetails;
	var _ForwardDetails;
	var _Folder;
	Object.defineProperty(this, 'MessageID', {
		 get: function(){
			 return _MessageID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyMessagesMessageIDType){ 
					_MessageID = value; 
				}else{
					console.log('MessageID expects type MyMessagesMessageIDType');
				}
			}
		}
	});
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
	Object.defineProperty(this, 'ResponseDetails', {
		 get: function(){
			 return _ResponseDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyMessagesResponseDetailsType){ 
					_ResponseDetails = value; 
				}else{
					console.log('ResponseDetails expects type MyMessagesResponseDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ForwardDetails', {
		 get: function(){
			 return _ForwardDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyMessagesForwardDetailsType){ 
					_ForwardDetails = value; 
				}else{
					console.log('ForwardDetails expects type MyMessagesForwardDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Folder', {
		 get: function(){
			 return _Folder;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyMessagesFolderType){ 
					_Folder = value; 
				}else{
					console.log('Folder expects type MyMessagesFolderType');
				}
			}
		}
	});
	this.Sender = Sender;
	this.RecipientUserID = RecipientUserID;
	this.SendToName = SendToName;
	this.Subject = Subject;
	this.MessageID = MessageID;
	this.ExternalMessageID = ExternalMessageID;
	this.ContentType = ContentType;
	this.Text = Text;
	this.Flagged = Flagged;
	this.Read = Read;
	this.CreationDate = CreationDate;
	this.ReceiveDate = ReceiveDate;
	this.ExpirationDate = ExpirationDate;
	this.ItemID = ItemID;
	this.ResponseDetails = ResponseDetails;
	this.ForwardDetails = ForwardDetails;
	this.Folder = Folder;
	this.Content = Content;
	this.MessageType = MessageType;
	this.ListingStatus = ListingStatus;
	this.QuestionType = QuestionType;
	this.Replied = Replied;
	this.HighPriority = HighPriority;
	this.ItemEndTime = ItemEndTime;
	this.ItemTitle = ItemTitle;
	this.MessageMedia = MessageMedia;
}
MyMessagesMessageType.prototype.toJSON = function(with_null) {
	var json = { 
		Sender: (this.Sender === undefined)? null : this.Sender,
		RecipientUserID: (this.RecipientUserID === undefined)? null : this.RecipientUserID,
		SendToName: (this.SendToName === undefined)? null : this.SendToName,
		Subject: (this.Subject === undefined)? null : this.Subject,
		MessageID: (this.MessageID === undefined)? null : this.MessageID.toJSON(),
		ExternalMessageID: (this.ExternalMessageID === undefined)? null : this.ExternalMessageID,
		ContentType: (this.ContentType === undefined)? null : this.ContentType,
		Text: (this.Text === undefined)? null : this.Text,
		Flagged: (this.Flagged === undefined)? null : this.Flagged,
		Read: (this.Read === undefined)? null : this.Read,
		CreationDate: (this.CreationDate === undefined)? null : this.CreationDate,
		ReceiveDate: (this.ReceiveDate === undefined)? null : this.ReceiveDate,
		ExpirationDate: (this.ExpirationDate === undefined)? null : this.ExpirationDate,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		ResponseDetails: (this.ResponseDetails === undefined)? null : this.ResponseDetails.toJSON(),
		ForwardDetails: (this.ForwardDetails === undefined)? null : this.ForwardDetails.toJSON(),
		Folder: (this.Folder === undefined)? null : this.Folder.toJSON(),
		Content: (this.Content === undefined)? null : this.Content,
		MessageType: (this.MessageType === undefined)? null : this.MessageType,
		ListingStatus: (this.ListingStatus === undefined)? null : this.ListingStatus,
		QuestionType: (this.QuestionType === undefined)? null : this.QuestionType,
		Replied: (this.Replied === undefined)? null : this.Replied,
		HighPriority: (this.HighPriority === undefined)? null : this.HighPriority,
		ItemEndTime: (this.ItemEndTime === undefined)? null : this.ItemEndTime,
		ItemTitle: (this.ItemTitle === undefined)? null : this.ItemTitle,
		MessageMedia: (this.MessageMedia === undefined)? null : this.MessageMedia
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
module.exports = MyMessagesMessageType;