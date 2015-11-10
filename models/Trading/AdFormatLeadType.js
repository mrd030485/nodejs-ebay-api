var AddressType = require('./AddressType'),
	ItemIDType = require('./ItemIDType'),
	UserIDType = require('./UserIDType'),
	MemberMessageExchangeArrayType = require('./MemberMessageExchangeArrayType'),
	AmountType = require('./AmountType');

function AdFormatLeadType(AdditionalInformation, Address, BestTimeToCall, Email, SubmittedTime, ItemID, ItemTitle, UserID, MemberMessage, Status, LeadFee, ExternalEmail, PurchaseTimeFrame, TradeInYear, TradeInMake, TradeInModel, FinancingAnswer, Answer1, Answer2) {

	/**
	  Documentation
	   This type is used by the <b>AdFormatLead</b> container that is returned in the <b>GetAdFormatLeads</b> call response. An <b>AdFormatLead</b> container will be returned for each user that has expressed
                    interest in the Classified Ad listing that was specified by the seller in the <b>GetAdFormatLeads</b> call request. Each <b>AdFormatLead</b> container consists of prospective buyer contact information and other
                    details associated with a lead for a Classified Ad listing.
	 */

	/**
	 * Arrays
	 */
	var _Address;
	var _ItemID;
	var _UserID;
	var _MemberMessage;
	var _LeadFee;
	Object.defineProperty(this, 'Address', {
		 get: function(){
			 return _Address;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressType){ 
					_Address = value; 
				}else{
					console.log('Address expects type AddressType');
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
	Object.defineProperty(this, 'MemberMessage', {
		 get: function(){
			 return _MemberMessage;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MemberMessageExchangeArrayType){ 
					_MemberMessage = value; 
				}else{
					console.log('MemberMessage expects type MemberMessageExchangeArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LeadFee', {
		 get: function(){
			 return _LeadFee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_LeadFee = value; 
				}else{
					console.log('LeadFee expects type AmountType');
				}
			}
		}
	});
	this.AdditionalInformation = AdditionalInformation;
	this.Address = Address;
	this.BestTimeToCall = BestTimeToCall;
	this.Email = Email;
	this.SubmittedTime = SubmittedTime;
	this.ItemID = ItemID;
	this.ItemTitle = ItemTitle;
	this.UserID = UserID;
	this.MemberMessage = MemberMessage;
	this.Status = Status;
	this.LeadFee = LeadFee;
	this.ExternalEmail = ExternalEmail;
	this.PurchaseTimeFrame = PurchaseTimeFrame;
	this.TradeInYear = TradeInYear;
	this.TradeInMake = TradeInMake;
	this.TradeInModel = TradeInModel;
	this.FinancingAnswer = FinancingAnswer;
	this.Answer1 = Answer1;
	this.Answer2 = Answer2;
}
AdFormatLeadType.prototype.toJSON = function(with_null) {
	var json = { 
		AdditionalInformation: (this.AdditionalInformation === undefined)? null : this.AdditionalInformation,
		Address: (this.Address === undefined)? null : this.Address.toJSON(),
		BestTimeToCall: (this.BestTimeToCall === undefined)? null : this.BestTimeToCall,
		Email: (this.Email === undefined)? null : this.Email,
		SubmittedTime: (this.SubmittedTime === undefined)? null : this.SubmittedTime,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		ItemTitle: (this.ItemTitle === undefined)? null : this.ItemTitle,
		UserID: (this.UserID === undefined)? null : this.UserID.toJSON(),
		MemberMessage: (this.MemberMessage === undefined)? null : this.MemberMessage.toJSON(),
		Status: (this.Status === undefined)? null : this.Status,
		LeadFee: (this.LeadFee === undefined)? null : this.LeadFee.toJSON(),
		ExternalEmail: (this.ExternalEmail === undefined)? null : this.ExternalEmail,
		PurchaseTimeFrame: (this.PurchaseTimeFrame === undefined)? null : this.PurchaseTimeFrame,
		TradeInYear: (this.TradeInYear === undefined)? null : this.TradeInYear,
		TradeInMake: (this.TradeInMake === undefined)? null : this.TradeInMake,
		TradeInModel: (this.TradeInModel === undefined)? null : this.TradeInModel,
		FinancingAnswer: (this.FinancingAnswer === undefined)? null : this.FinancingAnswer,
		Answer1: (this.Answer1 === undefined)? null : this.Answer1,
		Answer2: (this.Answer2 === undefined)? null : this.Answer2
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
module.exports = AdFormatLeadType;