var UserIDType = require('../../Trading/UserIDType'),
	ItemIDType = require('../../Trading/ItemIDType'),
	PaginationType = require('../../Trading/PaginationType');

function GetFeedbackRequestType(UserID, FeedbackID, ItemID, TransactionID, CommentType, FeedbackType, Pagination, OrderLineItemID) {

	/**
	  Documentation
	   The <b>GetFeedback</b> call is to used to retrieve one, many, or all Feedback records for a specific eBay user. There is a filter option in the call request to limit Feedback records to those that are received, or to those
                    that are left for other buyers, as well as a filter option to limit Feedback records to those that are received as a buyer or seller.
	 */

	/**
	 * Arrays
	 */
	var _UserID;
	var _ItemID;
	var _Pagination;
	Object.defineProperty(this, 'UserID', {
		 get: function(){
			 return _UserID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_UserID = value; 
				}else{
					console.log('UserID expects type UserIDType');
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
	this.UserID = UserID;
	this.FeedbackID = FeedbackID;
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.CommentType = CommentType;
	this.FeedbackType = FeedbackType;
	this.Pagination = Pagination;
	this.OrderLineItemID = OrderLineItemID;
}
GetFeedbackRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		UserID: (this.UserID === undefined)? null : this.UserID.toJSON(),
		FeedbackID: (this.FeedbackID === undefined)? null : this.FeedbackID,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		CommentType: (this.CommentType === undefined)? null : this.CommentType,
		FeedbackType: (this.FeedbackType === undefined)? null : this.FeedbackType,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
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
module.exports = GetFeedbackRequestType;