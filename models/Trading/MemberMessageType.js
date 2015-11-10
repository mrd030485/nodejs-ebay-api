function MemberMessageType(MessageType, QuestionType, EmailCopyToSender, HideSendersEmailAddress, DisplayToPublic, SenderID, SenderEmail, RecipientID, Subject, Body, MessageID, ParentMessageID, MessageMedia) {

	/**
	  Documentation
	   Container for individual message information.
	 */

	/**
	 * Arrays
	 *	MessageMedia: MessageMediaType
	 */
	this.MessageType = MessageType;
	this.QuestionType = QuestionType;
	this.EmailCopyToSender = EmailCopyToSender;
	this.HideSendersEmailAddress = HideSendersEmailAddress;
	this.DisplayToPublic = DisplayToPublic;
	this.SenderID = SenderID;
	this.SenderEmail = SenderEmail;
	this.RecipientID = RecipientID;
	this.Subject = Subject;
	this.Body = Body;
	this.MessageID = MessageID;
	this.ParentMessageID = ParentMessageID;
	this.MessageMedia = MessageMedia;
}
MemberMessageType.prototype.toJSON = function(with_null) {
	var json = { 
		MessageType: (this.MessageType === undefined)? null : this.MessageType,
		QuestionType: (this.QuestionType === undefined)? null : this.QuestionType,
		EmailCopyToSender: (this.EmailCopyToSender === undefined)? null : this.EmailCopyToSender,
		HideSendersEmailAddress: (this.HideSendersEmailAddress === undefined)? null : this.HideSendersEmailAddress,
		DisplayToPublic: (this.DisplayToPublic === undefined)? null : this.DisplayToPublic,
		SenderID: (this.SenderID === undefined)? null : this.SenderID,
		SenderEmail: (this.SenderEmail === undefined)? null : this.SenderEmail,
		RecipientID: (this.RecipientID === undefined)? null : this.RecipientID,
		Subject: (this.Subject === undefined)? null : this.Subject,
		Body: (this.Body === undefined)? null : this.Body,
		MessageID: (this.MessageID === undefined)? null : this.MessageID,
		ParentMessageID: (this.ParentMessageID === undefined)? null : this.ParentMessageID,
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
module.exports = MemberMessageType;