var UserIDType = require('./UserIDType'),
	CommentTypeCodeType = require('./CommentTypeCodeType'),
	ItemIDType = require('./ItemIDType'),
	TradingRoleCodeType = require('./TradingRoleCodeType'),
	AmountType = require('./AmountType');

function FeedbackDetailType(CommentingUser, CommentingUserScore, CommentText, CommentTime, CommentType, FeedbackResponse, Followup, ItemID, Role, ItemTitle, ItemPrice, FeedbackID, TransactionID, CommentReplaced, ResponseReplaced, FollowUpReplaced, Countable, FeedbackRevised, OrderLineItemID) {

	/**
	  Documentation
	   
                Container consisting of detailed information on a Feedback entry for a specific order line item.
            
	 */

	/**
	 * Arrays
	 */
	var _CommentingUser;
	var _CommentType;
	var _ItemID;
	var _Role;
	var _ItemPrice;
	Object.defineProperty(this, 'CommentingUser', {
		 get: function(){
			 return _CommentingUser;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_CommentingUser = value; 
				}else{
					console.log('CommentingUser expects type UserIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CommentType', {
		 get: function(){
			 return _CommentType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CommentTypeCodeType){ 
					_CommentType = value; 
				}else{
					console.log('CommentType expects type CommentTypeCodeType');
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
	Object.defineProperty(this, 'Role', {
		 get: function(){
			 return _Role;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TradingRoleCodeType){ 
					_Role = value; 
				}else{
					console.log('Role expects type TradingRoleCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemPrice', {
		 get: function(){
			 return _ItemPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ItemPrice = value; 
				}else{
					console.log('ItemPrice expects type AmountType');
				}
			}
		}
	});
	this.CommentingUser = CommentingUser;
	this.CommentingUserScore = CommentingUserScore;
	this.CommentText = CommentText;
	this.CommentTime = CommentTime;
	this.CommentType = CommentType;
	this.FeedbackResponse = FeedbackResponse;
	this.Followup = Followup;
	this.ItemID = ItemID;
	this.Role = Role;
	this.ItemTitle = ItemTitle;
	this.ItemPrice = ItemPrice;
	this.FeedbackID = FeedbackID;
	this.TransactionID = TransactionID;
	this.CommentReplaced = CommentReplaced;
	this.ResponseReplaced = ResponseReplaced;
	this.FollowUpReplaced = FollowUpReplaced;
	this.Countable = Countable;
	this.FeedbackRevised = FeedbackRevised;
	this.OrderLineItemID = OrderLineItemID;
}
FeedbackDetailType.prototype.toJSON = function(with_null) {
	var json = { 
		CommentingUser: (this.CommentingUser === undefined)? null : this.CommentingUser.toJSON(),
		CommentingUserScore: (this.CommentingUserScore === undefined)? null : this.CommentingUserScore,
		CommentText: (this.CommentText === undefined)? null : this.CommentText,
		CommentTime: (this.CommentTime === undefined)? null : this.CommentTime,
		CommentType: (this.CommentType === undefined)? null : this.CommentType.toJSON(),
		FeedbackResponse: (this.FeedbackResponse === undefined)? null : this.FeedbackResponse,
		Followup: (this.Followup === undefined)? null : this.Followup,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		Role: (this.Role === undefined)? null : this.Role.toJSON(),
		ItemTitle: (this.ItemTitle === undefined)? null : this.ItemTitle,
		ItemPrice: (this.ItemPrice === undefined)? null : this.ItemPrice.toJSON(),
		FeedbackID: (this.FeedbackID === undefined)? null : this.FeedbackID,
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		CommentReplaced: (this.CommentReplaced === undefined)? null : this.CommentReplaced,
		ResponseReplaced: (this.ResponseReplaced === undefined)? null : this.ResponseReplaced,
		FollowUpReplaced: (this.FollowUpReplaced === undefined)? null : this.FollowUpReplaced,
		Countable: (this.Countable === undefined)? null : this.Countable,
		FeedbackRevised: (this.FeedbackRevised === undefined)? null : this.FeedbackRevised,
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
module.exports = FeedbackDetailType;