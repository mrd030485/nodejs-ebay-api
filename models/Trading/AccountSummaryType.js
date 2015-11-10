var AmountType = require('./AmountType');

function AccountSummaryType(AccountState, InvoicePayment, InvoiceCredit, InvoiceNewFee, AdditionalAccount, AmountPastDue, BankAccountInfo, BankModifyDate, BillingCycleDate, CreditCardExpiration, CreditCardInfo, CreditCardModifyDate, CurrentBalance, Email, InvoiceBalance, InvoiceDate, LastAmountPaid, LastPaymentDate, PastDue, PaymentMethod) {

	/**
	  Documentation
	   Summary data for the requesting user's seller account as a whole. This includes a balance for the account, any past due amount and date, and defining data for additional accounts (if the user has changed country of residency while having
                    an active eBay account).
	 */

	/**
	 * Arrays
	 *	AdditionalAccount: AdditionalAccountType
	 */
	var _InvoicePayment;
	var _InvoiceCredit;
	var _InvoiceNewFee;
	var _AmountPastDue;
	var _CurrentBalance;
	var _InvoiceBalance;
	var _LastAmountPaid;
	Object.defineProperty(this, 'InvoicePayment', {
		 get: function(){
			 return _InvoicePayment;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_InvoicePayment = value; 
				}else{
					console.log('InvoicePayment expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InvoiceCredit', {
		 get: function(){
			 return _InvoiceCredit;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_InvoiceCredit = value; 
				}else{
					console.log('InvoiceCredit expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InvoiceNewFee', {
		 get: function(){
			 return _InvoiceNewFee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_InvoiceNewFee = value; 
				}else{
					console.log('InvoiceNewFee expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AmountPastDue', {
		 get: function(){
			 return _AmountPastDue;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_AmountPastDue = value; 
				}else{
					console.log('AmountPastDue expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CurrentBalance', {
		 get: function(){
			 return _CurrentBalance;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_CurrentBalance = value; 
				}else{
					console.log('CurrentBalance expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InvoiceBalance', {
		 get: function(){
			 return _InvoiceBalance;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_InvoiceBalance = value; 
				}else{
					console.log('InvoiceBalance expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LastAmountPaid', {
		 get: function(){
			 return _LastAmountPaid;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_LastAmountPaid = value; 
				}else{
					console.log('LastAmountPaid expects type AmountType');
				}
			}
		}
	});
	this.AccountState = AccountState;
	this.InvoicePayment = InvoicePayment;
	this.InvoiceCredit = InvoiceCredit;
	this.InvoiceNewFee = InvoiceNewFee;
	this.AdditionalAccount = AdditionalAccount;
	this.AmountPastDue = AmountPastDue;
	this.BankAccountInfo = BankAccountInfo;
	this.BankModifyDate = BankModifyDate;
	this.BillingCycleDate = BillingCycleDate;
	this.CreditCardExpiration = CreditCardExpiration;
	this.CreditCardInfo = CreditCardInfo;
	this.CreditCardModifyDate = CreditCardModifyDate;
	this.CurrentBalance = CurrentBalance;
	this.Email = Email;
	this.InvoiceBalance = InvoiceBalance;
	this.InvoiceDate = InvoiceDate;
	this.LastAmountPaid = LastAmountPaid;
	this.LastPaymentDate = LastPaymentDate;
	this.PastDue = PastDue;
	this.PaymentMethod = PaymentMethod;
}
AccountSummaryType.prototype.toJSON = function(with_null) {
	var json = { 
		AccountState: (this.AccountState === undefined)? null : this.AccountState,
		InvoicePayment: (this.InvoicePayment === undefined)? null : this.InvoicePayment.toJSON(),
		InvoiceCredit: (this.InvoiceCredit === undefined)? null : this.InvoiceCredit.toJSON(),
		InvoiceNewFee: (this.InvoiceNewFee === undefined)? null : this.InvoiceNewFee.toJSON(),
		AdditionalAccount: (this.AdditionalAccount === undefined)? null : this.AdditionalAccount,
		AmountPastDue: (this.AmountPastDue === undefined)? null : this.AmountPastDue.toJSON(),
		BankAccountInfo: (this.BankAccountInfo === undefined)? null : this.BankAccountInfo,
		BankModifyDate: (this.BankModifyDate === undefined)? null : this.BankModifyDate,
		BillingCycleDate: (this.BillingCycleDate === undefined)? null : this.BillingCycleDate,
		CreditCardExpiration: (this.CreditCardExpiration === undefined)? null : this.CreditCardExpiration,
		CreditCardInfo: (this.CreditCardInfo === undefined)? null : this.CreditCardInfo,
		CreditCardModifyDate: (this.CreditCardModifyDate === undefined)? null : this.CreditCardModifyDate,
		CurrentBalance: (this.CurrentBalance === undefined)? null : this.CurrentBalance.toJSON(),
		Email: (this.Email === undefined)? null : this.Email,
		InvoiceBalance: (this.InvoiceBalance === undefined)? null : this.InvoiceBalance.toJSON(),
		InvoiceDate: (this.InvoiceDate === undefined)? null : this.InvoiceDate,
		LastAmountPaid: (this.LastAmountPaid === undefined)? null : this.LastAmountPaid.toJSON(),
		LastPaymentDate: (this.LastPaymentDate === undefined)? null : this.LastPaymentDate,
		PastDue: (this.PastDue === undefined)? null : this.PastDue,
		PaymentMethod: (this.PaymentMethod === undefined)? null : this.PaymentMethod
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
module.exports = AccountSummaryType;