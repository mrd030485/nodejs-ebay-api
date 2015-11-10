var ItemType = require('./ItemType'),
	MemberMessageType = require('./MemberMessageType'),
	MessageStatusTypeCodeType = require('./MessageStatusTypeCodeType');

function MemberMessageExchangeType(Item, Question, Response, MessageStatus, CreationDate, LastModifiedDate, MessageMedia) {

	/**
	  Documentation
	   
                Container for message metadata.
            
	 */

	/**
	 * Arrays
	 *	MessageMedia: MessageMediaType
	 */
	var _Item;
	var _Question;
	var _MessageStatus;
	Object.defineProperty(this, 'Item', {
		 get: function(){
			 return _Item;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemType){ 
					_Item = value; 
				}else{
					console.log('Item expects type ItemType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Question', {
		 get: function(){
			 return _Question;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MemberMessageType){ 
					_Question = value; 
				}else{
					console.log('Question expects type MemberMessageType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MessageStatus', {
		 get: function(){
			 return _MessageStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MessageStatusTypeCodeType){ 
					_MessageStatus = value; 
				}else{
					console.log('MessageStatus expects type MessageStatusTypeCodeType');
				}
			}
		}
	});
	this.Item = Item;
	this.Question = Question;
	this.Response = Response;
	this.MessageStatus = MessageStatus;
	this.CreationDate = CreationDate;
	this.LastModifiedDate = LastModifiedDate;
	this.MessageMedia = MessageMedia;
}
MemberMessageExchangeType.prototype.toJSON = function(with_null) {
	var json = { 
		Item: (this.Item === undefined)? null : this.Item.toJSON(),
		Question: (this.Question === undefined)? null : this.Question.toJSON(),
		Response: (this.Response === undefined)? null : this.Response,
		MessageStatus: (this.MessageStatus === undefined)? null : this.MessageStatus.toJSON(),
		CreationDate: (this.CreationDate === undefined)? null : this.CreationDate,
		LastModifiedDate: (this.LastModifiedDate === undefined)? null : this.LastModifiedDate,
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
module.exports = MemberMessageExchangeType;