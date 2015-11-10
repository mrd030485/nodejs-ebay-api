var DisputeIDType = require('./DisputeIDType'),
	DisputeRecordTypeCodeType = require('./DisputeRecordTypeCodeType'),
	DisputeStateCodeType = require('./DisputeStateCodeType'),
	DisputeStatusCodeType = require('./DisputeStatusCodeType'),
	TradingRoleCodeType = require('./TradingRoleCodeType'),
	UserIDType = require('./UserIDType'),
	ItemType = require('./ItemType'),
	DisputeReasonCodeType = require('./DisputeReasonCodeType'),
	DisputeExplanationCodeType = require('./DisputeExplanationCodeType'),
	DisputeCreditEligibilityCodeType = require('./DisputeCreditEligibilityCodeType');

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
	var _DisputeRecordType;
	var _DisputeState;
	var _DisputeStatus;
	var _OtherPartyRole;
	var _UserRole;
	var _BuyerUserID;
	var _SellerUserID;
	var _Item;
	var _DisputeReason;
	var _DisputeExplanation;
	var _DisputeCreditEligibility;
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
	Object.defineProperty(this, 'DisputeRecordType', {
		 get: function(){
			 return _DisputeRecordType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisputeRecordTypeCodeType){ 
					_DisputeRecordType = value; 
				}else{
					console.log('DisputeRecordType expects type DisputeRecordTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DisputeState', {
		 get: function(){
			 return _DisputeState;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisputeStateCodeType){ 
					_DisputeState = value; 
				}else{
					console.log('DisputeState expects type DisputeStateCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DisputeStatus', {
		 get: function(){
			 return _DisputeStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisputeStatusCodeType){ 
					_DisputeStatus = value; 
				}else{
					console.log('DisputeStatus expects type DisputeStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'OtherPartyRole', {
		 get: function(){
			 return _OtherPartyRole;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TradingRoleCodeType){ 
					_OtherPartyRole = value; 
				}else{
					console.log('OtherPartyRole expects type TradingRoleCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UserRole', {
		 get: function(){
			 return _UserRole;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TradingRoleCodeType){ 
					_UserRole = value; 
				}else{
					console.log('UserRole expects type TradingRoleCodeType');
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
	Object.defineProperty(this, 'DisputeReason', {
		 get: function(){
			 return _DisputeReason;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisputeReasonCodeType){ 
					_DisputeReason = value; 
				}else{
					console.log('DisputeReason expects type DisputeReasonCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DisputeExplanation', {
		 get: function(){
			 return _DisputeExplanation;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisputeExplanationCodeType){ 
					_DisputeExplanation = value; 
				}else{
					console.log('DisputeExplanation expects type DisputeExplanationCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DisputeCreditEligibility', {
		 get: function(){
			 return _DisputeCreditEligibility;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisputeCreditEligibilityCodeType){ 
					_DisputeCreditEligibility = value; 
				}else{
					console.log('DisputeCreditEligibility expects type DisputeCreditEligibilityCodeType');
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
		DisputeRecordType: (this.DisputeRecordType === undefined)? null : this.DisputeRecordType.toJSON(),
		DisputeState: (this.DisputeState === undefined)? null : this.DisputeState.toJSON(),
		DisputeStatus: (this.DisputeStatus === undefined)? null : this.DisputeStatus.toJSON(),
		OtherPartyRole: (this.OtherPartyRole === undefined)? null : this.OtherPartyRole.toJSON(),
		OtherPartyName: (this.OtherPartyName === undefined)? null : this.OtherPartyName,
		UserRole: (this.UserRole === undefined)? null : this.UserRole.toJSON(),
		BuyerUserID: (this.BuyerUserID === undefined)? null : this.BuyerUserID.toJSON(),
		SellerUserID: (this.SellerUserID === undefined)? null : this.SellerUserID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		Item: (this.Item === undefined)? null : this.Item.toJSON(),
		DisputeReason: (this.DisputeReason === undefined)? null : this.DisputeReason.toJSON(),
		DisputeExplanation: (this.DisputeExplanation === undefined)? null : this.DisputeExplanation.toJSON(),
		DisputeCreditEligibility: (this.DisputeCreditEligibility === undefined)? null : this.DisputeCreditEligibility.toJSON(),
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