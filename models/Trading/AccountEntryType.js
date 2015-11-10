var AccountDetailEntryCodeType = require('./AccountDetailEntryCodeType'),
	AmountType = require('./AmountType'),
	ItemIDType = require('./ItemIDType'),
	decimal = require('./decimal');

function AccountEntryType(AccountDetailsEntryType, Description, Balance, Date, GrossDetailAmount, ItemID, Memo, ConversionRate, NetDetailAmount, RefNumber, VATPercent, Title, OrderLineItemID, TransactionID, ReceivedTopRatedDiscount) {

	/**
	  Documentation
	   
                Type defining the <b>AccountEntry</b> container returned in the <b>GetAccount</b> response. Each <b>AccountEntry</b> container consists of detailed information for a single credit or debit transaction, or an administrative
                action which occurred on the eBay user's account.
            
	 */

	/**
	 * Arrays
	 */
	var _AccountDetailsEntryType;
	var _Balance;
	var _GrossDetailAmount;
	var _ItemID;
	var _ConversionRate;
	var _NetDetailAmount;
	var _VATPercent;
	Object.defineProperty(this, 'AccountDetailsEntryType', {
		 get: function(){
			 return _AccountDetailsEntryType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AccountDetailEntryCodeType){ 
					_AccountDetailsEntryType = value; 
				}else{
					console.log('AccountDetailsEntryType expects type AccountDetailEntryCodeType');
				}
			}
		}
	});
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
	Object.defineProperty(this, 'GrossDetailAmount', {
		 get: function(){
			 return _GrossDetailAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_GrossDetailAmount = value; 
				}else{
					console.log('GrossDetailAmount expects type AmountType');
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
	Object.defineProperty(this, 'ConversionRate', {
		 get: function(){
			 return _ConversionRate;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ConversionRate = value; 
				}else{
					console.log('ConversionRate expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'NetDetailAmount', {
		 get: function(){
			 return _NetDetailAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_NetDetailAmount = value; 
				}else{
					console.log('NetDetailAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VATPercent', {
		 get: function(){
			 return _VATPercent;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof decimal){ 
					_VATPercent = value; 
				}else{
					console.log('VATPercent expects type decimal');
				}
			}
		}
	});
	this.AccountDetailsEntryType = AccountDetailsEntryType;
	this.Description = Description;
	this.Balance = Balance;
	this.Date = Date;
	this.GrossDetailAmount = GrossDetailAmount;
	this.ItemID = ItemID;
	this.Memo = Memo;
	this.ConversionRate = ConversionRate;
	this.NetDetailAmount = NetDetailAmount;
	this.RefNumber = RefNumber;
	this.VATPercent = VATPercent;
	this.Title = Title;
	this.OrderLineItemID = OrderLineItemID;
	this.TransactionID = TransactionID;
	this.ReceivedTopRatedDiscount = ReceivedTopRatedDiscount;
}
AccountEntryType.prototype.toJSON = function(with_null) {
	var json = { 
		AccountDetailsEntryType: (this.AccountDetailsEntryType === undefined)? null : this.AccountDetailsEntryType.toJSON(),
		Description: (this.Description === undefined)? null : this.Description,
		Balance: (this.Balance === undefined)? null : this.Balance.toJSON(),
		Date: (this.Date === undefined)? null : this.Date,
		GrossDetailAmount: (this.GrossDetailAmount === undefined)? null : this.GrossDetailAmount.toJSON(),
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		Memo: (this.Memo === undefined)? null : this.Memo,
		ConversionRate: (this.ConversionRate === undefined)? null : this.ConversionRate.toJSON(),
		NetDetailAmount: (this.NetDetailAmount === undefined)? null : this.NetDetailAmount.toJSON(),
		RefNumber: (this.RefNumber === undefined)? null : this.RefNumber,
		VATPercent: (this.VATPercent === undefined)? null : this.VATPercent.toJSON(),
		Title: (this.Title === undefined)? null : this.Title,
		OrderLineItemID: (this.OrderLineItemID === undefined)? null : this.OrderLineItemID,
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		ReceivedTopRatedDiscount: (this.ReceivedTopRatedDiscount === undefined)? null : this.ReceivedTopRatedDiscount
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
module.exports = AccountEntryType;