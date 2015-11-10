var OrderIDArrayType = require('../../Trading/OrderIDArrayType'),
	PaginationType = require('../../Trading/PaginationType');

function GetOrdersRequestType(OrderIDArray, CreateTimeFrom, CreateTimeTo, OrderRole, OrderStatus, ListingType, Pagination, ModTimeFrom, ModTimeTo, NumberOfDays, IncludeFinalValueFee, SortingOrder) {

	/**
	  Documentation
	   Retrieves the orders for which the authenticated user is a participant, either as the buyer or the seller.&nbsp;<b>Also for Half.com</b>. The call returns all the orders that meet the request specifications.
	 */

	/**
	 * Arrays
	 */
	var _OrderIDArray;
	var _Pagination;
	Object.defineProperty(this, 'OrderIDArray', {
		 get: function(){
			 return _OrderIDArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof OrderIDArrayType){ 
					_OrderIDArray = value; 
				}else{
					console.log('OrderIDArray expects type OrderIDArrayType');
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
	this.OrderIDArray = OrderIDArray;
	this.CreateTimeFrom = CreateTimeFrom;
	this.CreateTimeTo = CreateTimeTo;
	this.OrderRole = OrderRole;
	this.OrderStatus = OrderStatus;
	this.ListingType = ListingType;
	this.Pagination = Pagination;
	this.ModTimeFrom = ModTimeFrom;
	this.ModTimeTo = ModTimeTo;
	this.NumberOfDays = NumberOfDays;
	this.IncludeFinalValueFee = IncludeFinalValueFee;
	this.SortingOrder = SortingOrder;
}
GetOrdersRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		OrderIDArray: (this.OrderIDArray === undefined)? null : this.OrderIDArray.toJSON(),
		CreateTimeFrom: (this.CreateTimeFrom === undefined)? null : this.CreateTimeFrom,
		CreateTimeTo: (this.CreateTimeTo === undefined)? null : this.CreateTimeTo,
		OrderRole: (this.OrderRole === undefined)? null : this.OrderRole,
		OrderStatus: (this.OrderStatus === undefined)? null : this.OrderStatus,
		ListingType: (this.ListingType === undefined)? null : this.ListingType,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
		ModTimeFrom: (this.ModTimeFrom === undefined)? null : this.ModTimeFrom,
		ModTimeTo: (this.ModTimeTo === undefined)? null : this.ModTimeTo,
		NumberOfDays: (this.NumberOfDays === undefined)? null : this.NumberOfDays,
		IncludeFinalValueFee: (this.IncludeFinalValueFee === undefined)? null : this.IncludeFinalValueFee,
		SortingOrder: (this.SortingOrder === undefined)? null : this.SortingOrder
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
module.exports = GetOrdersRequestType;