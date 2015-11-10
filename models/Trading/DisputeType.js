var DisputeIDType = require('./DisputeIDType'),
	UserIDType = require('./UserIDType'),
	ItemType = require('./ItemType');

function DisputeType(DisputeID, DisputeRecordType, DisputeState, DisputeStatus, OtherPartyRole, OtherPartyName, UserRole, BuyerUserID, SellerUserID, TransactionID, Item, DisputeReason, DisputeExplanation, DisputeCreditEligibility, DisputeCreatedTime, DisputeModifiedTime, DisputeResolution, DisputeMessage, Escalation, PurchaseProtection, OrderLineItemID) {

	/**
	  Documentation
	   Contains all information describing a dispute.
	 */

	/**
	 * Arrays
	 *	DisputeResolution: DisputeResolutionType
	 *	DisputeMessage: DisputeMessageType
	 */
	var _DisputeID;
	var _BuyerUserID;
	var _SellerUserID;
	var _Item;
	Object.defineProperty(this, 'DisputeID', {
		 get: function(){
			 return _DisputeID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisputeIDType){ 
					_DisputeID = value; 
				}else{
					console.log('DisputeID expects type DisputeIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BuyerUserID', {
		 get: function(){
			 return _BuyerUserID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_BuyerUserID = value; 
				}else{
					console.log('BuyerUserID expects type UserIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerUserID', {
		 get: function(){
			 return _SellerUserID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_SellerUserID = value; 
				}else{
					console.log('SellerUserID expects type UserIDType');
				}
			}
		}
	});
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
	this.DisputeID = DisputeID;
	this.DisputeRecordType = DisputeRecordType;
	this.DisputeState = DisputeState;
	this.DisputeStatus = DisputeStatus;
	this.OtherPartyRole = OtherPartyRole;
	this.OtherPartyName = OtherPartyName;
	this.UserRole = UserRole;
	this.BuyerUserID = BuyerUserID;
	this.SellerUserID = SellerUserID;
	this.TransactionID = TransactionID;
	this.Item = Item;
	this.DisputeReason = DisputeReason;
	this.DisputeExplanation = DisputeExplanation;
	this.DisputeCreditEligibility = DisputeCreditEligibility;
	this.DisputeCreatedTime = DisputeCreatedTime;
	this.DisputeModifiedTime = DisputeModifiedTime;
	this.DisputeResolution = DisputeResolution;
	this.DisputeMessage = DisputeMessage;
	this.Escalation = Escalation;
	this.PurchaseProtection = PurchaseProtection;
	this.OrderLineItemID = OrderLineItemID;
}
DisputeType.prototype.toJSON = function(with_null) {
	var json = { 
		DisputeID: (this.DisputeID === undefined)? null : this.DisputeID.toJSON(),
		DisputeRecordType: (this.DisputeRecordType === undefined)? null : this.DisputeRecordType,
		DisputeState: (this.DisputeState === undefined)? null : this.DisputeState,
		DisputeStatus: (this.DisputeStatus === undefined)? null : this.DisputeStatus,
		OtherPartyRole: (this.OtherPartyRole === undefined)? null : this.OtherPartyRole,
		OtherPartyName: (this.OtherPartyName === undefined)? null : this.OtherPartyName,
		UserRole: (this.UserRole === undefined)? null : this.UserRole,
		BuyerUserID: (this.BuyerUserID === undefined)? null : this.BuyerUserID.toJSON(),
		SellerUserID: (this.SellerUserID === undefined)? null : this.SellerUserID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		Item: (this.Item === undefined)? null : this.Item.toJSON(),
		DisputeReason: (this.DisputeReason === undefined)? null : this.DisputeReason,
		DisputeExplanation: (this.DisputeExplanation === undefined)? null : this.DisputeExplanation,
		DisputeCreditEligibility: (this.DisputeCreditEligibility === undefined)? null : this.DisputeCreditEligibility,
		DisputeCreatedTime: (this.DisputeCreatedTime === undefined)? null : this.DisputeCreatedTime,
		DisputeModifiedTime: (this.DisputeModifiedTime === undefined)? null : this.DisputeModifiedTime,
		DisputeResolution: (this.DisputeResolution === undefined)? null : this.DisputeResolution,
		DisputeMessage: (this.DisputeMessage === undefined)? null : this.DisputeMessage,
		Escalation: (this.Escalation === undefined)? null : this.Escalation,
		PurchaseProtection: (this.PurchaseProtection === undefined)? null : this.PurchaseProtection,
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
module.exports = DisputeType;