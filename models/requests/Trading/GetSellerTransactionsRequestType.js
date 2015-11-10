var PaginationType = require('../../Trading/PaginationType'),
	SKUArrayType = require('../../Trading/SKUArrayType');

function GetSellerTransactionsRequestType(ModTimeFrom, ModTimeTo, Pagination, IncludeFinalValueFee, IncludeContainingOrder, SKUArray, Platform, NumberOfDays, InventoryTrackingMethod, IncludeCodiceFiscale) {

	/**
	  Documentation
	   Retrieves order line item (transaction) information for the user for which the call is made, and not for any other user.&nbsp;<b>Also for Half.com</b>. (To retrieve order line items for another seller's listings, use GetItemTransactions.)
	 */

	/**
	 * Arrays
	 */
	var _Pagination;
	var _SKUArray;
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
	Object.defineProperty(this, 'SKUArray', {
		 get: function(){
			 return _SKUArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SKUArrayType){ 
					_SKUArray = value; 
				}else{
					console.log('SKUArray expects type SKUArrayType');
				}
			}
		}
	});
	this.ModTimeFrom = ModTimeFrom;
	this.ModTimeTo = ModTimeTo;
	this.Pagination = Pagination;
	this.IncludeFinalValueFee = IncludeFinalValueFee;
	this.IncludeContainingOrder = IncludeContainingOrder;
	this.SKUArray = SKUArray;
	this.Platform = Platform;
	this.NumberOfDays = NumberOfDays;
	this.InventoryTrackingMethod = InventoryTrackingMethod;
	this.IncludeCodiceFiscale = IncludeCodiceFiscale;
}
GetSellerTransactionsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ModTimeFrom: (this.ModTimeFrom === undefined)? null : this.ModTimeFrom,
		ModTimeTo: (this.ModTimeTo === undefined)? null : this.ModTimeTo,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
		IncludeFinalValueFee: (this.IncludeFinalValueFee === undefined)? null : this.IncludeFinalValueFee,
		IncludeContainingOrder: (this.IncludeContainingOrder === undefined)? null : this.IncludeContainingOrder,
		SKUArray: (this.SKUArray === undefined)? null : this.SKUArray.toJSON(),
		Platform: (this.Platform === undefined)? null : this.Platform,
		NumberOfDays: (this.NumberOfDays === undefined)? null : this.NumberOfDays,
		InventoryTrackingMethod: (this.InventoryTrackingMethod === undefined)? null : this.InventoryTrackingMethod,
		IncludeCodiceFiscale: (this.IncludeCodiceFiscale === undefined)? null : this.IncludeCodiceFiscale
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
module.exports = GetSellerTransactionsRequestType;