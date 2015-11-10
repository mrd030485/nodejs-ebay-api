var ListingTypeCodeType = require('./ListingTypeCodeType'),
	ItemSortTypeCodeType = require('./ItemSortTypeCodeType'),
	PaginationType = require('./PaginationType'),
	OrderStatusFilterCodeType = require('./OrderStatusFilterCodeType');

function ItemListCustomizationType(Include, ListingType, Sort, DurationInDays, IncludeNotes, Pagination, OrderStatusFilter) {

	/**
	  Documentation
	   
                Defines how a list of items should be returned.
            
	 */

	/**
	 * Arrays
	 */
	var _ListingType;
	var _Sort;
	var _Pagination;
	var _OrderStatusFilter;
	Object.defineProperty(this, 'ListingType', {
		 get: function(){
			 return _ListingType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingTypeCodeType){ 
					_ListingType = value; 
				}else{
					console.log('ListingType expects type ListingTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Sort', {
		 get: function(){
			 return _Sort;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemSortTypeCodeType){ 
					_Sort = value; 
				}else{
					console.log('Sort expects type ItemSortTypeCodeType');
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
	Object.defineProperty(this, 'OrderStatusFilter', {
		 get: function(){
			 return _OrderStatusFilter;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof OrderStatusFilterCodeType){ 
					_OrderStatusFilter = value; 
				}else{
					console.log('OrderStatusFilter expects type OrderStatusFilterCodeType');
				}
			}
		}
	});
	this.Include = Include;
	this.ListingType = ListingType;
	this.Sort = Sort;
	this.DurationInDays = DurationInDays;
	this.IncludeNotes = IncludeNotes;
	this.Pagination = Pagination;
	this.OrderStatusFilter = OrderStatusFilter;
}
ItemListCustomizationType.prototype.toJSON = function(with_null) {
	var json = { 
		Include: (this.Include === undefined)? null : this.Include,
		ListingType: (this.ListingType === undefined)? null : this.ListingType.toJSON(),
		Sort: (this.Sort === undefined)? null : this.Sort.toJSON(),
		DurationInDays: (this.DurationInDays === undefined)? null : this.DurationInDays,
		IncludeNotes: (this.IncludeNotes === undefined)? null : this.IncludeNotes,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
		OrderStatusFilter: (this.OrderStatusFilter === undefined)? null : this.OrderStatusFilter.toJSON()
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
module.exports = ItemListCustomizationType;