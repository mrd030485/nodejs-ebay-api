var UserIdentityType = require('./UserIdentityType'),
	AmountType = require('./AmountType'),
	TransactionReferenceType = require('./TransactionReferenceType');

function PaymentTransactionType(PaymentStatus, Payer, Payee, PaymentTime, PaymentAmount, ReferenceID, FeeOrCreditAmount, PaymentReferenceID) {

	/**
	  Documentation
	   This type contains details about the allocation of funds to one payee from a buyer payment for a specified order.
	 */

	/**
	 * Arrays
	 *	PaymentReferenceID: TransactionReferenceType
	 */
	var _Payer;
	var _Payee;
	var _PaymentAmount;
	var _ReferenceID;
	var _FeeOrCreditAmount;
	Object.defineProperty(this, 'Payer', {
		 get: function(){
			 return _Payer;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIdentityType){ 
					_Payer = value; 
				}else{
					console.log('Payer expects type UserIdentityType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Payee', {
		 get: function(){
			 return _Payee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIdentityType){ 
					_Payee = value; 
				}else{
					console.log('Payee expects type UserIdentityType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentAmount', {
		 get: function(){
			 return _PaymentAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_PaymentAmount = value; 
				}else{
					console.log('PaymentAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ReferenceID', {
		 get: function(){
			 return _ReferenceID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TransactionReferenceType){ 
					_ReferenceID = value; 
				}else{
					console.log('ReferenceID expects type TransactionReferenceType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FeeOrCreditAmount', {
		 get: function(){
			 return _FeeOrCreditAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_FeeOrCreditAmount = value; 
				}else{
					console.log('FeeOrCreditAmount expects type AmountType');
				}
			}
		}
	});
	this.PaymentStatus = PaymentStatus;
	this.Payer = Payer;
	this.Payee = Payee;
	this.PaymentTime = PaymentTime;
	this.PaymentAmount = PaymentAmount;
	this.ReferenceID = ReferenceID;
	this.FeeOrCreditAmount = FeeOrCreditAmount;
	this.PaymentReferenceID = PaymentReferenceID;
}
PaymentTransactionType.prototype.toJSON = function(with_null) {
	var json = { 
		PaymentStatus: (this.PaymentStatus === undefined)? null : this.PaymentStatus,
		Payer: (this.Payer === undefined)? null : this.Payer.toJSON(),
		Payee: (this.Payee === undefined)? null : this.Payee.toJSON(),
		PaymentTime: (this.PaymentTime === undefined)? null : this.PaymentTime,
		PaymentAmount: (this.PaymentAmount === undefined)? null : this.PaymentAmount.toJSON(),
		ReferenceID: (this.ReferenceID === undefined)? null : this.ReferenceID.toJSON(),
		FeeOrCreditAmount: (this.FeeOrCreditAmount === undefined)? null : this.FeeOrCreditAmount.toJSON(),
		PaymentReferenceID: (this.PaymentReferenceID === undefined)? null : this.PaymentReferenceID
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
module.exports = PaymentTransactionType;