var ItemIDType = require('../../Trading/ItemIDType'),
	PaginationType = require('../../Trading/PaginationType');

function GetItemTransactionsRequestType(ItemID, ModTimeFrom, ModTimeTo, TransactionID, Pagination, IncludeFinalValueFee, IncludeContainingOrder, Platform, NumberOfDays, IncludeVariations, OrderLineItemID) {

	/**
	  Documentation
	   Retrieves order line item information for a specified <b>ItemID</b>. & nbsp;<b>Also for Half.com</b>. The call returns zero, one, or multiple order line items, depending on the number of items sold from the
                    listing. <br><br> You can retrieve order line item data for a specific time range or number of days. If you don't specify a range or number of days, order line item data will be returned for the past 30 days.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _Pagination;
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
	this.ItemID = ItemID;
	this.ModTimeFrom = ModTimeFrom;
	this.ModTimeTo = ModTimeTo;
	this.TransactionID = TransactionID;
	this.Pagination = Pagination;
	this.IncludeFinalValueFee = IncludeFinalValueFee;
	this.IncludeContainingOrder = IncludeContainingOrder;
	this.Platform = Platform;
	this.NumberOfDays = NumberOfDays;
	this.IncludeVariations = IncludeVariations;
	this.OrderLineItemID = OrderLineItemID;
}
GetItemTransactionsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		ModTimeFrom: (this.ModTimeFrom === undefined)? null : this.ModTimeFrom,
		ModTimeTo: (this.ModTimeTo === undefined)? null : this.ModTimeTo,
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
		IncludeFinalValueFee: (this.IncludeFinalValueFee === undefined)? null : this.IncludeFinalValueFee,
		IncludeContainingOrder: (this.IncludeContainingOrder === undefined)? null : this.IncludeContainingOrder,
		Platform: (this.Platform === undefined)? null : this.Platform,
		NumberOfDays: (this.NumberOfDays === undefined)? null : this.NumberOfDays,
		IncludeVariations: (this.IncludeVariations === undefined)? null : this.IncludeVariations,
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
module.exports = GetItemTransactionsRequestType;