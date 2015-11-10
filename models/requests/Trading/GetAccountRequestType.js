var PaginationType = require('../../Trading/PaginationType'),
	ItemIDType = require('../../Trading/ItemIDType');

function GetAccountRequestType(AccountHistorySelection, InvoiceDate, BeginDate, EndDate, Pagination, ExcludeBalance, ExcludeSummary, IncludeConversionRate, AccountEntrySortType, Currency, ItemID) {

	/**
	  Documentation
	   Returns a seller's invoice data for their eBay account, including the account's summary data.
	 */

	/**
	 * Arrays
	 */
	var _Pagination;
	var _ItemID;
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
	this.AccountHistorySelection = AccountHistorySelection;
	this.InvoiceDate = InvoiceDate;
	this.BeginDate = BeginDate;
	this.EndDate = EndDate;
	this.Pagination = Pagination;
	this.ExcludeBalance = ExcludeBalance;
	this.ExcludeSummary = ExcludeSummary;
	this.IncludeConversionRate = IncludeConversionRate;
	this.AccountEntrySortType = AccountEntrySortType;
	this.Currency = Currency;
	this.ItemID = ItemID;
}
GetAccountRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		AccountHistorySelection: (this.AccountHistorySelection === undefined)? null : this.AccountHistorySelection,
		InvoiceDate: (this.InvoiceDate === undefined)? null : this.InvoiceDate,
		BeginDate: (this.BeginDate === undefined)? null : this.BeginDate,
		EndDate: (this.EndDate === undefined)? null : this.EndDate,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
		ExcludeBalance: (this.ExcludeBalance === undefined)? null : this.ExcludeBalance,
		ExcludeSummary: (this.ExcludeSummary === undefined)? null : this.ExcludeSummary,
		IncludeConversionRate: (this.IncludeConversionRate === undefined)? null : this.IncludeConversionRate,
		AccountEntrySortType: (this.AccountEntrySortType === undefined)? null : this.AccountEntrySortType,
		Currency: (this.Currency === undefined)? null : this.Currency,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON()
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
module.exports = GetAccountRequestType;