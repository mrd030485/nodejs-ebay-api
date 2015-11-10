var AmountType = require('./AmountType');

function AdditionalAccountType(Balance, Currency, AccountCode) {

	/**
	  Documentation
	   Contains the data for one additional account. An additional account is created when the user has an active account and changes country of registry (i.e., registers with the eBay site for the new country). A new account is created and the
                    old account becomes inactive as an additional account. A user who never changes country of residency while having an account will never have any additional accounts.
	 */

	/**
	 * Arrays
	 */
	var _Balance;
	Object.defineProperty(this, 'Balance', {
		 get: function(){
			 return _Balance;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_Balance = value; 
				}else{
					console.log('Balance expects type AmountType');
				}
			}
		}
	});
	this.Balance = Balance;
	this.Currency = Currency;
	this.AccountCode = AccountCode;
}
AdditionalAccountType.prototype.toJSON = function(with_null) {
	var json = { 
		Balance: (this.Balance === undefined)? null : this.Balance.toJSON(),
		Currency: (this.Currency === undefined)? null : this.Currency,
		AccountCode: (this.AccountCode === undefined)? null : this.AccountCode
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
module.exports = AdditionalAccountType;