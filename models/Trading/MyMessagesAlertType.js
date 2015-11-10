var MyMessagesAlertIDType = require('./MyMessagesAlertIDType'),
	MyMessagesAlertResolutionStatusCode = require('./MyMessagesAlertResolutionStatusCode'),
	ItemIDType = require('./ItemIDType'),
	MyMessagesResponseDetailsType = require('./MyMessagesResponseDetailsType'),
	MyMessagesForwardDetailsType = require('./MyMessagesForwardDetailsType'),
	MyMessagesFolderType = require('./MyMessagesFolderType');

function MyMessagesAlertType(Sender, RecipientUserID, Subject, Priority, AlertID, ExternalAlertID, ContentType, Text, ResolutionStatus, Read, CreationDate, ReceiveDate, ExpirationDate, ResolutionDate, LastReadDate, ItemID, IsTimedResolution, ActionURL, ResponseDetails, ForwardDetails, Folder) {

	/**
	  Documentation
	   This type is deprecated because <b>MyMessagesAlert*</b> are deprecated. 
	 */

	/**
	 * Arrays
	 */
	var _AlertID;
	var _ResolutionStatus;
	var _ItemID;
	var _ResponseDetails;
	var _ForwardDetails;
	var _Folder;
	Object.defineProperty(this, 'AlertID', {
		 get: function(){
			 return _AlertID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyMessagesAlertIDType){ 
					_AlertID = value; 
				}else{
					console.log('AlertID expects type MyMessagesAlertIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ResolutionStatus', {
		 get: function(){
			 return _ResolutionStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyMessagesAlertResolutionStatusCode){ 
					_ResolutionStatus = value; 
				}else{
					console.log('ResolutionStatus expects type MyMessagesAlertResolutionStatusCode');
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
	this.Subject = Subject;
	this.Priority = Priority;
	this.AlertID = AlertID;
	this.ExternalAlertID = ExternalAlertID;
	this.ContentType = ContentType;
	this.Text = Text;
	this.ResolutionStatus = ResolutionStatus;
	this.Read = Read;
	this.CreationDate = CreationDate;
	this.ReceiveDate = ReceiveDate;
	this.ExpirationDate = ExpirationDate;
	this.ResolutionDate = ResolutionDate;
	this.LastReadDate = LastReadDate;
	this.ItemID = ItemID;
	this.IsTimedResolution = IsTimedResolution;
	this.ActionURL = ActionURL;
	this.ResponseDetails = ResponseDetails;
	this.ForwardDetails = ForwardDetails;
	this.Folder = Folder;
}
MyMessagesAlertType.prototype.toJSON = function(with_null) {
	var json = { 
		Sender: (this.Sender === undefined)? null : this.Sender,
		RecipientUserID: (this.RecipientUserID === undefined)? null : this.RecipientUserID,
		Subject: (this.Subject === undefined)? null : this.Subject,
		Priority: (this.Priority === undefined)? null : this.Priority,
		AlertID: (this.AlertID === undefined)? null : this.AlertID.toJSON(),
		ExternalAlertID: (this.ExternalAlertID === undefined)? null : this.ExternalAlertID,
		ContentType: (this.ContentType === undefined)? null : this.ContentType,
		Text: (this.Text === undefined)? null : this.Text,
		ResolutionStatus: (this.ResolutionStatus === undefined)? null : this.ResolutionStatus.toJSON(),
		Read: (this.Read === undefined)? null : this.Read,
		CreationDate: (this.CreationDate === undefined)? null : this.CreationDate,
		ReceiveDate: (this.ReceiveDate === undefined)? null : this.ReceiveDate,
		ExpirationDate: (this.ExpirationDate === undefined)? null : this.ExpirationDate,
		ResolutionDate: (this.ResolutionDate === undefined)? null : this.ResolutionDate,
		LastReadDate: (this.LastReadDate === undefined)? null : this.LastReadDate,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		IsTimedResolution: (this.IsTimedResolution === undefined)? null : this.IsTimedResolution,
		ActionURL: (this.ActionURL === undefined)? null : this.ActionURL,
		ResponseDetails: (this.ResponseDetails === undefined)? null : this.ResponseDetails.toJSON(),
		ForwardDetails: (this.ForwardDetails === undefined)? null : this.ForwardDetails.toJSON(),
		Folder: (this.Folder === undefined)? null : this.Folder.toJSON()
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
module.exports = MyMessagesAlertType;