var ItemIDType = require('../../Trading/ItemIDType'),
	UserIDType = require('../../Trading/UserIDType'),
	ItemRatingDetailArrayType = require('../../Trading/ItemRatingDetailArrayType');

function LeaveFeedbackRequestType(ItemID, CommentText, CommentType, TransactionID, TargetUser, SellerItemRatingDetailArray, OrderLineItemID, ItemArrivedWithinEDDType, ItemDeliveredWithinEDD) {

	/**
	  Documentation
	   Enables a buyer and seller to leave feedback for their order partner at the conclusion of a successful order. &nbsp;<b> Also for Half.com</b>.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _TargetUser;
	var _SellerItemRatingDetailArray;
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
	Object.defineProperty(this, 'TargetUser', {
		 get: function(){
			 return _TargetUser;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_TargetUser = value; 
				}else{
					console.log('TargetUser expects type UserIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerItemRatingDetailArray', {
		 get: function(){
			 return _SellerItemRatingDetailArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemRatingDetailArrayType){ 
					_SellerItemRatingDetailArray = value; 
				}else{
					console.log('SellerItemRatingDetailArray expects type ItemRatingDetailArrayType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.CommentText = CommentText;
	this.CommentType = CommentType;
	this.TransactionID = TransactionID;
	this.TargetUser = TargetUser;
	this.SellerItemRatingDetailArray = SellerItemRatingDetailArray;
	this.OrderLineItemID = OrderLineItemID;
	this.ItemArrivedWithinEDDType = ItemArrivedWithinEDDType;
	this.ItemDeliveredWithinEDD = ItemDeliveredWithinEDD;
}
LeaveFeedbackRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		CommentText: (this.CommentText === undefined)? null : this.CommentText,
		CommentType: (this.CommentType === undefined)? null : this.CommentType,
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		TargetUser: (this.TargetUser === undefined)? null : this.TargetUser.toJSON(),
		SellerItemRatingDetailArray: (this.SellerItemRatingDetailArray === undefined)? null : this.SellerItemRatingDetailArray.toJSON(),
		OrderLineItemID: (this.OrderLineItemID === undefined)? null : this.OrderLineItemID,
		ItemArrivedWithinEDDType: (this.ItemArrivedWithinEDDType === undefined)? null : this.ItemArrivedWithinEDDType,
		ItemDeliveredWithinEDD: (this.ItemDeliveredWithinEDD === undefined)? null : this.ItemDeliveredWithinEDD
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
module.exports = LeaveFeedbackRequestType;