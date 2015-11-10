var ItemIDType = require('../../Trading/ItemIDType'),
	UserIDType = require('../../Trading/UserIDType');

function RespondToFeedbackRequestType(FeedbackID, ItemID, TransactionID, TargetUserID, ResponseType, ResponseText, OrderLineItemID) {

	/**
	  Documentation
	   Enables a seller to reply to feedback that has been left for a user, or to post a follow-up comment to a feedback comment the user has left for someone else.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _TargetUserID;
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
	Object.defineProperty(this, 'TargetUserID', {
		 get: function(){
			 return _TargetUserID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_TargetUserID = value; 
				}else{
					console.log('TargetUserID expects type UserIDType');
				}
			}
		}
	});
	this.FeedbackID = FeedbackID;
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.TargetUserID = TargetUserID;
	this.ResponseType = ResponseType;
	this.ResponseText = ResponseText;
	this.OrderLineItemID = OrderLineItemID;
}
RespondToFeedbackRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		FeedbackID: (this.FeedbackID === undefined)? null : this.FeedbackID,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		TargetUserID: (this.TargetUserID === undefined)? null : this.TargetUserID.toJSON(),
		ResponseType: (this.ResponseType === undefined)? null : this.ResponseType,
		ResponseText: (this.ResponseText === undefined)? null : this.ResponseText,
		OrderLineItemID: (this.OrderLineItemID === undefined)? null : this.OrderLineItemID
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
module.exports = RespondToFeedbackRequestType;