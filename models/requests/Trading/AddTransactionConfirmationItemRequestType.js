var UserIDType = require('../../Trading/UserIDType'),
	AmountType = require('../../Trading/AmountType'),
	ItemIDType = require('../../Trading/ItemIDType');

function AddTransactionConfirmationItemRequestType(RecipientUserID, VerifyEligibilityOnly, RecipientPostalCode, RecipientRelationType, NegotiatedPrice, ListingDuration, ItemID, Comments) {

	/**
	  Documentation
	   Base request of the <b>AddTransactionConfirmationItem</b> call, which is used to end an eBay Motors listing and creates a new Transaction Confirmation Request (TCR) for the motor vehichle, thus enabling the TCR recipient to
                    purchase the item. You can also use this call to see if a new TCR can be created for the specified item.
	 */

	/**
	 * Arrays
	 */
	var _RecipientUserID;
	var _NegotiatedPrice;
	var _ItemID;
	Object.defineProperty(this, 'RecipientUserID', {
		 get: function(){
			 return _RecipientUserID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_RecipientUserID = value; 
				}else{
					console.log('RecipientUserID expects type UserIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'NegotiatedPrice', {
		 get: function(){
			 return _NegotiatedPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_NegotiatedPrice = value; 
				}else{
					console.log('NegotiatedPrice expects type AmountType');
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
	this.RecipientUserID = RecipientUserID;
	this.VerifyEligibilityOnly = VerifyEligibilityOnly;
	this.RecipientPostalCode = RecipientPostalCode;
	this.RecipientRelationType = RecipientRelationType;
	this.NegotiatedPrice = NegotiatedPrice;
	this.ListingDuration = ListingDuration;
	this.ItemID = ItemID;
	this.Comments = Comments;
}
AddTransactionConfirmationItemRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		RecipientUserID: (this.RecipientUserID === undefined)? null : this.RecipientUserID.toJSON(),
		VerifyEligibilityOnly: (this.VerifyEligibilityOnly === undefined)? null : this.VerifyEligibilityOnly,
		RecipientPostalCode: (this.RecipientPostalCode === undefined)? null : this.RecipientPostalCode,
		RecipientRelationType: (this.RecipientRelationType === undefined)? null : this.RecipientRelationType,
		NegotiatedPrice: (this.NegotiatedPrice === undefined)? null : this.NegotiatedPrice.toJSON(),
		ListingDuration: (this.ListingDuration === undefined)? null : this.ListingDuration,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		Comments: (this.Comments === undefined)? null : this.Comments
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
module.exports = AddTransactionConfirmationItemRequestType;